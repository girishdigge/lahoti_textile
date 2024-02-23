import ActionButtons from './actionButtons';
import Logo from './logo';
import { NavigationBar } from './navigationBar';

const Navbar = () => {
  return (
    <div className='flex justify-between  items-center px-10 border-b sticky top-0 z-50 bg-white'>
      <Logo />
      <NavigationBar />
      <ActionButtons />
    </div>
  );
};
export default Navbar;
