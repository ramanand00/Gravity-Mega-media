import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { FaTimes, FaYoutube } from 'react-icons/fa';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  youtubeUrl: yup
    .string()
    .required('YouTube URL is required')
    .matches(
      /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/,
      'Please enter a valid YouTube URL'
    ),
  category: yup.string().required('Category is required'),
  isFeatured: yup.boolean()
});

const EpisodeForm = ({ episode, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      youtubeUrl: '',
      category: 'The GRAVITY SHOW',
      isFeatured: false
    }
  });

  useEffect(() => {
    if (episode) {
      setValue('title', episode.title);
      setValue('description', episode.description);
      setValue('youtubeUrl', episode.youtubeUrl);
      setValue('category', episode.category);
      setValue('isFeatured', episode.isFeatured);
    }
  }, [episode, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');

    try {
      if (episode) {
        // Update existing episode
        await axios.put(`/api/episodes/${episode._id}`, data);
      } else {
        // Create new episode
        await axios.post('/api/episodes', data);
      }
      
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {episode ? 'Edit Episode' : 'Add New Episode'}
            </h2>
            <p className="text-gray-600">
              Enter episode details and YouTube URL
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Episode Title *
            </label>
            <input
              {...register('title')}
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              placeholder="Enter episode title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          {/* YouTube URL */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              YouTube URL *
            </label>
            <div className="relative">
              <FaYoutube className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600" />
              <input
                {...register('youtubeUrl')}
                type="text"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </div>
            {errors.youtubeUrl && (
              <p className="mt-1 text-sm text-red-600">{errors.youtubeUrl.message}</p>
            )}
            <p className="mt-2 text-sm text-gray-500">
              Enter full YouTube URL or video ID
            </p>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Category *
            </label>
            <select
              {...register('category')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              <option value="The GRAVITY SHOW">The GRAVITY SHOW</option>
              <option value="AI Segment">AI Segment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Description *
            </label>
            <textarea
              {...register('description')}
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              placeholder="Enter episode description"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center">
            <input
              {...register('isFeatured')}
              type="checkbox"
              id="isFeatured"
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
            />
            <label htmlFor="isFeatured" className="ml-3 text-gray-700">
              Mark as featured episode
            </label>
          </div>

          {/* Form Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center">
                  <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                  {episode ? 'Updating...' : 'Creating...'}
                </span>
              ) : episode ? (
                'Update Episode'
              ) : (
                'Create Episode'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EpisodeForm;