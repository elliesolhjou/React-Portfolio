import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "../Footer/Footer";
import Error from "../pages/Error";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect (() => {
    const mode = darkMode? "dark": "light";
    document.documentElement.classList.toggle("dark")
    // setDarkMode(mode === "light" ? "dark" : "light");

   }, [darkMode])



  return (
    <div className="App flex items-center justify-center flex-col dark:bg-black dark:text-white">
      <nav className="header">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute right-10 top-10 bg-black text-white px-5 py-3 rounded hover:bg-stone-700 dark:bg-white dark:text-black"
      >
        {!darkMode? "Light": "Dark"} Mode
      </button>
        <Header />
        <Contact />
      </nav>
      <main className="">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
