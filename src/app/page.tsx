import Navbar from './navbar/page';
import AboutUs from '../components/home/aboutUs';
import Carousel from '../components/home/carousel';
import Department from '../components/home/department';
import Sectors from '../components/home/sectors';
import Projects from '../components/home/projects';
import Career from '../components/home/career';
import Experience from '@/components/home/experience';
import KeyFacts from '@/components/home/keyFacts';
import ESG from '@/components/home/esg';
import Footer from '@/components/home/footer';
import Connect from '@/components/home/connect';
import Testimonials from '@/components/home/testimonials';
import Country from '@/components/home/country';
import WhatsAppCTA from '@/components/home/whatsappCTA';
export default function Home() {
  return (
    <div>
      <Navbar />
      <WhatsAppCTA />
      <Carousel />
      <Experience />
      <AboutUs />
      {/* <Sectors /> */}
      <Department />
      <KeyFacts />
      <Projects />
      <Country />
      <Testimonials />
      <Career />
      <ESG />
      {/* <Connect /> */}
      <Footer />
    </div>
  );
}
