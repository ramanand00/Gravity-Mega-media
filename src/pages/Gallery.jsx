import { useState } from 'react';
import SEO from '../components/SEO';
import { FaSearch, FaFilter, FaTimes, FaExpand, FaDownload } from 'react-icons/fa';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'studio', name: 'Studio' },
    { id: 'behind', name: 'Behind the Scenes' },
    { id: 'office', name: 'Office Life' },
    { id: 'team', name: 'Team Activities' }
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'The GRAVITY SHOW Set',
      description: 'Our main studio setup for The GRAVITY SHOW recordings',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop',
      category: 'studio',
      date: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Media Awards 2023',
      description: 'Team celebration at the National Media Awards ceremony',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      category: 'events',
      date: '2023-12-20',
      featured: true
    },
    {
      id: 3,
      title: 'Editing Room',
      description: 'Our state-of-the-art editing suite in action',
      image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=800&h=600&fit=crop',
      category: 'studio',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'Behind the Camera',
      description: 'Camera crew setting up for a documentary shoot',
      image: 'https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?w=800&h=600&fit=crop',
      category: 'behind',
      date: '2024-01-05'
    },
    {
      id: 5,
      title: 'Team Building Event',
      description: 'Annual team building activities at our retreat',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
      category: 'team',
      date: '2023-12-15'
    },
    {
      id: 6,
      title: 'Client Meeting',
      description: 'Strategy discussion with major client partners',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      category: 'office',
      date: '2024-01-12'
    },
    {
      id: 7,
      title: 'Equipment Setup',
      description: 'Preparing equipment for outdoor shooting',
      image: 'https://images.unsplash.com/photo-1552423314-cf29d1cdfc33?w=800&h=600&fit=crop',
      category: 'behind',
      date: '2024-01-08'
    },
    {
      id: 8,
      title: 'Creative Workshop',
      description: 'Internal workshop on creative storytelling techniques',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&h=600&fit=crop',
      category: 'office',
      date: '2023-12-28'
    },
    {
      id: 9,
      title: 'Product Launch Event',
      description: 'Live coverage of major product launch event',
      image: 'https://images.unsplash.com/photo-1492684223066-e9e6a0f5b7c0?w=800&h=600&fit=crop',
      category: 'events',
      date: '2023-12-10'
    },
    {
      id: 10,
      title: 'Sound Studio Session',
      description: 'Recording session in our professional sound studio',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop',
      category: 'studio',
      date: '2024-01-03'
    },
    {
      id: 11,
      title: 'Festival Celebration',
      description: 'Office Diwali celebration with team members',
      image: 'https://images.unsplash.com/photo-1601379327921-8edd3f1691c4?w=800&h=600&fit=crop',
      category: 'team',
      date: '2023-11-12'
    },
    {
      id: 12,
      title: 'Drone Footage Setup',
      description: 'Preparing drone for aerial video capture',
      image: 'https://images.unsplash.com/photo-1525673817900-c62483e9fe8c?w=800&h=600&fit=crop',
      category: 'behind',
      date: '2024-01-18'
    }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <SEO title="Gallery - Gravity Mega Media" description="A visual journey through our work, events, and team moments." path="/gallery" image="/social-image.svg" />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A visual journey through our work, events, and team moments
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative w-full lg:w-auto lg:flex-1 max-w-lg">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center space-x-4">
              <FaFilter className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                        {image.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span>{formatDate(image.date)}</span>
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                          {image.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {image.featured && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                No images found
              </h3>
              <p className="text-gray-500">
                {searchTerm 
                  ? `No images match "${searchTerm}"`
                  : 'No images available in this category'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Clear search
                </button>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Gallery Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Total Photos', value: galleryImages.length },
                { label: 'Events Covered', value: '24' },
                { label: 'Studio Sessions', value: '156' },
                { label: 'Team Moments', value: '89' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
            >
              <FaTimes size={28} />
            </button>

            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="bg-white p-6 rounded-b-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
                <div className="flex space-x-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaExpand size={20} />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaDownload size={20} />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-6">
                  <span>Category: {selectedImage.category}</span>
                  <span>Date: {formatDate(selectedImage.date)}</span>
                </div>
                <span>ID: {selectedImage.id}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need High-Resolution Images?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for access to high-resolution versions of our gallery images for press or partnership purposes.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg"
          >
            Request Access
            <FaDownload className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;