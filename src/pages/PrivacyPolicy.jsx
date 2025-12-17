import { FaShieldAlt, FaUserLock, FaDatabase, FaCookie, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FaShieldAlt,
      title: 'Introduction',
      content: `Welcome to Gravity Mega Media's Privacy Policy. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.`
    },
    {
      icon: FaUserLock,
      title: 'Information We Collect',
      content: `We collect information that you provide directly to us, including:
      • Personal Information: Name, email address, phone number
      • Contact Information: When you fill out forms on our website
      • Technical Information: IP address, browser type, device information
      • Usage Data: Pages visited, time spent, click patterns
      • Cookies and Tracking: Information stored through cookies and similar technologies`
    },
    {
      icon: FaDatabase,
      title: 'How We Use Your Information',
      content: `We use the information we collect for various purposes:
      • To provide, operate, and maintain our website
      • To improve, personalize, and expand our website
      • To understand and analyze how you use our website
      • To develop new products, services, features, and functionality
      • To communicate with you for customer service, updates, and marketing
      • To prevent fraud and enhance security`
    },
    {
      icon: FaCookie,
      title: 'Cookies and Tracking Technologies',
      content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.`
    },
    {
      title: 'Data Sharing and Disclosure',
      content: `We may share your information in the following situations:
      • With Service Providers: To monitor and analyze website usage
      • For Business Transfers: In connection with mergers or acquisitions
      • With Affiliates: Our parent company and subsidiaries
      • With Business Partners: To offer you certain products or services
      • With Your Consent: For any other purpose with your consent`
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational security measures to protect your personal information. However, please remember that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`
    },
    {
      title: 'Your Data Protection Rights',
      content: `Depending on your location, you may have the following rights:
      • The right to access – You have the right to request copies of your personal data
      • The right to rectification – You have the right to request correction of inaccurate information
      • The right to erasure – You have the right to request deletion of your personal data
      • The right to restrict processing – You have the right to request restriction of processing
      • The right to object to processing – You have the right to object to our processing
      • The right to data portability – You have the right to request transfer of your data`
    },
    {
      title: 'Children\'s Privacy',
      content: `Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.`
    },
    {
      title: 'Changes to This Privacy Policy',
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.`
    },
    {
      icon: FaEnvelope,
      title: 'Contact Us',
      content: `If you have any questions about this Privacy Policy, please contact us:
      • Email: privacy@gravitymegamedia.com
      • Phone: +91 98765 43210
      • Address: 123 Media Street, Digital District, Mumbai, Maharashtra 400001
      
      Data Protection Officer: Mr. Ramanand Mandal
      DPO Email: mrazzanandmand@gmail.com`
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we handle your information.
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

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Summary Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Data Controller', value: 'Gravity Mega Media Pvt. Ltd.' },
                  { label: 'Data Protection Officer', value: 'Mr. Ramanand Mandal' },
                  { label: 'Purpose of Processing', value: 'Website Operation & Services' },
                  { label: 'Data Retention', value: 'As long as necessary for purposes' }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policy Sections */}
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

            {/* Cookie Preferences */}
            <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cookie Preferences</h3>
              <p className="text-gray-600 mb-6">
                You can manage your cookie preferences here. Please note that disabling certain cookies may affect your experience on our website.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Essential Cookies', description: 'Required for basic website functionality', defaultChecked: true, disabled: true },
                  { label: 'Performance Cookies', description: 'Help us understand how visitors interact', defaultChecked: true },
                  { label: 'Functional Cookies', description: 'Enable enhanced features and personalization', defaultChecked: true },
                  { label: 'Targeting Cookies', description: 'Used for advertising and marketing purposes', defaultChecked: false }
                ].map((cookie, index) => (
                  <div key={index} className="flex items-start justify-between p-4 bg-white rounded-lg border">
                    <div>
                      <div className="font-semibold text-gray-900">{cookie.label}</div>
                      <div className="text-sm text-gray-600">{cookie.description}</div>
                    </div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={cookie.defaultChecked}
                        disabled={cookie.disabled}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700">
                  Save Preferences
                </button>
              </div>
            </div>

            {/* Data Rights Request */}
            <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Exercise Your Rights</h3>
              <p className="text-gray-600 mb-6">
                To exercise your data protection rights, please use the form below or contact our Data Protection Officer directly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Data Access Request', desc: 'Request a copy of your personal data' },
                  { title: 'Data Correction', desc: 'Request correction of inaccurate data' },
                  { title: 'Data Deletion', desc: 'Request deletion of your personal data' },
                  { title: 'Processing Restriction', desc: 'Request restriction of processing' }
                ].map((right, index) => (
                  <button
                    key={index}
                    className="p-4 bg-white rounded-lg border text-left hover:border-primary-500 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">{right.title}</div>
                    <div className="text-sm text-gray-600">{right.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Related Documents */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Terms & Conditions', path: '/terms-conditions' },
                  { title: 'Cookie Policy', path: '#' },
                  { title: 'Data Processing Agreement', path: '#' }
                ].map((doc, index) => (
                  <a
                    key={index}
                    href={doc.path}
                    className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-primary-600 transition-colors text-center"
                  >
                    {doc.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Compliance Standards</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {['GDPR', 'ISO 27001', 'Data Protection', 'Privacy Shield'].map((standard, index) => (
                <div key={index} className="bg-white px-8 py-4 rounded-xl shadow">
                  <div className="text-lg font-semibold text-gray-900">{standard}</div>
                  <div className="text-sm text-gray-500">Compliant</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;