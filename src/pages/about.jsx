//about page
import Hero from "../components/ABOUT/hero";
import Black from "../components/ABOUT/black.jsx";
import Mobile from "../components/ABOUT/mobile.jsx";
import Marathon from "../components/ABOUT/Marathon.jsx";
import Event from "../components/ABOUT/Event.jsx";
import Gemstone from "../components/ABOUT/Gemstone.jsx";
import headingImg from "../assets/Group 125.png";
import { Heading } from "../components/Heading/heading.jsx";
export default function about() {
  return (
    <>
      <Hero />
      <Black />
      <Mobile />
      <Heading imgSrc={headingImg} altText={"Text img"} />
      <Marathon />
      <Event />
      <Gemstone />
    </>
  );
}
