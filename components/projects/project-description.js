import Image from "next/image";
import Link from "next/link";
export default function ProjectDescription(props) {
  const { title, slug, image, description, codeLink, siteLink } = props.project;
  const imagePath = `/images/projects/${slug}/${image}`;
  return (
    <div className="xl:mx-auto xl:container glassmorphism py-6">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8  ">
        <div className="flex flex-col-reverse lg:flex-row items-center my-12">
          <div className="w-full lg:w-2/4 p-2 my-2    itms-center text-center glassmorphism_dark-gradient">
            <Image
              width={600}
              height={280}
              src={imagePath}
              alt={title}
              layout="responsive"
              objectFit="cover"
              priority={true}
              className="lg:w-full h-full object-cover object-center w-full rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
            <h1 className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-12 md:pb-8 pb-4 ">
              {title}
            </h1>
            <p className="text-md leading-6 text-gray-600 md:pb-10 pb-8">
              {description}
            </p>
            <div className="md:block flex items-center justify-center ">
              <Link href={codeLink}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:w-auto w-full border border-gray-800 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 mr-4 text-sm leading-none text-gray-800 text-center rounded-md"
                >
                  Code
                </a>
              </Link>
              <Link href={siteLink}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:w-auto w-full border border-gray-800 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3  text-sm leading-none text-gray-800 text-center rounded-md"
                >
                  Site
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
