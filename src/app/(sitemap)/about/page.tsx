// import Image from 'next/image';
// <Image src={`/office/1.png`} width={300} height={300} alt='office' />
// <Image src={`/office/1.png`} width={300} height={300} alt='office' />
'use client';
import React from 'react';
// import { calsans } from '@/fonts/calsans';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { TracingBeam } from '@/components/ui/tracing-beam';

export default function Page() {
  return (
    <TracingBeam className=''>
      <div className='max-w-2xl mx-auto antialiased pt-4 relative'>
        {content.map((item, index) => (
          <div key={`content-${index}`} className='mb-10'>
            <h2 className='bg-num-indigo text-white rounded-full text-3xl font-bold w-fit px-4 py-1 mb-4'>
              {item.badge}
            </h2>

            {/* <p className={'text-xl mb-4'}>{item.title}</p> */}

            <div className='text-md space-y-2 prose prose-sm dark:prose-invert'>
              {item?.image && (
                <Image
                  src={item.image}
                  alt='blog thumbnail'
                  height='1000'
                  width='1000'
                  className='rounded-lg mb-10 object-cover'
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const content = [
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>
          Lahoti Group is a comprehensive company specialized in developing and
          export of terry towels and is located in Solapur, A beautiful
          financial Textile Hub of India. Lahoti Group originally started from
          yarn business,which was established in 1962.Thereafter we advanced
          from yarn dealing business to Terry Towel,kitchen Napkins,Bath Towels
          manufacturing business.
        </p>
        <p>
          Based on perfect management and comprehensive quality system, relying
          on tenets of faithfulness and quality first, we welcome our customers
          from all over the world to build up a friendly relationship with us in
          the near future.{' '}
        </p>
        <p>
          However,orders are booked,processed and delivered as per customers
          individual specifications and requirements. Our aim has always been to
          give our buyers International Wuality products at the most competitive
          price.
        </p>
        <p>
          We believe that business success depends upon our listening
          to,understanding and meeting the requirements of our customers.
          Customer satisfaction is our first priority.We look forward for the
          opportunity to demonstration our superiority of services and quality
          and from a long term business relationship with our customers.
        </p>
      </>
    ),
    badge: 'ABOUT US',
    image: '/office/2.png',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    description: (
      <>
        <p>
          🔹Exporting 100% cotton and 80/20(PC){`"`}Terry Towels,Bath Towel,Face
          Towel,Kitchen Napkin,Beach Towel,Jacquard design Towel,Bath Robe,Hand
          gloves,Vellor Wash finish Towel,Institutional & Promotional Supply
          {`"`} of different quality and variety to cater to wide range of
          customers and one stop sourcing for the buyer.
        </p>
        <p>
          🔹Lahoti grout is a quality consious, professional company and never
          compromise on quality and service just to match the price levels. We
          understand our responsibility and commitement only what we can deliver
          it. We are fortunate enough to retain our client base,who continue
          with us since long and appreciate our efforts and services.{' '}
        </p>
        <p>
          🔹 In other words, the preliminary benefit of Lahoti Group is
          experienced team in Textile Industry.
        </p>
        <p>
          🔹Be the company who understand the buyer and deliver as per the buyer
          requirements.
        </p>
      </>
    ),
    badge: 'LAHOTI GROUP',
    image: '/office/2.png',
  },
];
