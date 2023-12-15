import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skills from "../pages/Skills";
import "../pages/styles.css";


function Main() {
  const [about, setAbout] = useState([]);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch("/about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="items-center" style={{ marginTop: "20px" }}>
      <p className="about-bio indent-16 text-black-50 font-mono text-2xl ">{about.bio}</p>
      <div className="justify-center items-center">
        <a href={about.resume} download={about.resume}>
          <button className="text-gray-800 dark:text-gray-100 dark:bg-red-500 dark:border-red-500 hover:text-gray-100 rounded-sm group border-2 px-4 py-3 my-2 flex items-center bg-blue-500 border-blue-500 dark:hover:bg-red-500 dark:hover:border-red-500">
            Download Resume
            <span className="group-hover:-translate-x-2 repeat duration-500">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                className="ml-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </a>
      </div>
      <div className=" flex-wrap justify-center items-center ml-2 mr-">
        <div className="flex-col md:mx-auto items-center basis-1/4 hover:basis-1/3 mb-8">
          <Skills />
        </div>
      </div>
    </div>
  );


  return about ? loaded() : <h1>Loading...</h1>;
}

export default Main;
