'use client';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      name: 'Business Transformation',
      imageUrl: '/services/0.jpg',
      content: {
        heading: 'Business Transformation',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 1,
      name: 'Contract Adiministration',
      imageUrl: '/services/1.jpg',
      content: {
        heading: 'Contract Adiministration',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 2,
      name: 'Quality Survey',
      imageUrl: '/services/2.jpg',
      content: {
        heading: 'Quality Survey',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 3,
      name: 'Client Management',
      imageUrl: '/services/3.jpg',
      content: {
        heading: 'Client Management',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 4,
      name: 'Project Monitoring & Control',
      imageUrl: '/services/4.jpg',
      content: {
        heading: 'Project Monitoring & Control',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 5,
      name: 'Techno Commercial Audit',
      imageUrl: '/services/5.jpg',
      content: {
        heading: 'Techno Commercial Audit',
        paragraph:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, voluptatem et voluptates ipsam consectetur natus reiciendis impedit unde corrupti dignissimos?',
        link: '#',
      },
    },
    {
      id: 6,
      name: 'Transction Advisory',
      imageUrl: '/services/6.jpg',
      content: {
        heading: 'Transction Advisory',
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
    <div className='w-full '>
      <div className='mt-20 ml-14'>
        <h1 className='text-7xl text-num-watermark font-medium'>Services</h1>

        <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
          Services
        </h2>

        <h3 className='-translate-y-10 text-xl text-num-indigo  ml-1'>
          {'Empowering Decision Making To Transform'}
        </h3>
      </div>

      <div>
        <div className='flex text-num-indigo'>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer px-4 py-2 ${
                activeTab === tab.id
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600'
              }`}
              onMouseEnter={() => handleTabChange(tab.id)}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div className='flex'>
          <div className='w-1/2 flex flex-col pl-24 justify-center'>
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
          <div className='1/2 mt-2 mr-20'>
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

export default Services;
