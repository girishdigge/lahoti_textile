import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex flex-col flex-center justify-center'>
      <h1 className='mt-2 mb-2 text-5xl font-bold text-num-green flex justify-center'>
        BEACH TOWEL
      </h1>
      <div className='grid grid-cols-2 gap-4'>
        <Image
          className='md:h-96 h-40 max-w-full rounded-lg transform hover:scale-110 transition-all ease-in-out'
          src='/products/beach/1.png'
          height={500}
          width={500}
          alt='1'
        />

        <Image
          className='md:h-96 h-40 max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/beach/2.png'
          height={500}
          width={500}
          alt='1'
        />
        <Image
          className='md:h-96 h-40 max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/beach/3.png'
          height={500}
          width={500}
          alt='1'
        />
        <Image
          className='h-auto max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/beach/4.png'
          height={500}
          width={500}
          alt='1'
        />
      </div>
    </div>
  );
};
export default Page;
