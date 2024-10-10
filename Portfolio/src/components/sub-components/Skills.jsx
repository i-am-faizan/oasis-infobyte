import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      title: "C",
      progress: 90,
    },
    {
      title: "C++",
      progress: 90,
    },
    {
      title: " Data Structures",
      progress: 10,
    },

   
    {
      title: "HTML",
      progress: 90,
    },
    {
      title: "CSS",
      progress: 75,
    },
    {
      title: "JavaScript",
      progress: 75,
    },
    {
      title: "BootStrap",
      progress: 77,
    },
    {
      title: "Tailwind CSS",
      progress: 77,
    },
    
    {
      title: "React.JS",
      progress: 23,
    },

  ];

  return (
    <>
      <div>
        <h3>DEVELOPMENT SKILLS</h3>
        {skills.map((element) => {
          return (
            <div key={element.title} className="progressBar">
              <p>{element.title}</p>
              <span>
                <FaRegDotCircle
                  style={{
                    right: `${
                      element.progress > 85 ? 0 : 100 - element.progress
                    }`,
                  }}
                />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
