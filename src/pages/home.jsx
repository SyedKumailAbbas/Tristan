// home.jsx
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";

export default function Home() {
  return (
    <>            {/* no p-6 wrapper here */}
      <Hero />
      <Banner />  {/* you can re-add padding starting here if you want */}
    </>
  );
}