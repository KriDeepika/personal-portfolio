import React from "react";
import Project from "./Project";
import SectionTitle from "./SectionTitle";
import img1 from "../assets/images/2.png"; // Import image 1
import img2 from "../assets/images/1.png"; // Import image 2
import img3 from "../assets/images/4.png"; // Import image 3
import img4 from "../assets/images/3.png"; // Import image 4

const data = [
  {
    id: 1,
    title: "Pokedex - a Pokemon website",
    img1: img1, // Use the imported image 1
    img2: img2, // Use the imported image 2
    description:
      "A pokemon website built with TypeScript, React, Firebase, SASS, Redux Thunk and Redux Toolkit. Features pokemon listing, searching, curating your very own list of pokemons. Async actions handled by Redux Thunk and state management made easy with Redux Toolkit.",
    tools: [
      "TypeScript",
      "React",
      "Firebase",
      "Redux Thunk",
      "SASS",
      "Redux Toolkit",
    ],
    liveLink: "https://pokedex-alpha-dusky.vercel.app/pokemon/1",
    frontEndLink: "https://github.com/KriDeepika/pokedex",
  },
  {
    id: 2,
    title: "Netflix_Clone - A Movie Streaming Platform",
    img1: img3, // Use the imported image 3
    img2: img4, // Use the imported image 4
    description:
      "A dynamic and user-friendly web application, providing a seamless streaming experience for users. Integrated with a back-end server for handling user authentication and fetching media content.",
    tools: [
      " React",
      "Tailwind CSS",
      "Next.JS",
      "MongoDB",
      "NextAuth",
    ],
    liveLink: "https://netflix-clone-web-app-krideepika.vercel.app/auth",
    frontEndLink: "https://github.com/KriDeepika/netflix-clone-web-app",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"My Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
