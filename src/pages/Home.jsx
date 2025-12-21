import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight, FaYoutube, FaUsers, FaTrophy, FaLightbulb } from 'react-icons/fa';
import YouTubeChannelEmbed from '../components/YouTubeChannelEmbed';

const Home = () => {
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
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold mb-6">
            Creating <span className="text-primary-400">Digital</span> Experiences
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Gravity Mega Media – Innovative content & digital transformation.
          </p>
          <Link
            to="/episodes"
            className="bg-primary-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center"
          >
            <FaPlay className="mr-2" />
            Watch Our Shows
          </Link>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            The GRAVITY SHOW – All Episodes
          </h2>

          {/* Playlist Embed */}
          <YouTubeChannelEmbed />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div
                  className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
