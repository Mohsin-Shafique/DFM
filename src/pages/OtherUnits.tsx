import { useEffect } from "react";
import SectionHeading from "../components/shared/SectionHeading";
import Button from "../components/shared/Button";
import ghausiaImage from "../assets/Units/Ghausia.png";
import dfplImage from "../assets/Units/Datafoods1.png";
import zulnoorainImage from "../assets/Units/Zulnorain.png";

const OtherUnits = () => {
  useEffect(() => {
    document.title = "Other Units - Data Flour Mills (DFM)";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className='pt-32 pb-16 bg-primary relative overflow-hidden'>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className='absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90'></div>

        <div className='container-custom relative z-10 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Other Units
          </h1>
          <p className='text-xl text-white/90 max-w-3xl mx-auto'>
            Expanding our reach through additional manufacturing facilities and
            production units.
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className='section-padding'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <SectionHeading title='Ghausia Flour Mills (GFM)' />
              <p className='text-gray-700 mb-6'>
                Operational since 2012, GFM currently has 14 roller bodies which
                translates to a production capacity of 300 MT/D. The plant
                itself comprises of Buhler-Miag roller bodies. These machines
                are manufactured by Buhler (Switzerland), which is one of the
                world's leading authority in milling machinery.
              </p>
            </div>

            <div className='relative'>
              <img
                src={ghausiaImage}
                alt='Ghausia Flour Mills'
                className='rounded-lg shadow-lg w-full h-auto object-cover'
              />
            </div>

            <div>
              <SectionHeading title='Data Foods Private Limited (DFPL)' />
              <p className='text-gray-700 mb-6'>
                Data Foods is the venture in the line of many successful
                businesses. With 29 roller bodies, DFPL is the largest single
                unit flour milling plant in Punjab with 580 MT/D production
                capacity, with the option of further increase in the future.
                Data Foods also boasts a state-of-the art in-house quality and
                testing laboratory to ensure highest quality, research and
                development, and establish linkages to academia.
              </p>
            </div>

            <div className='relative'>
              <img
                src={dfplImage}
                alt='Data Foods Private Limited'
                className='rounded-lg shadow-lg w-full h-auto object-cover'
              />
            </div>

            <div>
              <SectionHeading title='Zulnoorain Flour and General Mills' />
              <p className='text-gray-700 mb-6'>
                Located in the bustling industrial zone of Manga Mandi on the
                outskirts of Lahore, Zulnoorain is the latest group project
                under development. Construction began in early 2021, with the
                aim of being established as a fully automated flour mill, under
                a turnkey agreement with Ortas (Turkey). Under the project
                pipeline, future planned expansions include biscuit, bread and
                pasta production lines, ushering a new era in the group’s
                history.
              </p>
            </div>
            <div className='relative'>
              <img
                src={zulnoorainImage}
                alt='Zulnoorain Flour and General Mills'
                className='rounded-lg shadow-lg w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className='section-padding bg-gray-50'>
        <div className='container-custom'>
          <SectionHeading
            title='Production Network'
            subtitle='Our network of facilities enables us to serve a wider market while maintaining consistent quality standards.'
            centered
          />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
            <div className='bg-white p-6 rounded-lg shadow-card border-t-4 border-primary'>
              <h3 className='text-xl font-bold text-primary mb-4'>
                Strategic Locations
              </h3>
              <p className='text-gray-700'>
                Our other units are strategically located to serve different
                regional markets, ensuring timely delivery and reducing
                transportation costs for our customers.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-card border-t-4 border-secondary'>
              <h3 className='text-xl font-bold text-primary mb-4'>
                Consistent Quality
              </h3>
              <p className='text-gray-700'>
                All our facilities adhere to the same rigorous quality control
                standards and certifications, ensuring uniform product quality
                across all production units.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-card border-t-4 border-accent'>
              <h3 className='text-xl font-bold text-primary mb-4'>
                Expanded Capacity
              </h3>
              <p className='text-gray-700'>
                Our additional units increase our overall production capacity,
                allowing us to meet growing demand and serve larger order
                volumes without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary text-white'>
        <div className='container-custom text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Interested in Learning More?
          </h2>
          <p className='text-xl text-white/80 mb-8 max-w-2xl mx-auto'>
            Contact us today to learn more about our facilities, production
            capabilities, or to schedule a visit to any of our plants.
          </p>
          <Button href='/contact' variant='secondary' size='lg'>
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
};

export default OtherUnits;
