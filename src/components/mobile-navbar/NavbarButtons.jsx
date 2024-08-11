import { useContext } from "react";
import { NavbarContext } from "../../store/NavbarContext";
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";

export default function NavbarButtons() {
  const {
    showModal,
    handleModalClick,
    getDarkModeMenuIcon,
    darkModeHandler,
    getBothModeIcon,
    onOAuthClick,
    currentUser,
    handleLogout
  } = useContext(NavbarContext);

  // console.log("Navbar buttons changed");
  // console.log(currentUser);
  
  

  const { btn, btnClass } = getBothModeIcon();
  return (
    <div className="nav-buttons flex justify-end">
    {/* theme mode button  */}
      <button className={btnClass} onClick={darkModeHandler}>
        {btn}
      </button>

      {/* Write button */}
      {currentUser && <Link to={"create"} className={`${btnClass} flex`}>
        <button>
          <IoMdCreate fontSize="20px" color="#1fbcaa" />
        </button>
      </Link>}

      {/* Signin button */}
      {!currentUser && <button className={btnClass} onClick={onOAuthClick}>
        <FiUserPlus fontSize="20px" color="#1fbcaa" />
      </button>}

      {/* logout button */}
      {currentUser && <button className={btnClass} onClick={handleLogout}>
        <FiUserPlus fontSize="20px" color="#1fbcaa" />
      </button>}


    {/* Menu button */}
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
    </div>
  );
}
