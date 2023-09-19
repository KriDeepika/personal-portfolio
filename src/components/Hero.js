import React, { useRef, useState, useEffect } from "react";
import {
  useGsapHeroImgReveal,
  useGsapHeadLineReveal
} from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Hero = () => {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const heroImgRef = useRef(null);
  const heroHeadLineOneRef = useRef(null);
  const heroHeadLineTwoRef = useRef(null);

  const headLineArr = [heroHeadLineOneRef, heroHeadLineTwoRef];

  useEffect(() => {
    import("../assets/images/img1.jpg").then((module) => {
      setImg1(module.default);
    });

    import("../assets/images/img2.jpg").then((module) => {
      setImg2(module.default);
    });
  }, []);

  useHoverEffect(heroImgRef, img1, img2);

  useGsapHeroImgReveal(heroImgRef, 0.5);
  useGsapHeadLineReveal(headLineArr, 1);

  return (
    <div className="hero container mx-auto mt-8 md:mt-16 lg:mt-24 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImgRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 className="hero-headline-one" ref={heroHeadLineOneRef}
        style={{
          fontSize: "5rem",
        }}>
          Full-Stack
        </h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 className="hero-headline-two" ref={heroHeadLineTwoRef}
        style={{
          fontSize: "5rem",
        }}>
          Developer
        </h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
