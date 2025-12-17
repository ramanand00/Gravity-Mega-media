import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {
  FaVideo,
  FaImages,
  FaNewspaper,
  FaUsers,
  FaChartBar,
  FaSignOutAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaYoutube
} from 'react-icons/fa';
import axios from 'axios';
import EpisodeForm from '../../components/admin/EpisodeForm';

const AdminDashboard = () => {
  const { admin, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [episodes, setEpisodes] = useState([]);
  const [showEpisodeForm, setShowEpisodeForm] = useState(false);
  const [editingEpisode, setEditingEpisode] = useState(null);

  useEffect(() => {
    if (activeTab === 'episodes') {
      fetchEpisodes();
    }
  }, [activeTab]);

  const fetchEpisodes = async () => {
    try {
      const response = await axios.get('/api/episodes');
      setEpisodes(response.data.episodes);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    }
  };

  const handleDeleteEpisode = async (id) => {
    if (window.confirm('Are you sure you want to delete this episode?')) {
      try {
        await axios.delete(`/api/episodes/${id}`);
        setEpisodes(episodes.filter(ep => ep._id !== id));
      } catch (error) {
        console.error('Error deleting episode:', error);
      }
    }
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/admin/login';
  };

  const stats = [
    { label: 'Total Episodes', value: '24', icon: FaVideo, color: 'bg-blue-500' },
    { label: 'Gallery Images', value: '156', icon: FaImages, color: 'bg-green-500' },
    { label: 'News Articles', value: '42', icon: FaNewspaper, color: 'bg-purple-500' },
    { label: 'Team Members', value: '18', icon: FaUsers, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Gravity Media</h2>
              <p className="text-sm text-gray-500">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${activeTab === 'dashboard' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <FaChartBar />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('episodes')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${activeTab === 'episodes' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <FaVideo />
            <span>Episodes</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${activeTab === 'gallery' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <FaImages />
            <span>Gallery</span>
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${activeTab === 'news' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <FaNewspaper />
            <span>News</span>
          </button>

          <button
            onClick={() => setActiveTab('team')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 ${activeTab === 'team' ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            <FaUsers />
            <span>Team</span>
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium">{admin?.name}</p>
              <p className="text-sm text-gray-500">{admin?.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {activeTab === 'dashboard' && (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {admin?.name}!</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                      <p className="text-3xl font-bold mt-2">{stat.value}</p>
                    </div>
                    <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <stat.icon className="text-white text-xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {episodes.slice(0, 5).map(episode => (
                  <div key={episode._id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden">
                        <img 
                          src={episode.thumbnail} 
                          alt={episode.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{episode.title}</h3>
                        <p className="text-sm text-gray-500">{episode.category}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(episode.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'episodes' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Episodes</h1>
                <p className="text-gray-600">Manage YouTube episodes and content</p>
              </div>
              <button
                onClick={() => {
                  setEditingEpisode(null);
                  setShowEpisodeForm(true);
                }}
                className="btn-primary flex items-center space-x-2"
              >
                <FaPlus />
                <span>Add Episode</span>
              </button>
            </div>

            {/* Episodes Table */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Episode
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {episodes.map(episode => (
                    <tr key={episode._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-20">
                            <img 
                              className="h-12 w-20 rounded object-cover"
                              src={episode.thumbnail}
                              alt={episode.title}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {episode.title.length > 50 
                                ? `${episode.title.substring(0, 50)}...`
                                : episode.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              <FaYoutube className="inline mr-1 text-red-600" />
                              {episode.youtubeId}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                          {episode.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {episode.views}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(episode.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        <button
                          onClick={() => {
                            setEditingEpisode(episode);
                            setShowEpisodeForm(true);
                          }}
                          className="text-primary-600 hover:text-primary-900 mr-3"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDeleteEpisode(episode._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Episode Form Modal */}
      {showEpisodeForm && (
        <EpisodeForm
          episode={editingEpisode}
          onClose={() => {
            setShowEpisodeForm(false);
            setEditingEpisode(null);
          }}
          onSuccess={() => {
            setShowEpisodeForm(false);
            setEditingEpisode(null);
            fetchEpisodes();
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboard;