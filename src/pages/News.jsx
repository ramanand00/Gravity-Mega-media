import { useState } from 'react';
import { FaCalendar, FaUser, FaTag, FaArrowRight, FaSearch } from 'react-icons/fa';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'industry', name: 'Industry News' },
    { id: 'updates', name: 'Company Updates' },
    { id: 'events', name: 'Events' },
    { id: 'press', name: 'Press Release' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Gravity Media Launches New AI-Powered Editing Suite',
      excerpt: 'Revolutionary AI tools that transform video editing workflows and enhance creative capabilities for media professionals.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      category: 'industry',
      date: '2024-01-15',
      author: 'Dipak Chalagain',
      tags: ['AI', 'Innovation', 'Technology'],
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The GRAVITY SHOW Reaches 1 Million Subscribers',
      excerpt: 'Celebrating a major milestone as our flagship show crosses 1 million subscribers on YouTube.',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=400&fit=crop',
      category: 'updates',
      date: '2024-01-10',
      author: 'Bipana Pant',
      tags: ['Milestone', 'YouTube', 'Growth'],
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Media Trends 2024: What to Expect in Digital Content',
      excerpt: 'Expert analysis of upcoming trends in digital media production and consumption patterns.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
      category: 'industry',
      date: '2024-01-05',
      author: 'Ramanand Mandal',
      tags: ['Trends', 'Analysis', 'Digital'],
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Gravity Media Wins Best Production Company Award',
      excerpt: 'Recognized for excellence in creative production at the National Media Awards 2023.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=400&fit=crop',
      category: 'press',
      date: '2023-12-20',
      author: 'Neha Singh',
      tags: ['Awards', 'Recognition', 'Achievement'],
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'Live Streaming Workshop: Mastering Digital Events',
      excerpt: 'Join our expert-led workshop on creating engaging live streaming experiences for virtual events.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop',
      category: 'events',
      date: '2023-12-15',
      author: 'Rohit Verma',
      tags: ['Workshop', 'Live Streaming', 'Events'],
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Sustainable Practices in Media Production',
      excerpt: 'How Gravity Media is leading the way in environmentally conscious media production.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop',
      category: 'updates',
      date: '2023-12-10',
      author: 'Sanjay Mehta',
      tags: ['Sustainability', 'Eco-Friendly', 'Green'],
      readTime: '8 min read'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">News & Articles</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest from Gravity Mega Media and the industry
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative w-full lg:w-auto lg:flex-1 max-w-lg">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
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
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto">
                    <img
                      src={filteredNews[0].image}
                      alt={filteredNews[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full">
                        {filteredNews[0].category.charAt(0).toUpperCase() + filteredNews[0].category.slice(1)}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaCalendar className="mr-2" />
                        {formatDate(filteredNews[0].date)}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {filteredNews[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {filteredNews[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <FaUser className="mr-2" />
                        {filteredNews[0].author}
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
                        Read More
                        <FaArrowRight className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* News Grid */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.slice(1).map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Article Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-semibold rounded-full">
                        {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaCalendar className="mr-1" />
                        {formatDate(article.date)}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                        >
                          <FaTag className="mr-1" size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Article Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaUser className="mr-2" />
                        {article.author}
                        <span className="mx-2">•</span>
                        {article.readTime}
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center">
                        Read
                        <FaArrowRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                No articles found
              </h3>
              <p className="text-gray-500">
                {searchTerm 
                  ? `No articles match "${searchTerm}"`
                  : 'No articles available in this category'}
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

          {/* Newsletter */}
          <div className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-8 opacity-90">
                Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-6 py-3 text-gray-900 rounded-lg outline-none"
                />
                <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;