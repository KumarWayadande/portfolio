import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../mobile-navbar/Navbar";
import { NavbarContext } from "../../store/NavbarContext";
import TopNavbarContainer from "../utility components/TopNavbarContainer";
import FooterNavbarContainer from "../utility components/FooterNavbarContainer";
export default function RootLayout(prop) {
  const { showModal, footerCopyRightText } = useContext(NavbarContext);

  return (
    <>
      {showModal && <Navbar />} {/* Mobile Navbar */}
      <div className="dark:bg-black full-width-container w-[100%] overflow-hidden selection:bg-[#1fbcaa] selection:text-white">
        <div className="container bg-white dark:bg-[#18181b] max-w-7xl mx-auto md:px-20 px-6  h-max-full inset-0 py-2">
          <TopNavbarContainer />
          {/* Middle data page */}
          <Outlet /> {/* outlet component renders all the child components */}
          {prop.children ? prop.children : null}
          {/* {console.log(prop.children)} */}
          <FooterNavbarContainer footerCopyRightText={footerCopyRightText} />
          {/* End of this section */}
        </div>
      </div>
    </>
  );
}
