import { useState, useEffect } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  async function getSkills() {
    const response = await fetch("/skills.json");
    const data = await response.json();
    setSkills(data);
  }

  useEffect(() => {
    getSkills();
  }, []);

  const loaded = () => {
    return (
      <div className="pt-[50px] w-full" style={{ maxWidth: "1000px" }}>
        <div className="fade-up duration-500">
          <p className="text-[100px] inline border-b-4 dark:border-red-500 border-blue-500 font-mono">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-6 text-center py-6 fade-up">
            {skills.map((skill, idx) => (
                <div
                    key={idx}
                    className="shadow-lg rounded-md shadow-[#160a0b] dark:hover:bg-red-500 hover:scale-110 hover:bg-blue-500 duration-500 p-2"
                    style={{ flex: "1 0 0" }}
                >
                    <p className="text-md">{skill.name}</p>
                    <img
                        className="w-[150px] mx-auto pb-2"
                        src={skill.image}
                        alt={skill.name}
                    />
                </div>
            ))}
        </div>
      </div>
    );
  };

  return skills.length > 0 ? loaded() : <h1>Loading...</h1>;
}

export default Skills;
