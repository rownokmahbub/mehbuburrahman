import Footer from "../Footer";
import Nav from "../UIUXNav";
export const metadata = {
  title: "UI/UX Designer Portfolio",
  description: "Person-Centered Data-Driven Company Created by Rownok",
};

export default function RootLayout({ children }) {
  return (
    <main>
      {/* <NavBar/> */}
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
