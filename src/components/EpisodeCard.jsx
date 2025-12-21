const EpisodeCard = ({ episode }) => {
  const thumbnail = `https://img.youtube.com/vi/${episode.id}/hqdefault.jpg`;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6">
        <span className="text-sm text-primary-600 font-bold">{episode.category}</span>
        <h3 className="text-xl font-bold mt-2 mb-2">{episode.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{episode.description}</p>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${episode.id}`}
            title={episode.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
