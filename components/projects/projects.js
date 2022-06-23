import Image from "next/image";
import ProjectsGrid from "./projects-grid";



export default function Projects(props) {
 
  return (
    <div className="max-w-screen-2xl mx-auto p-8 my-6  glassmorphism">
      <div className="max-w-7xl mx-auto px-8 text-center glassmorphism sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl  font-extrabold  sm:text-4xl md:text-5xl pb-16 ">
          My Projects
        </h2>

        <ProjectsGrid projects={props.projects} />
      </div>
    </div>
  );
}
