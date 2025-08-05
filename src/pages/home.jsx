// home.jsx
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Video from "../components/video/video";
import Podcast from "../components/Podcast/Podcast";
import Testimonials from "../components/Testimonial/Testimonials";
import Teaching from "../components/Teaching/Teaching";

export default function Home() {
  return (
    <>            
      <Hero />
      <Banner />  
      <Video/>
      <Podcast/>
     <Teaching />
      <Testimonials />
      <Footer />
    </>
  );
}