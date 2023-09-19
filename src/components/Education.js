import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useGsapProjectLeftRightReveal } from "../hooks/gsap";

const educationData = [
    {
        id: 1,
        college: "RNS Institute of Technology",
        year: "2020 - 2024",
        degree: "Bachelor of Engineering in Information Science",
        percentage: "CGPA: 9.19",
      },
      {
        id: 2,
        college: "Kendriya Vidyalaya Danapur Cantt",
        year: "July 2019",
        degree: "Intermediate (CBSE)",
        percentage: "Grade - 81.4%",
      },
      {
        id: 3,
        college: "Kendriya Vidyalaya Danapur Cantt",
        year: "May 2017",
        degree: "Matriculate (CBSE)",
        percentage: "CGPA - 10",
      },
];

const Education = () => {
    const educationRef = useRef(null);
    const educationArr = [educationRef];
  
    useGsapProjectLeftRightReveal(educationArr); // Call the hook directly in the component
  
    return (
      <div className="mt-60 md:mt-40 lg:mt-60"> {/* Adjust margin values */}
        <div className="container mx-auto" id="education">
          <SectionTitle title={"Education"} />
  
          <div
            className="education-wrapper mt-10 md:mt-20 grid md:grid-cols-1 gap-6 lg:gap-20 overflow-hidden"
            ref={educationRef}
          >
            {educationData.map((edu) => (
              <div key={edu.id} className="education-entry p-4 md:p-6 lg:p-8 border border-white/20 rounded-md">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <h3 className="text-lg lg:text-xl font-semibold mb-2">
                    {edu.college}
                  </h3>
                  <p
                    className="text-base md:text-lg lg:text-xl"
                    style={{
                      fontSize: "1.5rem",
                      color: "rgb(255, 255, 255, 0.75)",
                      lineHeight: "1.5",
                    }}
                  >
                    {edu.year}
                  </p>
                </div>
                <p
                  className="text-base md:text-lg lg:text-xl mt-2 md:mt-0"
                  style={{
                    fontSize: "1.5rem",
                    color: "rgb(255, 255, 255, 0.75)",
                    lineHeight: "1.5",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  className="text-base md:text-lg lg:text-xl mt-2"
                  style={{
                    fontSize: "1.5rem",
                    color: "rgb(255, 255, 255, 0.75)",
                    lineHeight: "1.5",
                  }}
                >
                  {edu.percentage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;