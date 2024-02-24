import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex flex-col flex-center justify-center'>
      <h1 className='mt-2 mb-2 text-5xl font-bold text-num-green flex justify-center'>
        PROMOTIONAL SUPPLY
      </h1>
      <div className='grid grid-cols-2 gap-4'>
        <Image
          className='h-auto max-w-full rounded-lg transform hover:scale-110 transition-all ease-in-out'
          src='/products/promotional/1.jpg'
          height={500}
          width={500}
          alt='1'
        />

        <Image
          className='h-auto max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/promotional/2.jpg'
          height={500}
          width={500}
          alt='1'
        />
        <Image
          className='h-96 max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/promotional/3.jpg'
          height={500}
          width={500}
          alt='1'
        />
        <Image
          className='h-96 max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/promotional/4.jpg'
          height={500}
          width={500}
          alt='1'
        />
      </div>
    </div>
  );
};
export default Page;
