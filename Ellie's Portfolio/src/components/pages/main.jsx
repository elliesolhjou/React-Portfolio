import React, { useState, useEffect } from "react";

function Main() {
  const [about, setAbout] = useState([]);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data.basics);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h2>{about.email}</h2>
      <h2>{about.bio}</h2>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default Main;
