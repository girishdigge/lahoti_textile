'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import Link from 'next/link';
const Page = () => {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
        >
          Our Products <br />
          <div className='md:grid md:grid-cols-3 justify-center  md:gap-12 md:text-5xl items-center mt-20 mb-20'>
            <Link href={'/products/dobbyBorder'}>
              <h1>Dobby Border</h1>
            </Link>
            <Link href={'/products/stripeTowel'}>
              <h1>Stripe Towel</h1>
            </Link>
            <Link href={'/products/bathTowel'}>
              <h1>Bath Towel</h1>
            </Link>
            <Link href={'/products/jacquardBorder'}>
              <h1>Jacquard Border</h1>
            </Link>
            <Link href={'/products/jacquardDesign'}>
              <h1>Jacquard Design</h1>
            </Link>
            <Link href={'/products/jacquardEmbroidery'}>
              <h1>Jacquard Embroidery</h1>
            </Link>
            <Link href={'/products/kitchenNapkin'}>
              <h1>Kitchen Napkin</h1>
            </Link>
            <Link href={'/products/greekBorderSet'}>
              <h1>Greek Border Set</h1>
            </Link>
            <Link href={'/products/bathMat'}>
              <h1>Bath MAT</h1>
            </Link>
            <Link href={'/products/beach'}>
              <h1>Beach Towel</h1>
            </Link>
            <Link href={'/products/promotionalSupply'}>
              <h1>Promotional Supply</h1>
            </Link>
            <Link href={'/products/institutionalSupply'}>
              <h1>Institutional Supply</h1>
            </Link>
          </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
};
export default Page;
