import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { FaPlay, FaArrowRight, FaYoutube, FaUsers, FaTrophy, FaLightbulb } from 'react-icons/fa';

const Home = () => {
  const [featuredEpisodes, setFeaturedEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedEpisodes();
  }, []);

  const fetchFeaturedEpisodes = async () => {
    try {
      const response = await axios.get('/api/episodes?featured=true&limit=3');
      setFeaturedEpisodes(response.data.episodes || []);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    } finally {
      setLoading(false);
    }
  };

  const services = [
    {
      icon: FaYoutube,
      title: 'Video Production',
      description: 'High-quality video content creation for digital platforms',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: FaUsers,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FaTrophy,
      title: 'Brand Development',
      description: 'Building strong brand identities and narratives',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FaLightbulb,
      title: 'AI Solutions',
      description: 'Innovative AI-powered media solutions',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Creating <span className="text-primary-400">Digital</span> Experiences That Matter
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Gravity Mega Media is your premier partner for innovative media solutions, 
              cutting-edge content creation, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/episodes"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center"
              >
                <FaPlay className="mr-2" />
                Watch Our Shows
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center"
              >
                Contact Us
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Shows */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Episodes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our latest and most popular episodes from The GRAVITY SHOW
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEpisodes.map((episode) => (
                <div key={episode._id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="relative">
                    <img
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {episode.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {episode.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {episode.description}
                    </p>
                    <div className="aspect-video mb-4">
                      <YouTubeEmbed videoId={episode.youtubeId} />
                    </div>
                    <Link
                      to={`/episodes`}
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                    >
                      Watch Full Episode
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && featuredEpisodes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No featured episodes available yet.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/episodes"
              className="inline-flex items-center text-lg font-semibold text-primary-600 hover:text-primary-700"
            >
              View All Episodes
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive media solutions to elevate your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Media Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;