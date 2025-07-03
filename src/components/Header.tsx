import { NavLink, Link } from "react-router";
import { useState } from "react";
import menuImg from "../assets/images/icon-menu.svg";
import closeMenuImg from "../assets/images/icon-menu-close.svg";
import logoImg from "../assets/images/logo.svg";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="py-8 md:py-10 flex justify-between relative">
        <div>
          <Link to="/">
            <img src={logoImg} alt="News homepage logo" />
          </Link>
        </div>

        {!showMenu ? (
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <img src={menuImg} alt="Open navigation menu" />
            </button>
          </div>
        ) : (
          <div className="bg-black/50 z-20 size-full fixed top-0 left-0 md:hidden">
            <div
              className={`fixed z-50 bg-white top-0 right-0 flex flex-col p-9 w-2/3 h-full gap-20 duration-300 transition menu-active `}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowMenu((prev) => !prev)}
                  aria-label="Close menu"
                >
                  <img src={closeMenuImg} alt="Close navigation menu" />
                </button>
              </div>
              <nav className="flex flex-col gap-3 text-xl font-semibold [&>a]:[&:hover,&:active]:text-primary-orange [&>a]:transition">
                {" "}
                <NavLink to="#">Home</NavLink>
                <NavLink to="#">New</NavLink>
                <NavLink to="#">Popular</NavLink>
                <NavLink to="#">Trending</NavLink>
                <NavLink to="#">Categories</NavLink>
              </nav>
            </div>
          </div>
        )}
        <nav className="hidden md:flex gap-10 items-center text-xl font-semibold [&>a]:text-secondary-gray [&>a]:[&:hover,&:active]:text-primary-orange [&>a]:transition">
          <NavLink to="#">Home</NavLink>
          <NavLink to="#">New</NavLink>
          <NavLink to="#">Popular</NavLink>
          <NavLink to="#">Trending</NavLink>
          <NavLink to="#">Categories</NavLink>
        </nav>
      </header>
    </>
  );
}
