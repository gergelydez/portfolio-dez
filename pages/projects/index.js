import React from "react";
import Projects from "../../components/projects/projects";
import { getAllProjects } from "../../lib/helpers";

function ProjectsPage(props) {
  return <Projects projects={props.projects} />;
}
export function getStaticProps() {
  const allProjects = getAllProjects();
  return { props: { projects: allProjects } };
}
export default ProjectsPage;
