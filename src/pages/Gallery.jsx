import { useState, useRef, useEffect } from 'react';
import SEO from '../components/SEO';
import { 
  FaSearch, 
  FaFilter, 
  FaTimes, 
  FaExpand, 
  FaDownload, 
  FaHeart, 
  FaShareAlt,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaImages,
  FaCalendar,
  FaTag,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const slideshowInterval = useRef(null);
  const lightboxRef = useRef(null);

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📷', count: 12 },
    { id: 'events', name: 'Events', icon: '🎉', count: 4 },
    { id: 'studio', name: 'Studio', icon: '🎬', count: 3 },
    { id: 'behind', name: 'Behind the Scenes', icon: '🎥', count: 3 },
    { id: 'office', name: 'Office Life', icon: '🏢', count: 2 },
    { id: 'team', name: 'Team Activities', icon: '👥', count: 3 }
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'The GRAVITY SHOW Set',
      description: 'Our main studio setup for The GRAVITY SHOW recordings with 4K camera setup and professional lighting',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop',
      category: 'studio',
      date: '2024-01-15',
      featured: true,
      tags: ['studio', 'production', '4k', 'lighting'],
      resolution: '3840x2160',
      size: '8.2 MB'
    },
    {
      id: 2,
      title: 'Media Awards 2023',
      description: 'Team celebration at the National Media Awards ceremony - Best Production Company Winners',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
      category: 'events',
      date: '2023-12-20',
      featured: true,
      tags: ['awards', 'celebration', 'team', 'achievement'],
      resolution: '3840x2160',
      size: '7.8 MB'
    },
    {
      id: 3,
      title: 'Editing Room',
      description: 'Our state-of-the-art editing suite in action with dual monitor setup and color grading station',
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=400&h=300&fit=crop',
      category: 'studio',
      date: '2024-01-10',
      tags: ['editing', 'post-production', 'workstation'],
      resolution: '3840x2160',
      size: '9.1 MB'
    },
    {
      id: 4,
      title: 'Behind the Camera',
      description: 'Camera crew setting up for a documentary shoot in natural environment',
      image: 'https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?w=400&h=300&fit=crop',
      category: 'behind',
      date: '2024-01-05',
      tags: ['documentary', 'outdoor', 'filming'],
      resolution: '3840x2160',
      size: '10.2 MB'
    },
    {
      id: 5,
      title: 'Team Building Event',
      description: 'Annual team building activities at our mountain retreat with adventure sports',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
      category: 'team',
      date: '2023-12-15',
      tags: ['retreat', 'adventure', 'bonding'],
      resolution: '3840x2160',
      size: '8.5 MB'
    },
    {
      id: 6,
      title: 'Client Meeting',
      description: 'Strategy discussion with major client partners in our conference room',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      category: 'office',
      date: '2024-01-12',
      tags: ['client', 'meeting', 'strategy'],
      resolution: '3840x2160',
      size: '7.9 MB'
    },
    {
      id: 7,
      title: 'Creative Workshop',
      description: 'Internal workshop on creative storytelling techniques and narrative development',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop',
      category: 'office',
      date: '2023-12-28',
      tags: ['workshop', 'creative', 'learning'],
      resolution: '3840x2160',
      size: '8.3 MB'
    },
    {
      id: 8,
      title: 'Sound Studio Session',
      description: 'Recording session in our professional Dolby Atmos sound studio',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop',
      category: 'studio',
      date: '2024-01-03',
      tags: ['audio', 'recording', 'studio'],
      resolution: '3840x2160',
      size: '8.7 MB'
    },
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const startSlideshow = () => {
    if (isSlideshowPlaying) {
      clearInterval(slideshowInterval.current);
      setIsSlideshowPlaying(false);
    } else {
      setIsSlideshowPlaying(true);
      slideshowInterval.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % filteredImages.length);
      }, 3000);
    }
  };

  const nextImage = () => {
    setCurrentSlide(prev => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentSlide(prev => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentSlide(index);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsSlideshowPlaying(false);
    clearInterval(slideshowInterval.current);
  };

  const downloadImage = (imageUrl, imageName) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${imageName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    return () => {
      clearInterval(slideshowInterval.current);
    };
  }, []);

  const handleWheel = (e) => {
    if (selectedImage && e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setZoomLevel(prev => Math.max(0.5, Math.min(3, prev + delta)));
    }
  };

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      return () => window.removeEventListener('wheel', handleWheel);
    }
  }, [selectedImage]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Gallery - Gravity Mega Media" 
        description="A visual journey through our work, events, and team moments." 
        path="/gallery" 
        image="/social-image.svg" 
      />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-600/90 z-10"
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920")',
            animation: 'slowZoom 30s infinite alternate'
          }}
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              <span className="block">Visual</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
                Gallery
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              A curated collection of moments that define our journey, creativity, and passion
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('gallery-grid').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105"
              >
                Explore Gallery
              </button>
              <button 
                onClick={startSlideshow}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center"
              >
                {isSlideshowPlaying ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}
                {isSlideshowPlaying ? 'Pause Slideshow' : 'Start Slideshow'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white shadow-lg py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📷', label: 'Total Images', value: galleryImages.length },
              { icon: '⭐', label: 'Featured', value: galleryImages.filter(img => img.featured).length },
              { icon: '❤️', label: 'Favorites', value: favorites.length },
              { icon: '📅', label: 'Latest Update', value: 'Today' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FaImages />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-3 rounded-lg transition-all ${viewMode === 'masonry' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                <FaFilter />
              </button>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search images by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none shadow-sm"
              />
            </div>

            {/* Categories */}
            <div className="relative group">
              <button className="flex items-center px-4 py-3 bg-white border border-gray-300 rounded-xl hover:border-primary-500 transition-colors">
                <FaFilter className="mr-3 text-gray-500" />
                <span className="font-medium">
                  {categories.find(c => c.id === selectedCategory)?.name || 'All Categories'}
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 hidden group-hover:block z-50">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all mb-1 last:mb-0 ${
                      selectedCategory === category.id
                        ? 'bg-primary-50 text-primary-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery-grid" className="py-12">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
              }
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    viewMode === 'masonry' ? 'break-inside-avoid' : ''
                  }`}
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Image Container */}
                  <div className={`${viewMode === 'grid' ? 'aspect-square' : ''} overflow-hidden relative`}>
                    <img
                      src={image.thumbnail}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(image.id);
                        }}
                        className={`p-2 rounded-full ${favorites.includes(image.id) ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-700 hover:bg-white'}`}
                      >
                        <FaHeart className={favorites.includes(image.id) ? 'fill-current' : ''} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadImage(image.image, image.title);
                        }}
                        className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white"
                      >
                        <FaDownload />
                      </button>
                    </div>

                    {/* Featured Badge */}
                    {image.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ⭐ Featured
                      </div>
                    )}
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <FaCalendar className="mr-1" />
                        <span>{formatDate(image.date)}</span>
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                        {image.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {image.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick View Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <FaExpand className="text-white text-2xl" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📷</div>
              <h3 className="text-3xl font-bold text-gray-700 mb-4">
                No images found
              </h3>
              <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                {searchTerm 
                  ? `We couldn't find any images matching "${searchTerm}"`
                  : 'No images available in this category'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}

          {/* Category Highlights */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.slice(1).map(category => (
                <div
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-xl text-center cursor-pointer transition-all hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'bg-white border border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <div className="font-semibold mb-1">{category.name}</div>
                  <div className="text-sm opacity-75">{category.count} images</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white overflow-hidden">
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl" />
              
              <h2 className="text-4xl font-bold mb-12 text-center relative z-10">
                Gallery in Numbers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { label: 'High-Res Images', value: '12K+', description: 'Available for download' },
                  { label: 'Events Covered', value: '24', description: 'Major productions' },
                  { label: 'Studio Sessions', value: '156', description: 'Hours of content' },
                  { label: 'Team Members', value: '50+', description: 'Featured in gallery' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                  >
                    <div className="text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-300">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-7xl w-full max-h-[90vh]"
              onClick={e => e.stopPropagation()}
              ref={lightboxRef}
            >
              {/* Navigation Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-colors"
              >
                <FaArrowLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-colors"
              >
                <FaArrowRight size={24} />
              </button>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <FaTimes size={24} />
              </button>

              {/* Image Container */}
              <div className="overflow-hidden rounded-2xl bg-gray-900">
                <div className="relative">
                  <motion.img
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={filteredImages[currentSlide]?.image}
                    alt={filteredImages[currentSlide]?.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                  
                  {/* Zoom Controls */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                    <button
                      onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.25))}
                      className="text-white hover:text-gray-300"
                    >
                      -
                    </button>
                    <span className="text-white text-sm">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.25))}
                      className="text-white hover:text-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Image Info */}
                <div className="bg-gray-900 text-white p-8">
                  <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-3xl font-bold">
                          {filteredImages[currentSlide]?.title}
                        </h3>
                        <button
                          onClick={() => toggleFavorite(filteredImages[currentSlide]?.id)}
                          className={`p-2 rounded-full ${favorites.includes(filteredImages[currentSlide]?.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
                        >
                          <FaHeart size={20} className={favorites.includes(filteredImages[currentSlide]?.id) ? 'fill-current' : ''} />
                        </button>
                      </div>
                      <p className="text-gray-300 text-lg mb-6">
                        {filteredImages[currentSlide]?.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                          <FaCalendar className="mr-2 text-gray-400" />
                          <span>{formatDate(filteredImages[currentSlide]?.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <FaTag className="mr-2 text-gray-400" />
                          <span className="capitalize">{filteredImages[currentSlide]?.category}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2">Resolution:</span>
                          <span>{filteredImages[currentSlide]?.resolution}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2">Size:</span>
                          <span>{filteredImages[currentSlide]?.size}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 mt-6 lg:mt-0">
                      <button
                        onClick={() => downloadImage(filteredImages[currentSlide]?.image, filteredImages[currentSlide]?.title)}
                        className="flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-colors"
                      >
                        <FaDownload className="mr-2" />
                        Download
                      </button>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Link copied to clipboard!');
                        }}
                        className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
                      >
                        <FaShareAlt className="mr-2" />
                        Share
                      </button>
                    </div>
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="flex space-x-4 overflow-x-auto pb-4 pt-6">
                    {filteredImages.map((img, index) => (
                      <button
                        key={img.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentSlide
                            ? 'border-primary-500 scale-105'
                            : 'border-transparent hover:border-gray-500'
                        }`}
                      >
                        <img
                          src={img.thumbnail}
                          alt={img.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentSlide + 1} / {filteredImages.length}
              </div>

              {/* Slideshow Control */}
              <button
                onClick={startSlideshow}
                className="absolute top-4 left-4 z-10 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full flex items-center text-sm"
              >
                {isSlideshowPlaying ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}
                {isSlideshowPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Want Access to Our Full Media Library?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Get access to high-resolution images, exclusive behind-the-scenes content, and professional media assets for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Request Media Access
                <FaExternalLinkAlt className="ml-3" />
              </a>
              <button
                onClick={() => {
                  const selected = galleryImages.filter(img => favorites.includes(img.id));
                  alert(`You have ${selected.length} favorite images saved!`);
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300"
              >
                <FaHeart className="mr-3" />
                View Favorites ({favorites.length})
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              All images are © Gravity Mega Media. Usage requires attribution and permission.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        /* Hide scrollbar for thumbnail strip */
        .overflow-x-auto::-webkit-scrollbar {
          height: 6px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Gallery;