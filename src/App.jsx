import React, { useState, useCallback } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { FirebaseProvider } from "./context/FirebaseContext";
import Logo from './assets/RNTeaLogo.png';


import Home from "./pages/Home.jsx";
import Feed from "./pages/Feed.jsx";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Toggle mobile nav
  const handleMobileNavToggle = useCallback(() => {
    setIsMobileNavOpen((prev) => !prev);
    document.body.style.overflow = !isMobileNavOpen ? "hidden" : "";
  }, [isMobileNavOpen]);

  const handleMobileNavLinkClick = useCallback(() => {
    setIsMobileNavOpen(false);
    document.body.style.overflow = "";
  }, []);

  const isLinkActive = useCallback(
    (path) => {
      if (path === "/") return location.pathname === "/";
      if (path === "/feed") return location.pathname === "/feed";
      if (path.startsWith("/#")) {
        const section = path.substring(2);
        return location.pathname === "/" && location.hash === `#${section}`;
      }
      return false;
    },
    [location.pathname, location.hash]
  );

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight =
        document.querySelector("header")?.offsetHeight || 0;
      const yOffset =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        10;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <FirebaseProvider>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm py-8 px-6 md:px-10 lg:px-16 flex justify-between items-center rounded-b-lg fixed top-0 w-full z-30">
          <Link to="/" className="flex items-center space-x-3">
             <img
              src={Logo}
              alt="RNTea Logo"
              className="h-8 sm:h-9 md:h-9 lg:h-10 w-auto"
            />
          </Link>


          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className={`group relative overflow-hidden text-lg text-gray-700 font-medium transition duration-300 ease-in-out transform hover:scale-105 ${
                    isLinkActive("/#about") ? "font-bold" : ""
                  }`}
                >
                  About
                  <span className="absolute left-0 bottom-[-6px] h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#full-reviews-hub"
                  onClick={(e) => handleNavClick(e, "full-reviews-hub")}
                  className={`group relative overflow-hidden text-lg text-gray-700 font-medium transition duration-300 ease-in-out transform hover:scale-105 ${
                    isLinkActive("/feed") ? "font-bold" : ""
                  }`}
                >
                  TeaHub
                  <span className="absolute left-0 bottom-[-6px] h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className={`group relative overflow-hidden text-lg text-gray-700 font-medium transition duration-300 ease-in-out transform hover:scale-105 ${
                    isLinkActive("/#contact") ? "font-bold" : ""
                  }`}
                >
                  Contact
                  <span className="absolute left-0 bottom-[-6px] h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="group relative overflow-hidden text-lg text-gray-700 font-medium transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Socials
                  <span className="absolute left-0 bottom-[-6px] h-0.5 bg-[#CC5500] w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
          <div
            className={`hamburger-menu md:hidden flex flex-col justify-around w-8 h-6 cursor-pointer z-50 ${
              isMobileNavOpen ? "open" : ""
            }`}
            onClick={handleMobileNavToggle}
          >
            <div className="hamburger-bar w-full h-0.5 bg-gray-800 rounded"></div>
            <div className="hamburger-bar w-full h-0.5 bg-gray-800 rounded"></div>
            <div className="hamburger-bar w-full h-0.5 bg-gray-800 rounded"></div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div
          className={`mobile-nav-overlay md:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-98 z-40 flex flex-col justify-center items-center transition-transform duration-400 ease-in-out ${
            isMobileNavOpen ? "open" : "hidden"
          }`}
        >
          <button
            className="absolute top-6 right-6 text-gray-800 hover:text-gray-600 text-4xl focus:outline-none z-50"
            onClick={handleMobileNavLinkClick}
          >
            &times;
          </button>
          <a
            href="#about"
            className="text-2xl my-4"
            onClick={(e) => {
              handleNavClick(e, "about");
              handleMobileNavLinkClick();
            }}
          >
            About
          </a>
          <a
            href="#full-reviews-hub"
            className="text-2xl my-4"
            onClick={(e) => {
              handleNavClick(e, "full-reviews-hub");
              handleMobileNavLinkClick();
            }}
          >
            TeaHub
          </a>
          <a
            href="#contact"
            className="text-2xl my-4"
            onClick={(e) => {
              handleNavClick(e, "contact");
              handleMobileNavLinkClick();
            }}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="text-2xl my-4"
            onClick={(e) => {
              handleNavClick(e, "contact");
              handleMobileNavLinkClick();
            }}
          >
            Socials
          </a>
        </div>

        {/* Main Content */}
        <main className="flex-grow mt-[120px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white py-4 px-6 md:px-10 lg:px-16 border-t border-gray-200 text-center text-gray-600">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} RNTea. All Rights Reserved.
          </p>
        </footer>
      </div>
    </FirebaseProvider>
  );
};

export default App;
