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
import JANU from "../components/Keynotes/HEADER";
//import High from "../components/Keynotes/HighSchool";
import High from "../components/Keynotes/HighImage";
import Secondary from "../components/Keynotes/secondaryimage";
export default function Keynote() {
  return (
    <>
      <JANU />
      <High/>
      <Secondary/>
      <Corp />
    </>
  );
}
