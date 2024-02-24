import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Atrium place,Haryana',
      content:
        "We are India's foremost techno-commercial audit firm with close to two decades of expertise.",
      link: '/techno-commercial-project',
      image: '/projects/Atrium_place_Haryana.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Guwahati Airport',
      content:
        'Quantity surveying plays a vital role in ensuring accurate cost estimation and effective resource allocation.',
      link: '/quantity-survey',
      image: '/projects/GuwahatiAirport.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Pune Metro',
      content:
        'Our comprehensive services in Contract Administration and Bill Checking ensure transparency, compliance, and cost optimization.',
      link: '/contract-administration',
      image: '/projects/PuneMetro.jpg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Purvanchal Expressway',
      content:
        'We provide cost management services on a wide range of construction projects across sectors in infrastructure.',
      link: '/cost-consultants',
      image: '/projects/purvanchalExpressway.jpeg', // replace with the actual image path
    },
    {
      heading: "Empowering Tomorrow's infrastructure",
      location: 'Transmission & Distribution,Bihar',
      content:
        'We are a consulting engineering & audit services firm, partnering with businesses that advance the world, to overcome challenges and unlock their full potential.We are committed to delivering exceptional and cutting-edge solutions to today’s business problems. ',
      link: '/numbertree',
      image: '/projects/transmissionDistribution_Bihar.jpeg', // replace with the actual image path
    },
  ];
  return (
    <div>
      <div className='mt-10 md:ml-28'>
        <h1 className='text-7xl text-num-watermark font-medium'>Projects</h1>

        <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
          Projects
        </h2>

        <h3 className='-translate-y-10 text-2xl text-num-indigo font-light ml-1 mt-2'>
          {'Commited To Excellence Across Infra Projects'}
        </h3>
      </div>
      <Carousel className='md:flex items-center justify-center md:ml-28 ml-10 w-4/5 relative'>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className='relative'>
                <Image
                  className='object-cover hover:scale-105 transform transition-all duration-500 ease-in-out'
                  src={project.image}
                  height={600}
                  width={1200}
                  alt='image'
                />
                <div className='hidden md:absolute inset-0 md:flex items-center  mt-5'>
                  <div className='bg-black bg-opacity-70 w-2/5 h-4/5 p-5'>
                    <div className='flex flex-row mt-10 ml-2'>
                      <h1 className='text-num-orange text-lg ml-1 mt-1 font-semibold'>
                        OUR LATEST WORK
                      </h1>
                    </div>
                    <div className='text-white ml-2'>
                      <h2 className='md:text-3xl text-sm font-bold mb-2'>
                        {project.heading}
                      </h2>
                      <h3> {project.location}</h3>
                      <hr className='w-3/5 border-num-orange border-2 mt-3 mb-3' />
                      <h2 className='md:text-md mb-5 w-4/5 text-sm'>
                        {project.content}
                      </h2>
                      <Link href={`/projects`}>
                        <Button className='w-1/3 bg-num-indigo mt-5 border-0 hover:bg-num-orange'>
                          Read More{`>`}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='h-10 w-10 bg-num-orange hover:bg-num-indigo ' />
        <CarouselNext className='h-10 w-10 bg-num-orange hover:bg-num-indigo ' />
      </Carousel>
    </div>
  );
};
export default Projects;
