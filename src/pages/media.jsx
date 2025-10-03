// media page

import Header from "../components/MEDIA/Header";
import { Heading } from "../components/Heading/heading";
import Img from "../assets/Group 126 (1).png";
import PodcastFeature from "../components/MEDIA/podcastFeature/podcastFeature";
import FriendshipCarousel from "../components/MEDIA/friendship";
import PanelistSection from "../components/MEDIA/Yt";
import PodcastCarousel from "../components/MEDIA/secondCarousel/podcastCarousel";
export default function Media() {
  return (
    <>
      <Header />
      <FriendshipCarousel />
      <PanelistSection />
      <Heading imgSrc={Img} altText="heading imgs" />
      <PodcastFeature />
      <PodcastCarousel />
    </>
  );
}
