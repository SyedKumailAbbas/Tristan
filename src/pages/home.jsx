// home.jsx
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Video from "../components/video/video";
import Podcast from "../components/Podcast/Podcast";
import Testimonials from "../components/Testimonial/Testimonials";
import Teaching from "../components/Teaching/Teaching";
import Keynotes from "../components/Keynotes/Keynotes"; // Importing Keynotes component
import Corp from "../components/Keynotes/Corporations"; 
import Header from "../components/Keynotes/HEADER"; 
import JANU from "../components/Keynotes/HEADER";
export default function Home() {
  return (
    <>            
      <Hero />
      <Banner />  
      <Video/>
      <Keynotes />
     <Teaching />
     <Podcast/>
      <Testimonials />
      <Footer />
    </>
  );
}