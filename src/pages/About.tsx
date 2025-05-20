import { useEffect } from 'react';
import SectionHeading from '../components/shared/SectionHeading';
import Button from '../components/shared/Button';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Data Flour Mills (DFM)';
  }, []);

  // Team members
  const teamMembers = [
    {
      name: 'Rajat Sharma',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Priya Patel',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Amit Kumar',
      position: 'Quality Control Manager',
      image: 'https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  // Timeline events
  const timeline = [
    {
      year: 1985,
      title: 'Humble Beginnings',
      description: 'Data Flour Mills was established with a single mill and a vision to provide quality flour products.',
    },
    {
      year: 1995,
      title: 'Expansion Phase',
      description: 'Expanded operations with new machinery and increased production capacity to meet growing demand.',
    },
    {
      year: 2005,
      title: 'Modernization',
      description: 'Implemented advanced technology and automated processes to improve efficiency and quality.',
    },
    {
      year: 2015,
      title: 'Export Quality',
      description: 'Achieved international certifications and began exporting products to global markets.',
    },
    {
      year: 'Today',
      title: 'Industry Leader',
      description: 'Recognized as a leading flour manufacturer with a commitment to innovation and excellence.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/39020/wheat-grain-sand-agriculture-39020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Four decades of excellence in flour milling, blending tradition with technology.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Journey" />
              <p className="text-gray-700 mb-6">
                Data Flour Mills was founded in 1985 with a simple mission: to produce the highest quality flour products using locally sourced wheat. What began as a small family-owned mill has grown into one of the region's most trusted names in flour manufacturing.
              </p>
              <p className="text-gray-700 mb-6">
                Over the decades, we have consistently invested in cutting-edge technology while honoring traditional milling wisdom. This blend of innovation and tradition has allowed us to maintain exceptional quality while meeting the evolving needs of our customers.
              </p>
              <p className="text-gray-700">
                Today, Data Flour Mills operates a state-of-the-art facility that produces a wide range of flour products for domestic and international markets, maintaining the same commitment to quality that has defined us from the beginning.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4871189/pexels-photo-4871189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Wheat field" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-lg shadow-lg hidden md:block">
                <div className="text-4xl font-bold text-primary">40+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50 wheat-pattern relative">
        <div className="container-custom relative">
          <SectionHeading 
            title="Our Journey Through Time" 
            subtitle="Explore the key milestones that have shaped Data Flour Mills into the company it is today."
            centered
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12 relative">
              {timeline.map((event, index) => (
                <div key={index} className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 p-4">
                    <div className={`md:${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-secondary font-bold text-2xl mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-0 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-secondary border-4 border-white z-10"></div>
                  </div>
                  
                  <div className="md:w-1/2 p-4 md:opacity-0"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Our Mission & Values" 
            subtitle="Guided by a strong set of principles, we strive to maintain the highest standards in every aspect of our operations."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To produce premium quality flour products through sustainable practices, innovative technology, and unwavering commitment to excellence, enriching the lives of consumers with wholesome products they can trust.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted name in flour manufacturing globally, setting industry standards for quality, innovation, and customer satisfaction while maintaining our commitment to sustainable practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card border-t-4 border-accent">
              <h3 className="text-xl font-bold text-primary mb-4">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Unwavering commitment to quality</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Integrity in all business dealings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Innovation and continuous improvement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Respect for our employees and community</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary font-bold">•</span>
                  <span>Environmental responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Leadership" 
            subtitle="The dedicated team behind Data Flour Mills, driving our mission forward with passion and expertise."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-card overflow-hidden transform transition-transform hover:translate-y-[-5px]">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-3">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Quality Certifications" 
            subtitle="Our commitment to quality is validated by industry-recognized certifications and standards."
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="p-6 border rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏅</div>
              <h3 className="font-bold text-primary">ISO 22000</h3>
              <p className="text-sm text-gray-600 mt-2">Food Safety Management</p>
            </div>
            
            <div className="p-6 border rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-bold text-primary">HACCP</h3>
              <p className="text-sm text-gray-600 mt-2">Hazard Analysis</p>
            </div>
            
            <div className="p-6 border rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-bold text-primary">FSSAI</h3>
              <p className="text-sm text-gray-600 mt-2">Food Safety Standards</p>
            </div>
            
            <div className="p-6 border rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="font-bold text-primary">Export Quality</h3>
              <p className="text-sm text-gray-600 mt-2">International Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Know More About Data Flour Mills?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our products, facility, or to schedule a visit.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;