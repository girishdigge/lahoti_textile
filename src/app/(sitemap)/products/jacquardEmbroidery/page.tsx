import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex flex-col flex-center justify-center'>
      <h1 className='mt-2 mb-2 z-10 text-5xl font-bold text-num-black flex justify-center bg-gradient-to-r from-num2-grad1 to-num2-grad2'>
        JACQUARD EMBROIDERY
      </h1>
      <div className='grid grid-cols-2 gap-4'>
        <Image
          className='md:h-96 h-40 max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/jacquard_emb/1.jpg'
          height={500}
          width={500}
          alt='1'
        />
        <Image
          className='md:h-96 h-40 max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/jacquard_emb/2.webp'
          height={500}
          width={500}
          alt='1'
        />
        <Image
          className='md:h-96 h-40 max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/jacquard_emb/3.webp'
          height={500}
          width={500}
          alt='1'
        />
        <Image
          className='md:h-96 h-40 max-w-full rounded-lg transform hover:scale-110 transition-all ease-in-out'
          src='/products/jacquard_emb/4.png'
          height={500}
          width={500}
          alt='1'
        />
      </div>
    </div>
  );
};
export default Page;
