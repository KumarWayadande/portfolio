import Navbar from "./components/mobile-navbar/Navbar";
import { useContext } from "react";
import { NavbarContext } from "./store/NavbarContext";
import TopNavbarContainer from "./components/utility components/TopNavbarContainer";
import FooterNavbarContainer from "./components/utility components/FooterNavbarContainer";
export default function App() {
  const { currentPage, showModal, footerCopyRightText } =
    useContext(NavbarContext);

  return (
    <>
      {showModal && <Navbar />} {/* Mobile Navbar */}
      <div className="dark:bg-black full-width-container w-[100%] overflow-hidden selection:bg-[#1fbcaa] selection:text-white">
        <div className="container bg-white dark:bg-[#18181b] max-w-7xl mx-auto md:px-20 px-6  h-max-full inset-0 py-2">
          <TopNavbarContainer /> {/* Desktop navbar */}
          {/* Any intermediate code goes in this section Start of this section 
          This currentPage is handled entirely in the NavbarContext.jsx file */}
          {currentPage}
          {/* End of this section */}
          <FooterNavbarContainer footerCopyRightText={footerCopyRightText} />
        </div>
      </div>
    </>
  );
}
