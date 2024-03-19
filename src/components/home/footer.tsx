import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '@/app/navbar/logo';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='md:grid md:grid-col-2 mt-10 h-auto bg-num-indigo '>
      <div className='  flex flex-col-2 mb-4'>
        <div className='flex flex-col-4 w-4/5 mt-12 pl-12 text-white '>
          <div className='hidden md:flex md:flex-col w-1/4 '>
            <h1 className='mb-2 text-xl font-semibold '>What we do</h1>
            <p>Towel</p>
            <p>Napkin</p>
            <p>Products</p>
          </div>
          <div className='hidden md:flex md:flex-col w-1/4 '>
            <h1 className='mb-2 text-xl font-semibold'>Pages</h1>
            <p>Linkedin</p>
            <p>Insights</p>
            <p>About Us</p>
          </div>
          <div className='flex flex-col md:w-1/4'>
            <h1 className='text-xl font-bold'>Contacts</h1>
            <div className='grid grid-cols md:w-4/5 mb-2 '>
              {/* <h1 className='mb-2 text-xl font-semibold '>Contacts</h1> */}
              <div>
                {/* <h2 className='font-bold'>Solapur Office</h2> */}
                <p className='mb-4 mt-2 text-sm md:w-5/6'>
                  MW5M+35X, MIDC, Solapur, Maharashtra 413006 <br />
                </p>
                <div className='flex mt-2'>
                  <IoCall size={20} className='mt-0.5' />
                  <p className='font-bold text-base'> +919860481010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:justify-center  md:w-1/5 '>
          <div className='flex w-full md:mr-8 h-24 mt-6 '>
            <div className='w-16 flex items-center '>
              <Image
                src={`/logo/LT_Logo.png`}
                alt='logo'
                width={230}
                height={64}
              />
            </div>
            <div className='flex items-center ml-2 md:text-3xl text-xl font-extrabold text-white'>
              Lahoti Textile
            </div>
          </div>
          <div className='flex flex-row-5 gap-4'>
            <Link
              href={`https://m.facebook.com/p/Lahoti-Textile-100079515964914/`}
            >
              <FaFacebookF size={30} className='bg-white p-1  rounded-xl' />
            </Link>
            <FaInstagram size={30} className='bg-white p-1  rounded-xl' />
            <Link href={`https://in.linkedin.com/in/pankaj-lahoti-a03334230`}>
              <FaLinkedinIn size={30} className='bg-white p-1 rounded-xl' />
            </Link>
          </div>
          <p className='text-white font-md w-3/4 mt-4'>
            &copy; 2024 Lahoti Textiles. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
