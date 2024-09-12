import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import SuperNavbar from './components/superNavbar';
import About from './components/about';
import WhyTHD from './components/whyTHD';
import IText from './components/text';
import Card from './components/cart';
import Footer from './components/Footer';
import Youtube from './components/Youtube';
import Testimonial from './components/Testimonial';
import CookingTips from './components/CookingTips';
import Milestones from './components/Milestones';
import OurJourney from './components/OurJourney';
import Img from './components/img';

function App() {
  return (
    <>
    <SuperNavbar />
    <Navbar/>
    <HeroSection/>
    <About />
    <WhyTHD />
    <IText/>
    <Card />
    <CookingTips/>
    <Milestones/>
    <OurJourney/>
    <Testimonial/>
    <Youtube/>
    <Img/>
    <Footer/>
    </>
  );
}

export default App;
