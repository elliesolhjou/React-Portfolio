import { useState, useEffect } from "react";
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
    <div style={{marginTop: "55px"}}>
      <p className="about-bio">{about.bio}</p>
      <a href={about.resume} download={about.resume}>
      <button>Download Resume</button>
      </a>
      <div>{about.headshot}</div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default Main;
