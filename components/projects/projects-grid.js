import React from "react";
import ProjectsItem from "./projects-item";

function ProjectsGrid(props) {
  const { projects } = props;

  return ( 
    <div className="p-4 mt-6 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4 bg-gradient-to-r   glassmorphism_dark-gradient">
     
      {projects.map((project) => (
        <ProjectsItem key={project.slug} project={project} />
      ))}
    </div>
  );
}

export default ProjectsGrid;
