import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
const AboutUs = () => {
  return (
    <div className='md:flex items-center justify-center bg-num-blue bg-opacity-10 '>
      {/* <div className='w-1/6'></div> */}
      <div className='flex flex-col mt-10 w-2/3 ml-16 mb-10'>
        <h2 className='md:text-4xl text-num-indigo mb-4'>
          Manufacturer & Exporter of Terry Towel
        </h2>
        <p className='md:text-base text-num-blue text-xl w-3/4'>
          Lahoti Group is a comprehensive company specialized in developing and
          export of terry towels and is located in Solapur, A beautiful
          financial Textile Hub of India. Lahoti Group originally started from
          yarn business,which was established in 1962.Thereafter we advanced
          from yarn dealing business to Terry Towel,kitchen Napkins,Bath Towels
          manufacturing business.
        </p>
        <div className='mt-5'>
          <Button className='w-40  text-bold text-white font-medium bg-num-indigo hover:bg-num-orange'>
            About Us
          </Button>
        </div>
      </div>

      <div className=' w-1/3'>
        <Image
          src={'/office/2.png'}
          alt='pattern'
          height={200}
          width={500}
          className='rotate-6 hover:w-112'
        />
      </div>
    </div>
  );
};
export default AboutUs;
