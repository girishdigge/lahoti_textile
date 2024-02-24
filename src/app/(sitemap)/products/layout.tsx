import Navbar from '@/app/navbar/page';
import Footer from '@/components/home/footer';

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className='h-full flex flex-col items-center justify-center '>
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default ProductLayout;
