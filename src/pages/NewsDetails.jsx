import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  FaCalendar,
  FaUser,
  FaTag,
  FaArrowLeft,
  FaClock,
  FaShareAlt,
  FaQuoteLeft
} from 'react-icons/fa';
import SEO from '../components/SEO';
import { newsArticles } from '../data/newsData';

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const article = newsArticles.find(a => a.id === parseInt(id));

  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!article) return null;

  const formatDate = d =>
    new Date(d).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

  const related = newsArticles
    .filter(
      n =>
        n.id !== article.id &&
        (n.category === article.category ||
          n.tags.some(t => article.tags.includes(t)))
    )
    .slice(0, 3);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <SEO title={article.title} description={article.excerpt} />

      {/* Reading Progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary-600 z-50 transition-all"
        style={{ width: `${progress}%` }}
      />

      {/* Floating Share */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40">
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-primary-600 hover:text-white transition"
        >
          <FaShareAlt />
        </button>
      </div>

      {/* HERO */}
      <header className="relative h-[80vh]">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-20 text-white">
          <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm tracking-wide mb-4">
            {article.category.toUpperCase()}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200">
            <span className="flex items-center">
              <FaUser className="mr-2" /> {article.author}
            </span>
            <span className="flex items-center">
              <FaCalendar className="mr-2" /> {formatDate(article.date)}
            </span>
            <span className="flex items-center">
              <FaClock className="mr-2" /> {article.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="relative -mt-32">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl px-8 md:px-14 py-14">

          {/* Intro */}
          <p className="text-xl text-gray-700 leading-relaxed mb-10 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3">
            {article.excerpt}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-12" />

          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Pull Quote */}
          <blockquote className="my-16 bg-primary-50 border-l-4 border-primary-600 px-8 py-6 rounded-xl">
            <FaQuoteLeft className="text-primary-600 text-2xl mb-3" />
            <p className="text-xl font-semibold text-gray-900">
              Innovation is no longer optional — it’s the foundation of modern
              media excellence.
            </p>
          </blockquote>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-12">
            {article.tags.map((tag, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-primary-600 hover:text-white transition"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="mt-16 flex items-center gap-6 bg-gray-50 p-8 rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold">
              {article.author.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-bold">{article.author}</h4>
              <p className="text-gray-600 text-sm">
                Senior Editor at Gravity Mega Media
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-12 text-center">
            More Stories You’ll Love
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {related.map(r => (
              <div
                key={r.id}
                onClick={() => navigate(`/news/${r.id}`)}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold group-hover:text-primary-600 transition">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {formatDate(r.date)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BACK */}
      <div className="text-center pb-20">
        <button
          onClick={() => navigate('/news')}
          className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
        >
          <FaArrowLeft /> Back to News
        </button>
      </div>
    </div>
  );
};

export default NewsDetails;
