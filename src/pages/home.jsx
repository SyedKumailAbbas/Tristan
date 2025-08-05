import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Testimonials from "../components/Testimonial/Testimonials";
import Teaching from "../components/Teaching/Teaching";
const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <Banner />
      <Teaching />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
