import Image from "next/image";
import Header from "./Header";    
import HeroSection from "./HeroSection";
import Donorssection from "./Donorssection";
import ChairmanLetter from "./ChairmanLetter";
import GetinTouch from "./GetinTouch";
import Footer from "./Footer";
import ClientCarousel from "./ClientCarousel";
export default function Home() {
  return (
    <div>
      <Header />  
      <HeroSection />
<ClientCarousel />
      <ChairmanLetter />
      <GetinTouch />
      <Footer />
    </div>
  );
}
