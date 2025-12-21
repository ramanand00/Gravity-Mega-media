import SEO from '../components/SEO';
import { FaFileContract, FaShieldAlt, FaUserCheck, FaBalanceScale } from 'react-icons/fa';

const TermsConditions = () => {
  const sections = [
    {
      icon: FaFileContract,
      title: 'Acceptance of Terms',
      content: `By accessing and using Gravity Mega Media's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.`
    },
    {
      icon: FaShieldAlt,
      title: 'Intellectual Property Rights',
      content: `All content on this website, including but not limited to text, graphics, logos, images, videos, software, and the overall design, is the property of Gravity Mega Media Pvt. Ltd. or its content suppliers and is protected by international copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our explicit written permission.`
    },
    {
      icon: FaUserCheck,
      title: 'User Responsibilities',
      content: `As a user of our website, you agree not to:
      1. Use the website for any illegal purposes
      2. Attempt to gain unauthorized access to any part of the website
      3. Interfere with the website's functionality
      4. Upload or transmit any malicious software
      5. Use automated systems to access the website without permission`
    },
    {
      icon: FaBalanceScale,
      title: 'Limitation of Liability',
      content: `Gravity Mega Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the website. Our total liability for any claim arising from your use of the website shall not exceed the amount paid by you, if any, for accessing the website.`
    },
    {
      title: 'Service Modifications',
      content: `We reserve the right to modify, suspend, or discontinue any aspect of our website or services at any time without notice. We may also impose limits on certain features or restrict access to parts of the website without liability.`
    },
    {
      title: 'Third-Party Links',
      content: `Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.`
    },
    {
      title: 'Governing Law',
      content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.`
    },
    {
      title: 'Changes to Terms',
      content: `We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the website after any changes constitutes acceptance of the new terms.`
    },
    {
      title: 'Contact Information',
      content: `If you have any questions about these Terms and Conditions, please contact us at:
      Email: legal@gravitymegamedia.com
      Phone: +91 98765 43210
      Address: 123 Media Street, Digital District, Mumbai, Maharashtra 400001`
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO title="Terms & Conditions - Gravity Mega Media" description="Terms & Conditions for using Gravity Mega Media services." path="/terms-and-conditions" image="/social-image.svg" />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Please read these terms carefully before using our website and services
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-center">
            <strong>Last Updated:</strong> January 15, 2024
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-yellow-700">
                    <strong>Important:</strong> These Terms and Conditions constitute a legal agreement between you and Gravity Mega Media Pvt. Ltd. By using our website, you agree to these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="scroll-mt-20" id={`section-${index + 1}`}>
                  <div className="flex items-start mb-4">
                    {section.icon && (
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <section.icon className="text-primary-600 text-xl" />
                      </div>
                    )}
                    <h2 className="text-2xl font-bold text-gray-900">
                      {index + 1}. {section.title}
                    </h2>
                  </div>
                  <div className={`text-gray-600 leading-relaxed ${section.icon ? 'ml-16' : ''}`}>
                    {section.content.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Agreement Section */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Agreement</h3>
              <p className="text-gray-600 mb-6">
                By using our website and services, you acknowledge that you have read these Terms and Conditions in their entirety and agree to be bound by them.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agree-terms"
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="agree-terms" className="text-gray-700">
                    I have read and agree to the Terms and Conditions of Gravity Mega Media Pvt. Ltd.
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agree-privacy"
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="agree-privacy" className="text-gray-700">
                    I have read and agree to the Privacy Policy
                  </label>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Privacy Policy', path: '/privacy-policy' },
                  { title: 'Cookie Policy', path: '#' },
                  { title: 'Acceptable Use Policy', path: '#' },
                  { title: 'Service Level Agreement', path: '#' }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have any questions or concerns about these Terms and Conditions, please don't hesitate to contact our legal team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg"
          >
            Contact Legal Department
          </a>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;