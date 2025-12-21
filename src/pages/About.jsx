import { FaBullseye, FaEye, FaHandsHelping, FaAward } from 'react-icons/fa';

// Team Images
import DipakImg from '../assets/team/dipak.jpg';
import RamanandImg from '../assets/team/ramanand.jpg';
import BipanaImg from '../assets/team/bipana.jpeg';

const About = () => {
  const values = [
    {
      icon: FaBullseye,
      title: 'Innovation',
      description: 'Constantly pushing boundaries in media technology',
    },
    {
      icon: FaEye,
      title: 'Excellence',
      description: 'Delivering top-quality content and solutions',
    },
    {
      icon: FaHandsHelping,
      title: 'Collaboration',
      description: 'Working together to achieve remarkable results',
    },
    {
      icon: FaAward,
      title: 'Integrity',
      description: 'Transparent and ethical business practices',
    },
  ];

  const teamMembers = [
    {
      name: 'Dipak Chalagain',
      role: 'CEO & Founder',
      image: DipakImg,
    },
    {
      name: 'Ramanand Mandal',
      role: 'Technical Head',
      image: RamanandImg,
    },
    {
      name: 'Bipana Panta',
      role: 'Creative Director',
      image: BipanaImg,
    },
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Gravity Mega Media</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pioneering digital media experiences since 2025. We transform ideas
            into impactful visual stories.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-white text-lg">
                <p>
                  Founded in 2025, Gravity Mega Media started as a small creative
                  studio with a big vision: to revolutionize how brands connect
                  with their audiences through digital media.
                </p>
                <p>
                  Today, we're a leading media production company with a team of
                  passionate creators, technologists, and storytellers.
                </p>
                <p>
                  Our journey has been marked by innovation, creativity, and a
                  relentless pursuit of excellence.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Years Experience', value: '1+' },
                  { label: 'Projects Completed', value: '500+' },
                  { label: 'Team Members', value: '50+' },
                  { label: 'Happy Clients', value: '100+' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl text-center"
                  >
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {item.value}
                    </div>
                    <div className="text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              The visionary minds driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary-600">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/team" className="btn-primary">
              View Full Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
