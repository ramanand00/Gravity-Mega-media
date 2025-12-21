import { motion } from 'framer-motion';
import { FaPlay, FaExternalLinkAlt, FaShareAlt, FaCalendar, FaClock } from 'react-icons/fa';
import { useState } from 'react';

const EpisodeCard = ({ episode }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300"
    >
      {/* Video Container */}
      <div className="relative overflow-hidden">
        {/* Loading placeholder */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isVideoLoaded ? 0 : 1 }}
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <FaPlay className="text-white text-xl ml-1" />
            </motion.div>
            <p className="text-gray-600 font-medium">Loading video...</p>
          </div>
        </motion.div>

        {/* YouTube Video */}
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${episode.id}?autoplay=0&rel=0&modestbranding=1`}
            title={episode.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
            onLoad={() => setIsVideoLoaded(true)}
            loading="lazy"
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Play button overlay */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
          onClick={() => window.open(`https://youtube.com/watch?v=${episode.id}`, '_blank')}
          aria-label="Open in YouTube"
        >
          <FaExternalLinkAlt />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category and metadata */}
        <div className="flex items-center justify-between mb-3">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 text-sm font-bold rounded-full"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full" />
            {episode.category}
          </motion.span>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {episode.date && (
              <div className="flex items-center gap-1">
                <FaCalendar className="text-primary-500" />
                <span>{episode.date}</span>
              </div>
            )}
            {episode.duration && (
              <div className="flex items-center gap-1">
                <FaClock className="text-secondary-500" />
                <span>{episode.duration}</span>
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <motion.h3
          whileHover={{ color: "#4F46E5" }}
          className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2"
        >
          {episode.title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {episode.description}
        </p>

        {/* Tags (if any) */}
        {episode.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {episode.tags.slice(0, 3).map((tag, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
            onClick={() => window.open(`https://youtube.com/watch?v=${episode.id}`, '_blank')}
          >
            <FaPlay />
            Watch Full Video
          </motion.button>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-500 hover:text-primary-600 transition-colors duration-200"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: episode.title,
                    text: episode.description,
                    url: `https://youtube.com/watch?v=${episode.id}`,
                  });
                }
              }}
              aria-label="Share"
            >
              <FaShareAlt />
            </motion.button>
            
            {episode.views && (
              <span className="text-sm text-gray-500">
                {episode.views.toLocaleString()} views
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-500 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary-500 rounded-br-2xl" />
    </motion.div>
  );
};

export default EpisodeCard;