import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
const Career = () => {
  return (
    <div className='md:flex items-center justify-center bg-num-indigo'>
      <div className='md:w-2/5'>
        <Image
          width={1920}
          height={600}
          src={'/resource/career.png'}
          alt={'career'}
        />
      </div>

      <div className='md:flex items-center justify-center md:w-3/5  mt-5 '>
        <div className='flex flex-col mt-10 w-2/3'>
          <h1 className='md:text-5xl text-white  mb-4'>
            Your Career Journey Starts Here
          </h1>
          <p className='text-white text-md md:w-4/5'>
            People are at the heart of our services. Come explore a world of
            oppurtunities in various functions and roles.
          </p>
          <Button className='md:w-1/3 bg-num-orange mt-10 border-0'>
            Explore Career{`>`}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Career;
