
import Header from "./Header";    
import HeroSection from "./HeroSection";

import ChairmanLetter from "./ChairmanLetter";

import Footer from "./Footer";
import ClientCarousel from "./ClientCarousel";
import RecentProjects from "./RecentProjects";

import Aboutsection from "./Aboutsection";
export default function Home() {
  return (
    <div>
      <Header />  
      <HeroSection />
      <Aboutsection />
<ClientCarousel />
      <ChairmanLetter />
      
      <RecentProjects />

      <Footer />
    </div>
  );
}
