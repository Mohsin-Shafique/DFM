import { useEffect, useState } from "react";
import SectionHeading from "../components/shared/SectionHeading";
import Button from "../components/shared/Button";
import ImageWithSkeleton from "../components/shared/ImageWithSkeleton";
import VideoPlayer from "../components/shared/VideoPlayer";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";

const ManufacturingProcess = () => {
  useEffect(() => {
    document.title = "Manufacturing Process - Data Flour Mills (DFM)";
  }, []);

  // Process steps
  const processSteps = [
    {
      title: "Wheat Selection",
      description:
        "We carefully select the finest wheat grains from trusted farmers to ensure premium quality flour.",
      image:
        "https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      video: video1,
    },
    {
      title: "Cleaning & Sorting",
      description:
        "The wheat undergoes a rigorous cleaning process to remove impurities and ensure only the best grains proceed to milling.",
      image:
        "https://images.pexels.com/photos/4439464/pexels-photo-4439464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      video: video2,
    },
    {
      title: "Conditioning",
      description:
        "Wheat is tempered to optimize moisture content, making it easier to separate the bran from the endosperm during milling.",
      image:
        "https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      video: video3,
    },
    {
      title: "Milling Process",
      description:
        "Using state-of-the-art milling technology, wheat is ground into flour with precise control over texture and quality.",
      image:
        "https://images.pexels.com/photos/5765/flour-wheat.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      video: video4,
    },
    {
      title: "Quality Testing",
      description:
        "Each batch undergoes rigorous testing to ensure it meets our high standards for color, texture, and baking properties.",
      image:
        "https://images.pexels.com/photos/4916545/pexels-photo-4916545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      video: video5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className='pt-32 pb-16 bg-primary relative overflow-hidden'>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5765/flour-wheat.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className='absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90'></div>

        <div className='container-custom relative z-10 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Our Manufacturing Process
          </h1>
          <p className='text-xl text-white/90 max-w-3xl mx-auto'>
            Discover how we transform premium wheat into the highest quality
            flour products.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className='section-padding'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <SectionHeading title='From Farm to Table' />
              <p className='text-gray-700 mb-6'>
                At Data Flour Mills, we combine traditional milling wisdom with
                cutting-edge technology to produce flour of exceptional quality.
                Our comprehensive process ensures that every bag of flour that
                leaves our facility meets the highest standards.
              </p>
              <p className='text-gray-700 mb-6'>
                We take pride in our transparent manufacturing process, which
                begins with the careful selection of wheat grains and ends with
                rigorous quality testing before packaging. This attention to
                detail at every step is what sets our flour apart.
              </p>
              <p className='text-gray-700'>
                Explore each phase of our manufacturing process below to learn
                how we maintain consistent quality and excellence in every batch
                of flour we produce.
              </p>
            </div>

            <div className='relative w-full'>
              <ImageWithSkeleton
                src='https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='Modern flour mill facility'
                className='rounded-lg shadow-lg w-full'
              />
              <div className='absolute -bottom-6 -left-6 p-6 bg-white rounded-lg shadow-lg hidden md:block'>
                <div className='text-4xl font-bold text-primary'>100%</div>
                <div className='text-gray-600'>Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Steps */}
      <section className='section-padding bg-gray-50 wheat-pattern relative'>
        <div className='container-custom relative'>
          <SectionHeading
            title='Our Manufacturing Process'
            subtitle='Each step in our process is carefully designed to ensure the highest quality flour products.'
            centered
          />

          <div className='space-y-16 mt-12'>
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                  <div className='rounded-lg shadow-lg overflow-hidden'>
                    <VideoPlayer
                      src={step.video}
                      poster={step.image}
                      className='h-64 md:h-80 object-cover'
                    />
                  </div>
                </div>

                <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                  <div className='bg-white p-6 rounded-lg shadow-sm h-full'>
                    <span className='inline-block bg-secondary text-primary-dark text-sm font-bold px-3 py-1 rounded-full mb-4'>
                      Step {index + 1}
                    </span>
                    <h3 className='text-2xl font-bold text-primary mb-4'>
                      {step.title}
                    </h3>
                    <p className='text-gray-700'>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className='section-padding bg-white'>
        <div className='container-custom'>
          <SectionHeading
            title='Our Advanced Technology'
            subtitle='We invest in cutting-edge milling technology to ensure consistent quality and efficiency.'
            centered
          />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
            <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
              <h3 className='text-xl font-bold text-primary mb-4'>
                Automated Systems
              </h3>
              <p className='text-gray-700 mb-4'>
                Our facility features advanced automation that ensures precise
                control over every aspect of the milling process, from grain
                cleaning to flour packaging.
              </p>
              <ul className='text-gray-600 space-y-2'>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Computer-controlled milling</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Real-time quality monitoring</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Automated packaging systems</span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
              <h3 className='text-xl font-bold text-primary mb-4'>
                Quality Control Lab
              </h3>
              <p className='text-gray-700 mb-4'>
                Our in-house laboratory is equipped with advanced testing
                equipment to analyze and ensure every batch meets our strict
                quality standards.
              </p>
              <ul className='text-gray-600 space-y-2'>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Particle size analysis</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Protein content testing</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Moisture level monitoring</span>
                </li>
              </ul>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
              <h3 className='text-xl font-bold text-primary mb-4'>
                Sustainable Practices
              </h3>
              <p className='text-gray-700 mb-4'>
                We've implemented eco-friendly technologies and practices to
                minimize our environmental footprint while maintaining product
                excellence.
              </p>
              <ul className='text-gray-600 space-y-2'>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Energy-efficient equipment</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Water recycling systems</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <span className='text-secondary font-bold'>•</span>
                  <span>Waste reduction initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary text-white'>
        <div className='container-custom text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Experience Our Quality Difference
          </h2>
          <p className='text-xl text-white/80 mb-8 max-w-2xl mx-auto'>
            Interested in learning more about our manufacturing process or
            visiting our facility?
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Button href='/contact' variant='secondary' size='lg'>
              Contact Us
            </Button>
            <Button
              href='/products'
              variant='outline'
              size='lg'
              className='border-white text-white hover:bg-white/10'
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManufacturingProcess;
