import { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";

const YOUTUBE_API_KEY = "AIzaSyCjLRnJ3aLkCIFutkj-c5USfbaUR-me1Yc";
const CHANNEL_ID = "UCbxzn4WmIYKMkhZtyeha2rg";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchVideos = async (pageToken = "") => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?` +
          `key=${YOUTUBE_API_KEY}` +
          `&channelId=${CHANNEL_ID}` +
          `&part=snippet` +
          `&order=date` +
          `&maxResults=12` +
          `&type=video` +
          (pageToken ? `&pageToken=${pageToken}` : "")
      );

      const data = await res.json();

      // 🚨 Handle API errors safely
      if (!data.items || !Array.isArray(data.items)) {
        console.error("YouTube API Error:", data);
        setError(data?.error?.message || "Failed to load videos");
        return;
      }

      // ✅ Remove duplicate videos by videoId
      setVideos((prev) => {
        const existingIds = new Set(prev.map(v => v.id.videoId));
        const uniqueNewVideos = data.items.filter(
          v => !existingIds.has(v.id.videoId)
        );
        return [...prev, ...uniqueNewVideos];
      });

      setNextPageToken(data.nextPageToken || "");
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <FaYoutube className="text-red-600 text-3xl" />
        <h1 className="text-3xl font-bold">YouTube Videos</h1>
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-400 mb-6">{error}</p>
      )}

      {/* Videos Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900 rounded-xl overflow-hidden hover:scale-[1.03] transition"
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold line-clamp-2 group-hover:text-red-500">
                {video.snippet.title}
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(video.snippet.publishedAt).toDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Load More */}
      {nextPageToken && (
        <div className="text-center mt-10">
          <button
            onClick={() => fetchVideos(nextPageToken)}
            disabled={loading}
            className="px-6 py-3 bg-red-600 rounded-full hover:bg-red-700 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More Videos"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Videos;
