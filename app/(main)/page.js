
import Hero from "../components/Hero";
import Demos from "../components/Demos";
import MobileDemos from "../components/MobileDemos";
import OurSuccess from "../components/OurSuccess";
import MainFaq from "../components/MainFaq";

export default function page() {
  return <main className="main-light dark:main-dark">
      <Hero/>
      <Demos/>
      <MobileDemos/>
      <OurSuccess/>
      <MainFaq/>
  </main>;
}
