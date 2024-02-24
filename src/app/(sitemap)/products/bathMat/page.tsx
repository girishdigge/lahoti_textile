import Image from 'next/image';

const Page = () => {
  return (
    <div className='flex flex-col flex-center justify-center '>
      <h1 className='mt-2 mb-2 text-5xl font-bold  flex justify-center bg-gradient-to-r from-num2-grad1 to-num2-grad2'>
        BATH MAT
      </h1>
      <div className='grid grid-cols-2 gap-4'>
        <Image
          className='h-auto max-w-full rounded-lg transform hover:scale-110 transition-all ease-in-out'
          src='/products/bath_mat/1.jpg'
          height={500}
          width={500}
          alt='1'
        />

        <Image
          className='h-auto max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/bath_mat/2.png'
          height={500}
          width={500}
          alt='1'
        />
        <Image
          className='md:md:h-96 max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/bath_mat/3.png'
          height={500}
          width={500}
          alt='1'
        />
        <Image
          className='h-auto max-w-full rounded-lg transform hover:scale-110  transition-all ease-in-out'
          src='/products/bath_mat/4.png'
          height={500}
          width={500}
          alt='1'
        />
      </div>
    </div>
  );
};
export default Page;
