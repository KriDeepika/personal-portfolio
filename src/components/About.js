import React, { useRef, useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useGsapProjectLeftRightReveal } from "../hooks/gsap";

const About = () => {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const aboutArr = [aboutLeftRef, aboutRightRef];

  useEffect(() => {
    import("../assets/images/img2.jpg").then((module) => {
      setImg1(module.default);
    });

    import("../assets/images/img1.jpg").then((module) => {
      setImg2(module.default);
    });
  }, []);

  useHoverEffect(aboutLeftRef, img1, img2);
  useGsapProjectLeftRightReveal(aboutArr);

  return (
    <div className="mt-60 md:mt-40 lg:mt-60">
      <div className="container mx-auto mt-10 md:mt-20 lg:mt-40" id="about">
        <SectionTitle title={"About"} />

        <div className="about-wrapper mt-10 md:mt-20 grid md:grid-cols-2 gap-6 lg:gap-20 overflow-hidden">
          <div className="about-left" ref={aboutLeftRef}></div>
          <div className="about-right" ref={aboutRightRef}>
            <p
              className="text-lg lg:text-xl"
              style={{
                fontSize: "1.5rem",
                color: "rgb(255, 255, 255, 0.75)",
                lineHeight: "1.5", // Adjust line spacing as needed
              }}
            >
              I am a Full Stack Developer.
              My passion for technology is the driving force behind my journey of developing innovative solutions 
              and supporting exciting projects.
              With a solid foundation in front-end and back-end technology, 
              I thrive on bringing creative ideas to life through the power of code.
            </p>
            <p
              className="mt-4 md:mt-6 lg:mt-10 text-lg lg:text-xl"
              style={{
                fontSize: "1.5rem",
                color: "rgb(255, 255, 255, 0.75)",
                lineHeight: "1.5", // Adjust line spacing as needed
              }}
            >
              Additionally, I have always had a keen interest in technology and the latest trends
              and I look forward to working with organizations and individuals who share my passion 
              for technology and a mutual commitment to success.
            </p>
            <a
              href="https://drive.google.com/file/d/1M8yqU9QSOZCjFPUl3TynaYtZ9e1AWA_Y/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase py-2 md:py-3 lg:py-4 px-4 md:px-6 lg:px-8 border border-white/20 rounded-full duration-500 inline-block mt-6 md:mt-8 lg:mt-10 text-base md:text-lg lg:text-xl"
              style={{
                backgroundColor: "white",
                color: "black",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "cyan"; // Change background color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white"; // Restore background color on mouse leave
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
