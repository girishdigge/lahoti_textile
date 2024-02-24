'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    url: '/flag/germany.png',
    alt: 'Logo',
    country: 'Germany',
  },
  {
    url: '/flag/france.png',
    alt: 'Logo',
    country: 'France',
  },
  {
    url: '/flag/italy.png',
    alt: 'Logo',
    country: 'Italy',
  },
  {
    url: '/flag/israel.png',
    alt: 'Logo',
    country: 'Israel',
  },
  {
    url: '/flag/sl.png',
    alt: 'Logo',
    country: 'Sri Lanka',
  },

  {
    url: '/flag/canada.png',
    alt: 'Logo',
    country: 'Canada',
  },

  {
    url: '/flag/uae.png',
    alt: 'Logo',
    country: 'UAE',
  },
  {
    url: '/flag/usa.png',
    alt: 'Logo',
    country: 'USA',
  },
];

const Country = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className='mt-20 ml-14'>
        <h1 className='text-7xl text-num-watermark font-medium'>
          EXPORT MARKET
        </h1>

        <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
          EXPORT MARKET
        </h2>

        <h3 className='-translate-y-10 text-xl text-num-indigo  ml-1'>
          {'Countries Covered'}
        </h3>
      </div>

      <div className='grid grid-cols-3 gap-8 '>
        <AnimatePresence custom={currentImageIndex}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 1,
                scale: index === currentImageIndex ? 1.3 : 1,
                transition: { duration: 0.5 },
              }}
              className='flex flex-col items-center justify-center '
              exit={{ opacity: 0 }}
              custom={index}
              transition={{
                opacity: { duration: 0.5 },
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={200}
                height={200}
                className='object-fit  items-center justify-center h-24 flex mx-auto'
              />
              <h1 className='text-2xl font-bold'>{image.country}</h1>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Country;
