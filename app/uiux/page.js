import Achivement from "../components/uiux/Achivement";
import Dominants from "../components/uiux/Dominants";
import Faq from "../components/uiux/Faq";

import Hero2 from "../components/uiux/Hero2";

import Service from "../components/MobileAppsProjects";
import Tools from "../components/uiux/Tools";

export default function page() {
  return (
    <main className="main-light dark:main-dark">
      <Hero2 />
      <Achivement />
      <Dominants />
      <Service />

      <Tools />
      <Faq />
    </main>
  );
}
