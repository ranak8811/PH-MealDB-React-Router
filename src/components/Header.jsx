import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="sticky top-0 z-10 ">
      <div className="navbar bg-base-100 backdrop-blur-3xl bg-opacity-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <nav
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/contact"}>Contact Us</NavLink>
              <NavLink to={"/categories"}>Categories</NavLink>
              <NavLink to={"/users"}>Users</NavLink>
            </nav>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            MealDB
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <nav className="menu menu-horizontal px-1 space-x-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact Us</NavLink>
            <NavLink to={"/categories"}>Categories</NavLink>
            <NavLink to={"/users"}>Users</NavLink>
          </nav>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;

// ----------------------------------------------------------------
{
  /* <NavLink
  to={"/"}
  className={({ isActive }) =>
    isActive ? "active text-blue-500 font-semibold" : "text-gray-500"
  }
>
  Home
</NavLink>; */
}
// ----------------------------------------------------------------
