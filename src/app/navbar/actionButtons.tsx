import { AlignJustify } from 'lucide-react';

import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
const ActionButtons = () => {
  return (
    <div>
      <div className='md:hidden '>
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Site Map</SheetTitle>
              <SheetDescription>
                <div className='flex flex-col space-y-4 items-start w-full text-black text-lg mt-10'>
                  {/* <Link href='/'>Home</Link> */}
                  <Link href='/services'>Services</Link>
                  <Link href='/sectors'>Sectors</Link>
                  <Link href='/projects'>Projects</Link>
                  <Link href='/bim'>BIM</Link>
                  <Link href='/about'>About</Link>
                  <Link href='/career'>Career</Link>
                  <Link href='/contact'>Contact</Link>
                  <Link href='/resources'>Resources/Blog</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default ActionButtons;
