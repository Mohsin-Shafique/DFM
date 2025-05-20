import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../shared/ScrollToTop";
import useScrollToTop from "../../hooks/useScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll to top on route change
  useScrollToTop();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isLoaded ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
