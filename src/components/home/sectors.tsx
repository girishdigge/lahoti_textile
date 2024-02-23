'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Sectors = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className='w-full'>
      <div className='mt-10 ml-14'>
        <h1 className='text-7xl text-num-watermark font-medium'>Sectors</h1>

        <h2 className='-translate-y-12 ml-1 text-4xl text-num-orange font-medium'>
          Sectors
        </h2>

        <h3 className='-translate-y-10 text-2xl text-num-indigo font-light ml-1'>
          {'Expertise across the infrastructure spectrum'}
        </h3>
      </div>
      <div className='flex flex-row items-baseline justify-center ml-14 mr-14 space-x-5'>
        <Link
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          href={`/`}
          className='w-1/3 border flex flex-col text-num-indigo hover:bg-num-blue hover:text-white'
        >
          <h1 className='ml-4 mt-2  text-4xl font-light w-1/2'>Energy</h1>
          <p className='flex w-4/5 ml-4 mt-2 text-lg '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ea officiis sint deleniti delectus perspiciatis inventore.
          </p>
          <div className='flex flex-row mt-16'>
            <div className='w-1/2 flex flex-col-reverse ml-4 mb-4'>{`Read More>`}</div>
            <div className='w-1/2'>
              {isHovered1 ? (
                <Image
                  height={212}
                  width={232}
                  src={`/logo/s11.png`}
                  alt='hovered image'
                />
              ) : (
                <Image
                  height={212}
                  width={232}
                  src={`/logo/s1.png`}
                  alt='logo'
                />
              )}
            </div>
          </div>
        </Link>
        <Link
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          href={`/`}
          className='w-1/3 border flex flex-col text-num-indigo hover:bg-num-blue hover:text-white'
        >
          <h1 className='ml-4 mt-2  text-4xl font-light w-1/2'>
            Urban Development
          </h1>
          <p className='flex w-4/5 ml-4 mt-2 text-lg '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ea officiis sint deleniti delectus perspiciatis inventore.
          </p>
          <div className='flex flex-row mt-6'>
            <div className='w-1/2 flex flex-col-reverse ml-4 mb-4'>{`Read More>`}</div>
            <div className='w-1/2'>
              {isHovered2 ? (
                <Image
                  height={212}
                  width={232}
                  src={`/logo/s22.png`}
                  alt='hovered image'
                />
              ) : (
                <Image
                  height={212}
                  width={232}
                  src={`/logo/s2.png`}
                  alt='logo'
                />
              )}
            </div>
          </div>
        </Link>
        <Link
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          href={`/`}
          className='w-1/3 border flex flex-col text-num-indigo hover:bg-num-blue hover:text-white'
        >
          <h1 className='ml-4 mt-2  text-4xl font-light w-1/2'>
            Transportation
          </h1>
          <p className='flex w-4/5 ml-4 mt-2 text-lg '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ea officiis sint deleniti delectus perspiciatis inventore.
          </p>
          <div className='flex flex-row mt-16'>
            <div className='w-1/2 flex flex-col-reverse ml-4 mb-4'>{`Read More>`}</div>
            <div className='w-1/2'>
              {isHovered3 ? (
                <Image
                  height={212}
                  width={232}
                  src={`/logo/s33.png`}
                  alt='hovered image'
                />
              ) : (
                <Image
                  height={212}
                  width={232}
                  src={`/logo/s3.png`}
                  alt='logo'
                />
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sectors;
