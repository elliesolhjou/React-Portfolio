import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ESLogo from "../../assets/ES.jpg";

const Header = (props) => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mode = darkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between p-5 w-[50vw] md:container md:mx-auto ">
      <div className="flex items-center">
        <img className="w-20" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yNCAyMWgtM2wxLTNoMWwxIDN6bS0xMi45NzYtNC41NDNsOC45NzYtNC41NzV2Ni4xMThjLTEuMDA3IDIuMDQxLTUuNjA3IDMtOC41IDMtMy4xNzUgMC03LjM4OS0uOTk0LTguNS0zdi02LjYxNGw4LjAyNCA1LjA3MXptMTEuOTc2LjU0M2gtMXYtNy4yNmwtMTAuOTIzIDUuNTY4LTExLjA3Ny03IDEyLTUuMzA4IDExIDYuMjMxdjcuNzY5eiIvPjwvc3ZnPg=="/>
        <div className="ml-1">
          <h4 className="text-7xl font-bold text-blue-600 dark:text-red-500">
            Ellie&nbsp;Solhjou
          </h4>
        </div>
      </div>

      <nav className="flex space-x-5 grow justify-end">
        <Link to="/" className="hover:text-blue-500 dark:hover:text-red-500">
          ABOUT
        </Link>
        <Link
          to="/projects"
          className="hover:text-blue-500 dark:hover:text-red-500"
        >
          PROJECTS
        </Link>
        <Link
          to="/contact"
          className="hover:text-blue-500 dark:hover:text-red-500"
        >
          CONTACT
        </Link>
      </nav>

      <div className="flex ">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-[1px] text-white px-4 py-2 rounded hover:bg-gray-700 dark:bg-white dark:text-white dark:hover:bg-gray-300"
        >
          {!darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 12c0 5.514-4.486 10-10 10-4.826 0-8.864-3.436-9.797-7.99 3.573.142 6.903-1.818 8.644-5.013 1.202-2.206 1.473-4.679.83-6.992 5.608-.194 10.323 4.338 10.323 9.995zm-10-12c-1.109 0-2.178.162-3.197.444 3.826 5.933-2.026 13.496-8.781 11.128l-.022.428c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12z"/></svg>
          )}{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
