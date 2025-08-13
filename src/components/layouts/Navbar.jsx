import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { FaSun, FaMoon } from "react-icons/fa";

export default function NavbarBasic() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return savedTheme || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header className="fixed w-full z-20 top-0 start-0 bg-transparent backdrop-blur-3xl dark:bg-transparent border-b border-zinc-200 dark:border-zinc-600">
        <div className="max-w-screen-xl mx-auto px-4">
          <nav
            aria-label="main navigation"
            className="flex h-16 items-center justify-between font-medium text-zinc-900 dark:text-white"
            role="navigation"
          >
            {/*<!-- Brand logo --> */}
            <NavLink
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap text-2xl font-semibold dark:text-white"
              to={"/"}
            >
              <span>ODINN</span>
            </NavLink>
            {/*<!-- Mobile trigger --> */}
            <button
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/*<!-- Navigation links --> */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex space-x-8 font-medium">
                <li role="none" className="flex items-center">
                  <NavLink
                    role="menuitem"
                    aria-haspopup="false"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white px-3 py-2 rounded-sm md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500"
                        : "text-zinc-900 hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:text-primary-500"
                    }
                    to="/"
                  >
                    <span>Home</span>
                  </NavLink>
                </li>
                <li role="none" className="flex items-center">
                  <NavLink
                    role="menuitem"
                    aria-haspopup="false"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white px-3 py-2 rounded-sm md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500"
                        : "text-zinc-900 hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:text-primary-500"
                    }
                    to="/products"
                  >
                    <span>Product</span>
                  </NavLink>
                </li>
                <li role="none" className="flex items-center">
                  <NavLink
                    role="menuitem"
                    aria-haspopup="false"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white px-3 py-2 rounded-sm md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500"
                        : "text-zinc-900 hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 dark:text-white dark:hover:text-primary-500"
                    }
                    to="/about"
                  >
                    <span>About</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="text-zinc-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-500 p-2 rounded-full hidden md:block"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <FaSun className="w-5 h-5" />
                ) : (
                  <FaMoon className="w-5 h-5" />
                )}
              </button>
              <NavLink
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                className="text-zinc-900 font-semibold dark:text-white hover:text-primary-700 dark:hover:text-primary-500"
                to="/login"
              >
                <span>Login</span>
              </NavLink>
              <NavLink
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                className="px-4 py-2 text-white font-semibold bg-primary-700 rounded-lg hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
                to="/register"
              >
                <span>Register</span>
              </NavLink>
            </div>
            {/*<!-- Mobile menu --> */}
            <div
              className={`w-full md:hidden transition-all duration-300 ${
                isToggleOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col p-4 mt-4 font-medium border rounded-lg space-y-2 bg-white dark:bg-zinc-800">
                <li>
                  <button
                    onClick={() => {
                      toggleDarkMode();
                      setIsToggleOpen(false);
                    }}
                    className="flex items-center justify-between w-full py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700"
                  >
                    <span>Switch Theme</span>
                    {theme === "dark" ? (
                      <FaSun className="w-5 h-5" />
                    ) : (
                      <FaMoon className="w-5 h-5" />
                    )}
                  </button>
                </li>
                <li role="none" className="flex items-stretch">
                  <NavLink
                    role="menuitem"
                    aria-haspopup="false"
                    className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700"
                    to="/"
                    onClick={() => setIsToggleOpen(false)}
                  >
                    <span>Home</span>
                  </NavLink>
                </li>
                <li role="none" className="flex items-stretch">
                  <NavLink
                    role="menuitem"
                    aria-haspopup="false"
                    className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700"
                    to="/products"
                    onClick={() => setIsToggleOpen(false)}
                  >
                    <span>Product</span>
                  </NavLink>
                </li>
                <li role="none" className="flex items-center">
                  <NavLink
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700"
                    to="/login"
                    onClick={() => setIsToggleOpen(false)}
                  >
                    <span>Login</span>
                  </NavLink>
                </li>
                <li role="none" className="flex items-center">
                  <NavLink
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700"
                    to="/register"
                    onClick={() => setIsToggleOpen(false)}
                  >
                    <span>Register</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}