import { useRef } from "react";
import { useGsapSkillItemReveal, useGsapSkillTextReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = [
  { id: 1, title: "Python" },
  { id: 2, title: "Java" },
  { id: 3, title: "HTML" },
  { id: 4, title: "CSS" },
  { id: 5, title: "Bootstrap" },
  { id: 6, title: "JavaScript" },
  { id: 7, title: "React" },
  { id: 8, title: "React-Router" },
  { id: 9, title: "Redux" },
  { id: 10, title: "TypeScript" },
  { id: 11, title: "SQL" },
  { id: 12, title: "Firebase" },
];
const Skills = () => {
  const skillItemRef = useRef([]);
  const skillTextRef = useRef([]);

  useGsapSkillItemReveal(skillItemRef.current);
  useGsapSkillTextReveal(skillTextRef.current);

  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <SectionTitle title={"My Skills"} />
      <div className="skills-wrapper mt-40 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {data.map((skill, i) => (
          <div
            key={skill.id}
            className="skill-item container overflow-hidden"
            ref={(el) => (skillItemRef.current[i] = el)}
          >
            <div
              className="flex gap-5 items-baseline"
              ref={(el) => (skillTextRef.current[i] = el)}
            >
              <span className="skill-number text-white/50">
                {String(skill.id).padStart(2, 0).padEnd(3, ".")}
              </span>
              <span className="skill-name">{skill.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;