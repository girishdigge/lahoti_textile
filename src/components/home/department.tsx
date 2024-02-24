'use client';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Department = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: 'WARPING',
      imageUrl: '/department/warping3.jpg',
      content: {
        heading: 'WARPING',
        paragraph: 'Fully Autaomatic High Speed Sectional Warping Machine',
        link: '#',
      },
    },
    {
      id: 1,
      name: 'WEAVING',
      imageUrl: '/department/weaving3.jpg',
      content: {
        heading: 'WEAVING',
        paragraph: [
          '🔹Fully Electronics Shuttleless Terry.',
          '🔹Rapier Weaving Looms with 2688 High Speed Jacquard Attachment',
          '🔹Capacity Utilization:100%',
        ],

        link: '#',
      },
    },
    {
      id: 2,
      name: 'DYEING',
      imageUrl: '/department/dyeing3.jpg',
      content: {
        heading: 'DYEING',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 3,
      name: 'LOOM',
      imageUrl: '/department/loom3.jpg',
      content: {
        heading: 'LOOM',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 4,
      name: 'STICHING',
      imageUrl: '/department/stiching3.jpg',
      content: {
        heading: 'STICHING',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 5,
      name: 'CHECKING',
      imageUrl: '/department/checking3.jpg',
      content: {
        heading: 'CHECKING',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 6,
      name: 'PACKING',
      imageUrl: '/department/packing3.jpg',
      content: {
        heading: 'PACKING',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },

    // Add more tabs as needed
  ];

  const handleTabChange = (tabId: any) => {
    setActiveTab(tabId);
  };

  return (
    <div className=' md:w-full '>
      <div className='mt-20 ml-14'>
        <h1 className='mdLtext-7xl text-3xl text-num-watermark font-medium'>
          Departments
        </h1>

        <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
          Departments
        </h2>

        <h3 className='-translate-y-10 text-xl text-num-indigo  ml-1'>
          {'Empowering Decision Making To Transform'}
        </h3>
      </div>

      <div>
        <div className='md:flex text-num-indigo md:text-xl text-sm grid grid-cols-2  font-extrabold items-center justify-center md:gap-8 border-2 ml-2 mr-2  border-num-pink'>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer px-4 py-2 ${
                activeTab === tab.id
                  ? 'text-num-orange border-b-2 bg-gray-100 border-orange-600'
                  : 'text-gray-600 '
              }`}
              onMouseEnter={() => handleTabChange(tab.id)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className='flex gap-2'>
          <div className='hidden md:w-1/2 md:flex md:flex-col pl-24 justify-center border-2 border-num-indigo ml-2'>
            <h2 className='text-3xl font-semibold text-num-indigo mb-5 mt-10 mr-4'>
              {tabs[activeTab].content.heading}
            </h2>
            <p className='text-md text-num-indigo w-3/5 mb-5 font-medium'>
              {tabs[activeTab].content.paragraph}
            </p>
            <Link href={tabs[activeTab].content.link}>
              <Button className='bg-num-orange '>{`Read more>`}</Button>
            </Link>
          </div>
          <div className='1/2  mr-2'>
            <Image
              width={900}
              height={600}
              src={tabs[activeTab].imageUrl}
              alt={`Image for ${tabs[activeTab].name}`}
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
