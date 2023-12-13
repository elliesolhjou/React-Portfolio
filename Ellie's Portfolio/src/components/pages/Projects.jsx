import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Projects (props) {
    const [projects, setProjects] = useState([]);
    async function getProjects() {
        const response = await fetch("/projects.json");
        console.log(response)
        const data = await response.json()
        setProjects(data)
    }
    useEffect(() => {
        getProjects();
    }, []);
    console.log(projects)

    const loaded = () => {
        return projects.length > 0 && projects.map((project, idx) => (
            <div key={idx}>
                <h2>{project.name}</h2>
                <img src={project.image} alt={project.name} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
            </div>
        ));
    };

    return projects? loaded(): <h1>Loading...</h1>
}


export default Projects