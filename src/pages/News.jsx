import { useState } from 'react';
import { FaCalendar, FaUser, FaTag, FaArrowRight, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { newsArticles, categories } from '../data/newsData';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  // Get featured article (first featured one, or first in list)
  const featuredArticle = filteredNews.find(article => article.featured) || 
                         (filteredNews.length > 0 ? filteredNews[0] : null);

  return (
    <div className="min-h-screen">
      <SEO 
        title="News & Articles - Gravity Mega Media" 
        description="Latest news, articles, and updates from Gravity Mega Media." 
      />
      
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

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <Link to={`/news/${featuredArticle.id}`}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-64 lg:h-auto">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full">
                          {featuredArticle.category.charAt(0).toUpperCase() + featuredArticle.category.slice(1)}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FaCalendar className="mr-2" />
                          {formatDate(featuredArticle.date)}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {featuredArticle.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500">
                          <FaUser className="mr-2" />
                          {featuredArticle.author}
                        </div>
                        <div className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
                          Read More
                          <FaArrowRight className="ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* News Grid */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews
                .filter(article => !article.featured)
                .map((article) => (
                <Link key={article.id} to={`/news/${article.id}`}>
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                    {/* Article Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="p-6 flex-grow flex flex-col">
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

                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                          >
                            <FaTag className="mr-1" size={10} />
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="text-xs text-gray-400">+{article.tags.length - 3} more</span>
                        )}
                      </div>

                      {/* Article Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                        <div className="flex items-center text-gray-500 text-sm">
                          <FaUser className="mr-2" />
                          {article.author}
                          <span className="mx-2">•</span>
                          {article.readTime}
                        </div>
                        <div className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center">
                          Read
                          <FaArrowRight className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
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