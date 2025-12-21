const YouTubeChannelEmbed = () => {
  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.youtube.com/embed/videoseries?list=UUbxzn4WmIYKMkhZtyeha2rg"
        title="Gravity Show Videos"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default YouTubeChannelEmbed;
