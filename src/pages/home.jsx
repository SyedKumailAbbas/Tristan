// home.jsx
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Video from "../components/video/video";
import Podcast from "../components/Podcast/Podcast";
export default function Home() {
  return (
    <>            {/* no p-6 wrapper here */}
      <Hero />
      <Banner />  {/* you can re-add padding starting here if you want */}
      <Video/>
      <Podcast/>
    </>
  );
}