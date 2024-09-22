import SectionHeader from "./SectionHeader.jsx";

const Skills = () => {
  const skills = {
    fontEnd: ["javascript", "html", "css", "react", "nodejs", "express"],
    backEnd: ["Express", "NodeJS", "Javascript", "MongoDB", "PostGresql"],
    miscellaneous: ["Git", "GitHub", "Figma", "Miro"],
  };

  return (
    <>
      <SectionHeader title="Skills" />
      <div>
        <h2>Front-end</h2>
        <ol>
          {skills.fontEnd.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Skills;
