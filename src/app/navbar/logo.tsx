import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='flex '>
      <div className='w-16'>
        <Link href={'/'}>
          <Image src={`/logo/LT_Logo.png`} alt='logo' width={230} height={64} />
        </Link>
      </div>
      <div className='flex items-center text-3xl font-extrabold text-num-purple'>
        <Link href={'/'}>Lahoti Textile</Link>
      </div>
    </div>
  );
};
export default Logo;
