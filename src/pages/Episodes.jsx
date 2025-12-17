import { useState, useEffect } from 'react';
import EpisodeCard from '../components/EpisodeCard';
import episodeService from '../services/episodeService';
import axios from 'axios';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEpisodes();
  }, [category]);

  const fetchEpisodes = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Use service instead of direct axios call
      const params = category === 'all' ? {} : { category };
      const response = await episodeService.getAllEpisodes(params);
      
      setEpisodes(response.episodes || []);
    } catch (error) {
      console.error('Error fetching episodes:', error);
      setError('Failed to load episodes. Please try again later.');
      setEpisodes([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredEpisodes = episodes.filter(episode =>
    episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    { id: 'all', name: 'All Episodes' },
    { id: 'The GRAVITY SHOW', name: 'The GRAVITY SHOW' },
    { id: 'AI Segment', name: 'AI Segment' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The GRAVITY SHOW</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Watch our latest episodes and segments from Gravity Mega Media
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search episodes..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex space-x-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  category === cat.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <>
            {/* Episodes Grid */}
            {filteredEpisodes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEpisodes.map((episode) => (
                  <EpisodeCard key={episode._id} episode={episode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  No episodes found
                </h3>
                <p className="text-gray-500">
                  {searchTerm 
                    ? `No episodes match "${searchTerm}"`
                    : 'No episodes available in this category'}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Episodes;