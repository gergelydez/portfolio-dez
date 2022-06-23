import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectsItem(props) {
  const { slug, title, image } = props.project;
  const imagePath = `/images/projects/${slug}/${image}`;
  const linkPath = `/projects/${slug}`;
  return (
    <div className="group relative glassmorpism ">
      <Link href={linkPath}>
        <a className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 hover:cursor-pointer lg:h-80 lg:aspect-none ">
          <Image
            width={600}
            height={350}
            src={imagePath}
            alt={title}
            layout='responsive'
            objectFit="cover"
            className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-md shadow-lg"
          />
        </a>
      </Link>
    </div>
  );
}

export default ProjectsItem;
