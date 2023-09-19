import { useRef } from "react";
import { useGsapBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useGsapBioReveal(bioRef, 2);
  return (
    <div className="bio mt-6 md:mt-10 lg:mt-20 container mx-auto overflow-hidden">
      <p
        ref={bioRef}
        className="text-base md:text-lg lg:text-xl leading-normal md:leading-relaxed"
        style={{
          fontSize: "1.5rem",
          color: "rgb(255, 255, 255, 0.75)",
          lineHeight: "1.5",
        }}
      >
        I am a Full Stack Developer. 
        My passion for technology drives me to develop innovative solutions and contribute to exciting projects. 
        With a solid foundation in front-end and back-end engineering, I bring creativity to life through code. 
        My journey in the tech world has been marked by constant learning and growth, and 
        I look forward to working with organizations and individuals who share my interests in mutual success.
      </p>
    </div>
  );
};

export default Bio;
