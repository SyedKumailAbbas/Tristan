// home.jsx
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Video from "../components/video/video";
import Podcast from "../components/Podcast/Podcast";
import Testimonials from "../components/Testimonial/Testimonials";
import TestimonialSlider from "../components/Carousel/carousel";
import Teaching from "../components/Teaching/Teaching";
import Keynotes from "../components/Keynotes/Keynotes"; // Importing Keynotes component
import "../App.css";
export default function Testimonial() {
  return (
    <>
      <Testimonials
        title="keynotes"
        videoIds={["s2qwHgwpnrA", "VUCJHNkDIhM"]}
      />
      <TestimonialSlider />
      <Testimonials title="podcast" videoIds={["s2qwHgwpnrA", "VUCJHNkDIhM"]} />
    </>
  );
}
