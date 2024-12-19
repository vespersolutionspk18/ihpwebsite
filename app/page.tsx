
import Header from "./Header";    
import HeroSection from "./HeroSection";

import ChairmanLetter from "./ChairmanLetter";
import GetinTouch from "./GetinTouch";
import Footer from "./Footer";
import ClientCarousel from "./ClientCarousel";
import RecentProjects from "./RecentProjects";
export default function Home() {
  return (
    <div>
      <Header />  
      <HeroSection />
<ClientCarousel />
      <ChairmanLetter />
      <GetinTouch />
      <Footer />
      <RecentProjects />
    </div>
  );
}
