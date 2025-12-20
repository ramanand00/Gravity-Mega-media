import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Gravity Mega Media</h2>
                <p className="text-gray-400">Creating Digital Experiences</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              We are a premier media company specializing in creating engaging digital content, shows, and innovative media solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61583210591126" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="https://x.com/Gravity_M_Media" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/gravitymegamedia" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gravity-megamedia-83a5633a1" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@GravityMegamedia" className="text-gray-400 hover:text-white">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/episodes" className="text-gray-400 hover:text-white transition-colors">
                  The GRAVITY SHOW
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors">
                  News & Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Video Production</li>
              <li className="text-gray-400">Digital Marketing</li>
              <li className="text-gray-400">Content Creation</li>
              <li className="text-gray-400">Live Streaming</li>
              <li className="text-gray-400">AI Solutions</li>
              <li className="text-gray-400">Media Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1" />
                <span className="text-gray-400">
                  KL Tower 3rd Floor Chabahil,
                  <br />
                   Kathmandu, Nepal
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-400" />
                <span className="text-gray-400">+977 9851407153</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-400" />
                <span className="text-gray-400">gravitymegamedia@gmail.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-bold mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 text-gray-900 rounded-l-lg outline-none"
                />
                <button className="bg-primary-600 px-4 py-2 rounded-r-lg hover:bg-primary-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
  <p>
    &copy; {currentYear} Gravity Mega Media Pvt. Ltd. This Site is Powered By{" "}
    <a
      href="https://www.riseup-tech.com.np/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold underline text-blue-400 hover:text-blue-300"
    >
      Riseup-Tech
    </a>
  </p>

  <div className="mt-4 space-x-6">
    <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
    <Link to="/terms" className="hover:text-white">Terms of Service</Link>
    <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;