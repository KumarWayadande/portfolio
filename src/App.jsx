import { useState } from "react";
import ArticleContainer from "./components/ArticleContainer";
import LandingPage from "./components/LandingPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState(<LandingPage />);

  const handleClick = (component) => {
    setCurrentPage(component);
  };

  return (
    <div className="full-width-container w-[100%] overflow-hidden">
      <div className="container bg-white max-w-7xl mx-auto md:px-20 px-6  h-max-full inset-0 py-2">
        <div className="nav-container flex md:justify-between my-6 justify-end">
          <div className="profile-container">
            {/* <!-- <img src="./profile.jpg" class="w-16 hidden rounded-full translate-y-24 absolute border border-gray-200 shadow-sm md:block" alt=""> --> */}
          </div>

          <nav className="hidden md:block max-w-fit shadow-sm px-5 py-2.5 rounded-full border border-b-gray-50">
            <div className="flex navbar flex-row space-x-4">
              <div
                className="nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]"
                onClick={() => handleClick(<LandingPage />)}
              >
                About
              </div>
              <div
                className="nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]"
                onClick={() => handleClick(<ArticleContainer />)}
              >
                Articles
              </div>
              <div className="nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]">
                Projects
              </div>
              <div className="nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]">
                Speaking
              </div>
              <div className="nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]">
                Uses
              </div>
            </div>
          </nav>

          <div className="nav-buttons flex justify-end">
            <button className="md:hidden px-4 py-2 text-sm font-semibold shadow-sm border border-b-gray-200 rounded-full mx-2">
              Menu ^
            </button>
            <button className="px-4 py-2 text-sm font-semibold shadow-sm border border-b-gray-200 rounded-full">
              <i className="fa-solid fa-circle-half-stroke text-[#1fbcaa]"></i>
            </button>
          </div>
        </div>

        {/* Any intermediate code goes in this section */}
        {/* Start of this section */}

        {currentPage}

        {/* End of this section */}

        <div className="footer flex flex-col items-center md:flex-row justify-between py-10 px-5 my-5 border-t-2 border-gray-100">
          <div className="supportive-links flex gap-5 my-3">
            <div className="nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]">
              About
            </div>
            <div className="nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]">
              Projects
            </div>
            <div className="nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]">
              Speaking
            </div>
            <div className="nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]">
              Uses
            </div>
          </div>
          <div className="copy-right my-3">
            <span className="text-stone-500 text-sm">
              © 2024 Spencer Sharp. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
