import { useContext } from "react"
import { NavbarContext } from "../store/NavbarContext"
import { IoSunny } from "react-icons/io5"
import { LuMoonStar } from "react-icons/lu"

export default function NavbarButtons(){

    const {showModal, handleModalClick, getDarkModeMenuIcon, darkMode, darkModeHandler} = useContext(NavbarContext)

    return <div className="nav-buttons flex justify-end">
    {!showModal && (
      <button
        onClick={handleModalClick}
        className="dark:hover:border-gray-500 dark:shadow-none dark:border-gray-600 dark:border-[1px] dark:bg-[#252529] dark:text-gray-200 md:hidden px-3 py-2 text-sm font-semibold shadow-sm border border-b-gray-200 rounded-full mx-2"
      >
        <span className="flex">
          <span>Menu</span>
          {getDarkModeMenuIcon()}
        </span>
      </button>
    )}
    {!darkMode && (
      <button
        className="hover:shadow-sm border border-gray-100 rounded-3xl px-3 py-2"
        onClick={darkModeHandler}
      >
        {" "}
        <IoSunny fontSize="20px" color="#1fbcaa" />
      </button>
    )}
    {darkMode && (
      <button
        className="hover:shadow-sm border border-gray-100 rounded-3xl px-3 py-2 dark:bg-[#252529] dark:hover:border-gray-500 dark:border-gray-600 dark:border-[1px] dark:hover:text-stone-400 dark:shadow-none"
        onClick={darkModeHandler}
      >
        <LuMoonStar fontSize="20px" color="#1fbcaa" />
      </button>
    )}
  </div>
}