// home.jsx
import Hero from "../components/Hero/Hero";
import Header from "../components/MEDIA/Header";
import { Heading } from "../components/Heading/heading";
import Img from "../assets/Group 126 (1).png";
import PodcastFeature from "../components/MEDIA/podcastFeature/podcastFeature";
export default function Media() {
  return (
    <>
      <Header />
      <Heading imgSrc={Img} altText="heading imgs" />
      <PodcastFeature />
    </>
  );
}
