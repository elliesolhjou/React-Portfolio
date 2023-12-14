import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Projects(props) {
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    const response = await fetch("/projects.json");
    const data = await response.json();
    setProjects(data);
  }

  useEffect(() => {
    getProjects();
  }, []);

  const loaded = () => {
    return (
      <div className="flex flex-row justify-center items-center">
        {projects.length > 0 &&
          projects.map((project, idx) => (
            <div key={idx} className="flex-col md:container md:mx-auto items-center basis-1/4 hover:basis-1/3 mb-8">
              <h1 className="text-7xl">{project.name}</h1>
              <img className="w-[450px] h-[400px] m-0 p-0" src={project.image} alt={project.name} />
              <div className="mt-4">
                <a href={project.git}>
                    <div className="mt-2">
                        <a className="" href={project.live}>
                            <div className="mx-auto">
                                <button className="button w-full text-gray-800 text-center dark:text-gray-100 dark:bg-none hover:text-gray-100 rounded-sm group border-2 py-3 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 dark:hover:bg-red-500 dark:hover:border-red-500">
                                    Code on Github
                                    <span className="button-icon ml-4">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 20 20"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </a>
                    </div>
                </a>
              </div>
              <div className="mt-2">
                <a className="" href={project.live}>
                  <button className="button w-full text-gray-800 text-center justify-center dark:text-gray-100 dark:bg-none hover:text-gray-100 rounded-sm group border-2 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500 dark:hover:bg-red-500 dark:hover:border-red-500">
                    Live Site
                    <span className="button-icon ml-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 20 20"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          ))}
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;



