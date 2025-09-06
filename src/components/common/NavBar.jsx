import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";

const NavBar = () => {
  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-emerald-800 shadow-md shadow-emerald-900 ">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between ">
        {/* Logo Image */}
        <Link to="/">
        <p className="text-3xl text-white font-bold">Study Together</p>
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex gap-x-6 text-emerald-100">
            {NavbarLinks.map((link, index) => {
              return (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div></div>
                  ) : (
                    <NavLink
                      to={link?.path}
                      className={({ isActive }) =>
                        isActive ? "text-yellow-500  " : "text-gray-200"
                      }
                    >
                      {link.title}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* login and signUP */}
        <div className="space-x-4 text-emerald-200 ">
          <Link to={"/login"}>
            {" "}
            <button className="bg-emerald-800 rounded-xl py-2 px-4 cursor-pointer transition-all duration-200 hover:scale-105">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            {" "}
            <button className="bg-emerald-800 rounded-xl py-2 px-4 cursor-pointer transition-all duration-200 hover:scale-105">
              SignUP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
