import { Fragment } from "react";
import Hero from "../components/hero";
import About from "../components/about";
import ContactNew from "../components/contact";
import Projects from "../components/projects/projects";
import Head from "next/head";
import { getAllProjects } from "../lib/helpers";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Portfolio-Gergely Dezső</title>
        <meta
          name="description"
          content=" Gergely Dezső's Front-end web developer portfolio"
        />
      </Head>
      <Hero />
      <About />
      <Projects projects={props.projects} />
      <ContactNew />
    </Fragment>
  );
}
export function getStaticProps() {
  const allProjects = getAllProjects();
  return { props: { projects: allProjects } };
}
