'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Experience = () => {
  const group = [
    {
      logo: '/logo/projects.png',
      title: 'Years of Industry Expertise',
      count: 1,
      actualCount: 62,
    },
    {
      logo: '/logo/location.png',
      title: 'Project Locations Covered',
      count: 1,
      actualCount: 250,
    },
    {
      logo: '/logo/delivered.png',
      title: 'Projects Delivered till Date',
      count: 1,
      actualCount: 750,
    },
  ];

  const [animatedCounts, setAnimatedCounts] = useState(
    group.map((item) => item.count)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCounts((prevCounts) => {
        const newCounts = prevCounts.map((count, index) => {
          if (count < group[index].actualCount) {
            return count + 1;
          }
          return count;
        });
        if (
          newCounts.some((count, index) => count < group[index].actualCount)
        ) {
          return newCounts;
        } else {
          clearInterval(interval);
          return group.map((item) => item.actualCount);
        }
      });
    }, 10); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='grid grid-cols-3 justify-center items-center mt-20 mb-20'>
      {group.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center ${
            index < 2 ? 'border-gray border-solid border-r-2' : ''
          }`}
        >
          <Image
            width={40}
            height={40}
            src={item.logo}
            alt={item.title}
            className='w-12 h-12 mb-2'
          />{' '}
          {/* Adjust width and height as needed */}
          <div className='text-center text-4xl text-num-orange mt-2 font-bold'>
            {animatedCounts[index]}
          </div>
          <div className='text-center ml-4 mr-4 mb-5'>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
