import axios from '../utils/axiosConfig';

const episodeService = {
  // Get all episodes
  getAllEpisodes: async (params = {}) => {
    try {
      const response = await axios.get('/episodes', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching episodes:', error);
      throw error;
    }
  },

  // Get single episode
  getEpisode: async (id) => {
    try {
      const response = await axios.get(`/episodes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching episode:', error);
      throw error;
    }
  },

  // Create episode
  createEpisode: async (episodeData) => {
    try {
      const response = await axios.post('/episodes', episodeData);
      return response.data;
    } catch (error) {
      console.error('Error creating episode:', error);
      throw error;
    }
  },

  // Update episode
  updateEpisode: async (id, episodeData) => {
    try {
      const response = await axios.put(`/episodes/${id}`, episodeData);
      return response.data;
    } catch (error) {
      console.error('Error updating episode:', error);
      throw error;
    }
  },

  // Delete episode
  deleteEpisode: async (id) => {
    try {
      const response = await axios.delete(`/episodes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting episode:', error);
      throw error;
    }
  }
};

export default episodeService;