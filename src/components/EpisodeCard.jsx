import { FaPlay, FaEye, FaCalendarAlt } from 'react-icons/fa';
import YouTubeEmbed from './YouTubeEmbed';

const EpisodeCard = ({ episode }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={episode.thumbnail}
          alt={episode.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <FaPlay className="text-white text-4xl" />
        </div>
        {episode.isFeatured && (
          <span className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {episode.category}
          </span>
          <div className="flex items-center space-x-4 text-gray-500 text-sm">
            <span className="flex items-center">
              <FaEye className="mr-1" /> {episode.views}
            </span>
            <span className="flex items-center">
              <FaCalendarAlt className="mr-1" /> {formatDate(episode.createdAt)}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {episode.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {episode.description}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <YouTubeEmbed videoId={episode.youtubeId} title={episode.title} />
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;