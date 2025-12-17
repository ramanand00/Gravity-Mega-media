import { FaVideo, FaBullhorn, FaPaintBrush, FaStream, FaRobot, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaVideo,
      title: 'Video Production',
      description: 'Full-cycle video production from concept to delivery',
      features: ['Corporate Videos', 'Documentaries', 'Commercials', 'Event Coverage']
    },
    {
      icon: FaBullhorn,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies',
      features: ['Social Media Marketing', 'SEO Optimization', 'PPC Campaigns', 'Content Strategy']
    },
    {
      icon: FaPaintBrush,
      title: 'Brand Development',
      description: 'Building memorable brand identities',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      icon: FaStream,
      title: 'Live Streaming',
      description: 'Professional live streaming solutions',
      features: ['Event Streaming', 'Webinars', 'Product Launches', 'Interactive Shows']
    },
    {
      icon: FaRobot,
      title: 'AI Talk Solutions',
      description: 'AI-powered media and analytics',
      features: ['Content Generation', 'Analytics', 'Automation', 'Predictive Insights']
    },
    {
      icon: FaChartLine,
      title: 'Media Consulting',
      description: 'Strategic media consulting services',
      features: ['Market Analysis', 'Strategy Development', 'Performance Tracking', 'Optimization']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive media solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and objectives' },
              { step: '02', title: 'Strategy', desc: 'Developing customized solutions and plans' },
              { step: '03', title: 'Execution', desc: 'Implementing with precision and creativity' },
              { step: '04', title: 'Delivery', desc: 'Presenting final results and ongoing support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life
          </p>
          <a href="/contact" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;