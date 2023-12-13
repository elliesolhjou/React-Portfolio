import { useState, useEffect } from "react";
import "../pages/styles.css";
import Headshot from "../../assets/headshot.png";

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
    <div style={{ marginTop: "55px" }}>
      <p className="about-bio indent-8 text-black-50 font-mono ">{about.bio}</p>
      <div>
        <a href={about.resume} download={about.resume}>
          <button className="text-gray-800 dark:text-gray-100 dark:bg-none hover:text-gray-100 rounded-sm group border-2 px-4 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500">
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
    </div>
  );


  return about ? loaded() : <h1>Loading...</h1>;
}

export default Main;
