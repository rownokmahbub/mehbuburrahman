import Hero from "../components/Hero";
import MainFaq from "../components/MainFaq";
import Carousel from "../components/Carousel";
import AboutMe from "../components/AboutMe";
import Service from "../components/MobileAppsProjects";
import MobileAppsProjects from "../components/MobileAppsProjects";
import WebProjects from "../components/WebProjects";

export default function page() {
  return (
    <main className="main-light dark:main-dark">
      <Hero />
      <Carousel />
      <AboutMe />
      <MobileAppsProjects/>
      <WebProjects/>
      <MainFaq />
    </main>
  );
}
