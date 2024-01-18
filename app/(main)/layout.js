import Footer from "../Footer";

import MainNav from "../MainNav";

export const metadata = {
  title: "RmFolio",
  description: "Person-Centered Data-Driven Company Created by Rownok",
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
