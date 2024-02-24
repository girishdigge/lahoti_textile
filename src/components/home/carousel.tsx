'use client';
// pages/index.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const slides = [
  {
    heading: "Empowering Tomorrow's Textile",
    title: 'We are Manufacturer & Exporter of ',
    titleMain: 'TERRY TOWEL',
    content:
      "We are India's foremost techno-commercial audit firm with close to two decades of expertise.",
    link: '/techno-commercial-project',
    image: '/carousel/1.jpg', // replace with the actual image path
  },
  {
    heading: "Empowering Tomorrow's Textile",
    title: 'We are Manufacturer & Exporter of ',
    titleMain: 'TERRY TOWEL',
    content:
      'Quantity surveying plays a vital role in ensuring accurate cost estimation and effective resource allocation.',
    link: '/quantity-survey',
    image: '/carousel/3.jpg', // replace with the actual image path
  },
  {
    heading: "Empowering Tomorrow's Textile",
    title: 'We are Manufacturer & Exporter of ',
    titleMain: 'TERRY TOWEL',
    content:
      'Our comprehensive services in Contract Administration and Bill Checking ensure transparency, compliance, and cost optimization.',
    link: '/contract-administration',
    image: '/carousel/4.jpg', // replace with the actual image path
  },
  {
    heading: "Empowering Tomorrow's Textile",
    title: 'We are Manufacturer & Exporter of ',
    titleMain: 'TERRY TOWEL',
    content:
      'We provide cost management services on a wide range of construction projects across sectors in Textile.',
    link: '/cost-consultants',
    image: '/carousel/4.png', // replace with the actual image path
  },
  {
    heading: "Empowering Tomorrow's Textile",
    title: 'We are Manufacturer & Exporter of ',
    titleMain: 'TERRY TOWEL',
    content:
      'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
    link: '/numbertree',
    image: '/carousel/1.png', // replace with the actual image path
  },
];

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='text-white z-1 relative bg-white'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='relative md:h-96 h-40'>
            <Image
              width={1920}
              height={600}
              src={slide.image}
              alt={slide.title}
              className='w-full md:h-auto h-40'
            />
            <div className='absolute inset-0 md:flex items-center ml-2 mt-5'>
              <div className='bg-black bg-opacity-30 w-2/5 h-4/5 rounded-3xl p-5'>
                <div className='text-white'>
                  <div className='hidden md:flex md:text-xl md:mb-4'>
                    {slide.heading}
                  </div>
                  <h2 className='md:text-3xl text-sm font-bold md:mb-4 mb-2'>
                    {slide.title}
                  </h2>
                  <h2 className='md:text-6xl mb-5 text-sm font-bold'>
                    {slide.titleMain}
                  </h2>

                  {/* <p className='md:text-base md:pt-5 md:pb-2 text-xs w-96'>
                    {slide.content}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
