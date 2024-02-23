import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
const AboutUs = () => {
  return (
    <div className='md:flex items-center justify-center bg-num-blue bg-opacity-10'>
      {/* <div className='w-1/6'></div> */}
      <div className='flex flex-col mt-10 w-2/3 ml-16'>
        <h2 className='md:text-4xl text-num-indigo mb-4'>
          {'Professionals skilled in molding the constructed surroundings.'}
        </h2>
        <p className='md:text-base text-num-blue text-xl w-3/4'>
          {
            'NumberTree is an infrastructure consulting engineering & audit services firm. We are committed to delivering exceptional and cutting-edge solutions to today’s business problems.'
          }
        </p>
        <div className='mt-5'>
          <Button className='w-40  text-bold text-white font-medium bg-num-indigo hover:bg-num-orange'>
            About Us
          </Button>
        </div>
      </div>

      <div className=' w-1/3'>
        <Image src={'/logo/2.svg'} alt='pattern' height={200} width={500} />
      </div>
    </div>
  );
};
export default AboutUs;
