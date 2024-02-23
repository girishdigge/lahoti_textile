import Image from 'next/image';
import { Button } from '../ui/button';

const Connect = () => {
  return (
    <div>
      <div className='flex flex-row'>
        <div className='flex flex-row relative'>
          <Image
            src={`/images/linkedin.png`}
            height={300}
            width={600}
            alt='linkedin'
          />
          <div className=' absolute inset-0 flexnflex-row ml-6'>
            <h1 className='text-num-orange text-5xl font-bold mt-5 mb-2'>
              Linkedin
            </h1>
            <p className='w-4/5 text-white'>
              We perform Construction Site Audits of EPC & BOT Road Projects,
              Tunnel & Bridge Projects, Industrial Projects, Metro & Rail
              Projects, Water Treatment Plants, Transmission and Distribution
              projects, Oil & Gas projects, Power Projects, Real Estate –
              Residential & Commercial Projects, Institutional and Civil
              Projects.
            </p>
            <Button className='w-40 mt-5 bg-num-orange ml-96 border-0 hover:bg-num-indigo'>
              Connect{`>`}
            </Button>
          </div>
        </div>
        <div className='flex flex-row relative'>
          <Image
            src={`/images/insights.png`}
            height={300}
            width={600}
            alt='linkedin'
          />
          <div className=' absolute inset-0 flexnflex-row ml-6'>
            <h1 className='text-num-orange text-5xl font-bold mt-5 mb-2'>
              Insights
            </h1>
            <p className='w-4/5 text-white'>
              We perform Construction Site Audits of EPC & BOT Road Projects,
              Tunnel & Bridge Projects, Industrial Projects, Metro & Rail
              Projects, Water Treatment Plants, Transmission and Distribution
              projects, Oil & Gas projects, Power Projects, Real Estate –
              Residential & Commercial Projects, Institutional and Civil
              Projects.
            </p>
            <Button className='w-40 mt-5 bg-num-indigo ml-96 border-0 hover:bg-num-orange'>
              Explore{`>`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Connect;
