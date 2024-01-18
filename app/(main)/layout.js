import Footer from "../Footer";

import MainNav from "../MainNav";

export const metadata = {
  title: "Mehbubur's Portfolio",
  description: "Great Awards winning Designer and Developer",
};

export default function RootLayout({ children }) {
  return (
    <main>
     
      <MainNav />
      {children}
      <Footer />
    </main>
  );
}
