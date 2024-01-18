
import Hero from "../components/Hero";
import OurSuccess from "../components/OurSuccess";
import MainFaq from "../components/MainFaq";
import Carousel from "../components/Carousel";
import AboutMe from "../components/AboutMe";

export default function page() {
  return <main className="main-light dark:main-dark">
      <Hero/>
      <Carousel/>
  <AboutMe/>
    
      <OurSuccess/>
      <MainFaq/>
  </main>;
}
