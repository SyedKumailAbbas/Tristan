// media page

import Header from "../components/MEDIA/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Heading } from "../components/Heading/heading";
import Img from "../assets/Group 126 (1).png";
import PodcastFeature from "../components/MEDIA/podcastFeature/podcastFeature";
import FriendshipCarousel from "../components/MEDIA/friendship";
import PanelistSection from "../components/MEDIA/Yt";
import Podcast from "../components/Podcast/Podcast";
import "./media.css";
import PodcastCarousel from "../components/MEDIA/secondCarousel/podcastCarousel";
export default function Media() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay for route change
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <FriendshipCarousel />
      <PanelistSection />
      <Heading imgSrc={Img} altText="heading imgs" />
      <PodcastFeature />
      <Podcast />
      <div id="podcast-carousel-section">
        <PodcastCarousel />
      </div>
    </>
  );
}
