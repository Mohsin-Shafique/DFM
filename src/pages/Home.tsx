import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/shared/Button";
import SectionHeading from "../components/shared/SectionHeading";
import ScrollReveal from "../components/shared/ScrollReveal";
import ImageWithSkeleton from "../components/shared/ImageWithSkeleton";
import img3333 from "../assets/3333.png";
import img4444 from "../assets/4444.png";
import img5555 from "../assets/5555.png";
import stockimage1 from "../assets/stockimage1.jpg";

const Home = () => {
  useEffect(() => {
    document.title = "Data Flour Mills (DFM) - Quality Flour Products";
  }, []);

  // Sample flour products
  const featuredProducts = [
    {
      id: 1,
      name: "Superfine Flour",
      description: "Premium quality superfine flour for all your baking needs",
      image: img3333,
      weight: "10 kg",
    },
    {
      id: 2,
      name: "Special Grade Flour",
      description: "High-grade flour perfect for commercial bakeries",
      image: img4444,
      weight: "25 kg",
    },
    {
      id: 3,
      name: "Premium Select Flour",
      description: "Select grade flour for artisanal bread making",
      image: img5555,
      weight: "50 kg",
    },
  ];

  // Sample quality standards
  const qualityStandards = [
    {
      title: "ISO 22000",
      description:
        "Certified food safety management system ensuring the highest standards",
      icon: "🏅",
    },
    {
      title: "HACCP Compliant",
      description:
        "Hazard Analysis Critical Control Point system implementation",
      icon: "✓",
    },
    {
      title: "FSSAI Registered",
      description:
        "Registered with Food Safety and Standards Authority of India",
      icon: "🍽️",
    },
    {
      title: "Export Quality",
      description:
        "Products meeting international export standards and requirements",
      icon: "🌐",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-primary dark:bg-gray-900 overflow-hidden pt-16'>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
        <div className='absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90 dark:from-gray-900/70 dark:to-gray-900/90'></div>

        <div className='container-custom relative z-10 text-center py-20'>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Premium Quality{" "}
            <span className='text-secondary dark:text-secondary-light'>
              Flour Products
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto'
          >
            Milling excellence since 1985. Trusted by bakers and households
            across the nation.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex flex-col sm:flex-row justify-center gap-4'
          >
            <Button href='/products' variant='secondary' size='lg'>
              Explore Products
            </Button>
            <Button
              href='/contact'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white/10'
            >
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
          >
            <ArrowRight
              size={30}
              className='text-secondary dark:text-secondary-light transform rotate-90'
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className='section-padding bg-gray-50 dark:bg-gray-800 transition-theme'>
        <div className='container-custom'>
          <SectionHeading
            title='Our Premium Products'
            subtitle='Discover our range of high-quality flour products made with the finest wheat grains and modern milling techniques.'
            centered
          />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className='product-card bg-white dark:bg-gray-700 rounded-lg shadow-card overflow-hidden transform transition-all hover:translate-y-[-5px]'
              >
                <div className='overflow-hidden aspect-[4/5] bg-white dark:bg-gray-700 flex items-center justify-center'>
                  <ImageWithSkeleton
                    src={product.image}
                    alt={product.name}
                    className='product-image w-full h-full object-contain p-4 transition-transform hover:scale-105 duration-300'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-primary dark:text-white mb-2'>
                    {product.name}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 mb-3'>
                    {product.description}
                  </p>
                  <div className='flex justify-between items-center'>
                    <span className='bg-secondary/20 dark:bg-secondary/30 text-primary-dark dark:text-secondary-light px-3 py-1 rounded-full text-sm font-medium'>
                      {product.weight}
                    </span>
                    <Button href='/products' variant='outline' size='sm'>
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Button href='/products' variant='primary' size='lg'>
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='section-padding bg-white dark:bg-gray-900 relative overflow-hidden transition-theme'>
        <div className='wheat-pattern absolute inset-0 opacity-[0.07] dark:opacity-[0.03]'></div>
        <div className='container-custom relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <ScrollReveal>
              <div>
                <h2 className='text-3xl md:text-4xl font-bold text-primary dark:text-white heading-underline mb-6'>
                  A Legacy of Excellence
                </h2>
                <p className='text-gray-700 dark:text-gray-300 mb-6 text-lg'>
                  Since our establishment in 1985, Data Flour Mills has been
                  committed to producing the highest quality flour products
                  using a perfect blend of traditional wisdom and modern
                  technology.
                </p>
                <p className='text-gray-700 dark:text-gray-300 mb-8'>
                  Our state-of-the-art milling facility, combined with rigorous
                  quality control measures, ensures that every batch of flour
                  that leaves our premises meets the highest standards of
                  quality, consistency, and nutritional value.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <span className='text-secondary dark:text-secondary-light text-2xl'>
                      ✓
                    </span>
                    <div>
                      <h4 className='font-medium text-primary dark:text-white'>
                        Premium Wheat Selection
                      </h4>
                      <p className='text-gray-600 dark:text-gray-400 text-sm'>
                        Sourced from the finest wheat-growing regions
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <span className='text-secondary dark:text-secondary-light text-2xl'>
                      ✓
                    </span>
                    <div>
                      <h4 className='font-medium text-primary dark:text-white'>
                        Advanced Milling Technology
                      </h4>
                      <p className='text-gray-600 dark:text-gray-400 text-sm'>
                        State-of-the-art equipment for consistent quality
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-3'>
                    <span className='text-secondary dark:text-secondary-light text-2xl'>
                      ✓
                    </span>
                    <div>
                      <h4 className='font-medium text-primary dark:text-white'>
                        Stringent Quality Control
                      </h4>
                      <p className='text-gray-600 dark:text-gray-400 text-sm'>
                        Multiple quality checks throughout the process
                      </p>
                    </div>
                  </div>
                </div>

                <Button href='/about' variant='primary' className='mt-8'>
                  Learn More About Us
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className='relative'>
                <div className='rounded-lg overflow-hidden shadow-xl'>
                  <img
                    src={stockimage1}
                    alt='Modern flour mill facility'
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className='absolute -bottom-6 -left-6 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg hidden md:block'
                >
                  <p className='text-primary dark:text-white font-bold'>
                    40+ Years
                  </p>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    Of Excellence
                  </p>
                </motion.div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className='absolute -top-6 -right-6 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg hidden md:block'
                >
                  <p className='text-primary dark:text-white font-bold'>100%</p>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>
                    Quality Assured
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className='section-padding bg-primary dark:bg-gray-800 text-white transition-theme'>
        <div className='container-custom'>
          <ScrollReveal>
            <SectionHeading
              title='Our Quality Standards'
              subtitle='We adhere to the highest industry standards and certifications to ensure premium quality in every batch.'
              centered
              className='text-white'
            />
          </ScrollReveal>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {qualityStandards.map((standard, index) => (
              <ScrollReveal key={index}>
                <div className='bg-primary-light dark:bg-gray-700 p-6 rounded-lg shadow-md text-center transition-transform hover:translate-y-[-5px]'>
                  <div className='text-4xl mb-4 text-secondary dark:text-secondary-light'>
                    {standard.icon}
                  </div>
                  <h3 className='text-xl font-bold mb-3'>{standard.title}</h3>
                  <p className='text-gray-300 dark:text-gray-400 text-sm'>
                    {standard.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-secondary/10 dark:bg-gray-900/50 transition-theme'>
        <div className='container-custom text-center'>
          <ScrollReveal>
            <h2 className='text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6'>
              Ready to Experience Premium Quality Flour?
            </h2>
            <p className='text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
              Contact us today to learn more about our products, place an order,
              or request a sample.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <Button href='/contact' variant='primary' size='lg'>
                Contact Us
              </Button>
              <Button href='/products' variant='outline' size='lg'>
                Explore Products
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
