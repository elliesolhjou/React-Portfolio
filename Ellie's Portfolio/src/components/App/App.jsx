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
  return (
    <div className="App flex items-center justify-center flex-col dark:bg-black dark:text-white font-mono box-border overscroll-contain">
      <Header />
      <nav>
        <div className="hover:text-white">
          <Contact />
        </div>
      </nav>
      <main className="">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
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
