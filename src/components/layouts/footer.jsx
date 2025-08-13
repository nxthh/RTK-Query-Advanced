import { NavLink } from "react-router"

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-zinc-800">
      <div
        className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
      >
        <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400"
          >© 2015 <NavLink to="https://flowbite.com/" className="  ">Ace™</NavLink>. All
          Rights Reserved.
        </span>
        <ul
          className="flex flex-wrap items-center mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-400 sm:mt-0"
        >
          <li>
            <NavLink to="/about" className="me-4 md:me-6">About</NavLink>
          </li>
          <li>
            <NavLink to="#" className="me-4 md:me-6">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="#" className="me-4 md:me-6">Licensing</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="  ">Contact</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}
