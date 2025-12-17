import { FaBullseye, FaEye, FaHandsHelping, FaAward } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaBullseye,
      title: 'Innovation',
      description: 'Constantly pushing boundaries in media technology'
    },
    {
      icon: FaEye,
      title: 'Excellence',
      description: 'Delivering top-quality content and solutions'
    },
    {
      icon: FaHandsHelping,
      title: 'Collaboration',
      description: 'Working together to achieve remarkable results'
    },
    {
      icon: FaAward,
      title: 'Integrity',
      description: 'Transparent and ethical business practices'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Gravity Mega Media</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pioneering digital media experiences since 2025. We transform ideas into impactful visual stories.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2025, Gravity Mega Media started as a small creative studio with a big vision: 
                  to revolutionize how brands connect with their audiences through digital media.
                </p>
                <p>
                  Today, we're a leading media production company with a team of passionate creators, 
                  technologists, and storytellers dedicated to delivering exceptional results.
                </p>
                <p>
                  Our journey has been marked by innovation, creativity, and a relentless pursuit of 
                  excellence in every project we undertake.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">1+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The visionary minds driving our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Dipak Chalagain', role: 'CEO & Founder', image: 'https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/539504765_2656731621353313_2417110267644553064_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUnT08nAjKfmBmzo8QkzbyJ8WukFjBTZgnxa6QWMFNmOWLhRPIrd87Agz18RtIQzToiPvgfpl9jJN9HB4YTo5J&_nc_ohc=c_F7008-BZYQ7kNvwFSKOox&_nc_oc=AdlYWVRdWRZE-W2JXtmop4ei2obYZxXa6jFobg6q0VW3ElB9_4AiNrBtyEaXuRqm35_vMl_nyJC71AGLoyxPRBYc&_nc_zt=23&_nc_ht=scontent.fktm7-1.fna&_nc_gid=QLuD0FF9aX0RafEH5BSAow&oh=00_AflZrhC2V-ydMsaFZPVFZ6Y_oyKsUdbyQ9YrtU29Akacxw&oe=6941AA29' },
              { name: 'Bipana Panta', role: 'Creative Director', image: 'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/589499329_891718340191187_3738118361696416875_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_VNvHslT0klzOXmfg5plf3pdbvFM4JQzel1u8UzglDDawPn_L7w7JDGN5NKupZxAHWV_0pnuCO_-ED2fD_pWM&_nc_ohc=wapr9kM0idQQ7kNvwGcIoWC&_nc_oc=AdnSdm_zWP2UBgRsXHufjdxJKPZ-hJeqnNwtBsc-29lA0gPS6dHKriXkuLBvNnLfyyf5DHychv19MAm6iwTK_ND7&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=Z-2FAA4m_x6wpmHlemznPQ&oh=00_Afnbq8Uq3-eZ2MJ5E9Zk7G-ix6CFBfaWf3hDgEdaXQetHg&oe=69418D30' },
              { name: 'Ramanand Mandal', role: 'Technical Head', image: 'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/494986861_1084490510183795_8906628561947256664_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGss0R7tKV-aY8zMfJWqecM3dlZoAxmv07d2VmgDGa_ThjVP1K3bOHZjw0qiuUb1Si1EJFcg8PyLmfeY8YJmQW_&_nc_ohc=_Kkz1EGD7vcQ7kNvwG_Ld-c&_nc_oc=AdkY2DMXMGlfC5rJ1qiCtlrMqw_khnQc0qSqWodIN7fwKmmsoXhKMR1LJ_9QrPP1AvzdY7qxMtu5Qiek-ZFufc_C&_nc_zt=23&_nc_ht=scontent.fktm10-1.fna&_nc_gid=xohx9hktO7EdliORK9SXnA&oh=00_Aflbvy2E_fM9bvN_SqT3-yNp7oE5985QcuZpIySuHhU6Lw&oe=69419FFD' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
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