import React from "react";
import ProjectDescription from "../../components/projects/project-description";
import { getAllProjects, getProjectById } from "../../lib/helpers";

function ProjectsDescriptionPage(props) {
  return <ProjectDescription project={props.project} />;
}
export function getStaticProps(context) {
  const slug = context.params.slug;

  const singleProject = getProjectById(slug);
  return { props: { project: singleProject }, revalidate: 600 };
}
export function getStaticPaths() {
  const projects = getAllProjects();
  const paths = projects.map((project) => ({ params: { slug: project.slug } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default ProjectsDescriptionPage;
