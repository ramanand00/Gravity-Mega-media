import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import dipak from '../assets/team/dipak.jpg';
import ramanand from '../assets/team/ramanand.jpg';
import bipana from '../assets/team/bipana.jpeg';
import laxmi from '../assets/team/laxmi.jpeg';
import pramila from '../assets/team/pramila.png';
import sirish from '../assets/team/sirish.jpg';
import SEO from '../components/SEO';

const Team = () => {
  const departments = [
  {
    name: 'Leadership',
    members: [
      {
        name: 'Dipak Chalagain',
        role: 'CEO & Founder',
        image: dipak,
        bio: 'Visionary leader with 15+ years in media industry',
        social: { linkedin: '#', twitter: '#', instagram: '#' }
      }      
    ]
  },
  {
    name: 'Production',
    members: [
      {
        name: 'Ramanand Mandal',
        role: 'IT-Engineer | CTO',
        image: ramanand,
        bio: 'Expert in video production and post-processing',
        social: { linkedin: '#', twitter: '#', instagram: '#' }
      },
      {
        name: 'Bipana Panta',
        role: 'Accounting Manager',
        image: bipana,
        bio: 'Specialist in motion graphics and visual effects',
        social: { linkedin: '#', twitter: '#', instagram: '#' }
      },
      {
        name: 'Laxmi Tamang',
        role: 'Cinematographer',
        image: laxmi,
        bio: 'Expert in cinematic photography and lighting',
        social: { linkedin: '#', twitter: '#', instagram: '#' }
      }
    ]
  },
  {
    name: 'Technical',
    members: [
      {
        name: 'Pramila Raut',
        role: 'Host',
        image: pramila,
        bio: 'Tech innovator with expertise in AI and media tech',
        social: { linkedin: '#', twitter: '#', instagram: '#' }
      },
      {
        name: 'Sirish Shrestha',
        role: 'AI Specialist',
        image: sirish,
        bio: 'Leading our AI and machine learning initiatives',
        social: { linkedin: '#', twitter: '#', instagram: '#' }
      }
    ]
  }
];


  return (
    <div className="min-h-screen">
      <SEO title="Team - Gravity Mega Media" description="Meet the team behind Gravity Mega Media." path="/team" image="/social-image.svg" />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The talented individuals behind Gravity Mega Media's success
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-gray-600 text-lg">
              We're a diverse team of creative professionals, technologists, and storytellers 
              united by our passion for innovation and excellence. Our collaborative environment 
              fosters creativity and drives exceptional results.
            </p>
          </div>

          {/* Departments */}
          {departments.map((department, deptIndex) => (
            <div key={deptIndex} className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {department.name} Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {department.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                    {/* Member Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Member Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 mb-6">
                        {member.bio}
                      </p>

                      {/* Social Links */}
                      <div className="flex space-x-4">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            <FaLinkedin size={20} />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            <FaTwitter size={20} />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            className="text-gray-400 hover:text-pink-600 transition-colors"
                          >
                            <FaInstagram size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Values */}
          <div className="bg-gray-50 rounded-2xl p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Team Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Collaboration',
                  description: 'We believe in working together to achieve extraordinary results'
                },
                {
                  title: 'Innovation',
                  description: 'Constantly pushing boundaries and exploring new technologies'
                },
                {
                  title: 'Excellence',
                  description: 'Committed to delivering the highest quality in everything we do'
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-600 text-2xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;