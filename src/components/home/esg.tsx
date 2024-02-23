import Image from 'next/image';
import { Button } from '../ui/button';

const ESG = () => {
  return (
    <div>
      <div className='grid grid-cols-2 mt-10 mb-10'>
        <div className='flex flex-row-reverse mr-5'>
          <Image
            src={'/images/esg1.png'}
            height={400}
            width={500}
            alt='ESG image'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-5xl text-num-orange w-1/2 mb-10 '>
            ESG Strategic Consulting
          </h1>
          <p className='text-md text-num-indigo w-3/5'>
            Navigating Excellence:Your Gateway to Sustainable Living and
            Responsible Business Practices.
          </p>
          <Button className='w-1/3 bg-num-indigo mt-10 border-0 hover:bg-num-orange'>{`Read More>`}</Button>
        </div>
      </div>
    </div>
  );
};
export default ESG;
