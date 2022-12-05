import {
  CheckCircleIcon,
  DeviceMobileIcon,
  LightBulbIcon,
  FireIcon,
} from "@heroicons/react/outline";

import { useElementOnScreen } from "../helpers/animate-on-scroll";
const features = [
  {
    name: "Responsive",
    description: "My layouts will work on any device, big or small.",
    icon: DeviceMobileIcon,
  },
  {
    name: "Dynamic",
    description:
      "Websites don't have to be static, I love making pages come to life.",
    icon: FireIcon,
  },
  {
    name: "Intuitive",
    description: "Strong preference for easy to use, intuitive UX/UI.",
    icon: LightBulbIcon,
  },
  {
    name: "Fast",
    description:
      "Fast load times and lag free interaction, my highest priority.",
    icon: CheckCircleIcon,
  },
];

export default function Summary() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  return (
    <section className=" max-w-7xl mx-auto p-8 my-6  glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className={` ${isVisible && "typewriter"} text-center py-10 `}
        >
          <h2 className="text-xl text-indigo-600 font-semibold tracking-wide uppercase">
            About me {isVisible}
          </h2>
          <h3 className=" my-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My name is{" "}
            <span className="block text-indigo-600 xl:inline text-2xl tracking-tight font-extrabold  sm:text-5xl md:text-5xl">
              Gergely Dezső
            </span>
          </h3>
          <p
            className={`${
              isVisible && "text_anim-right"
            } mx-auto mt-8 max-w-2xl text-xl text-gray-500 `}
          >
            I am a Front-End Developer with experience building websites and web
            applications and a knack for creating attractive user interfaces. I
            want to offer my HTML, CSS and JavaScript skills so far. I want to
            work on real projects, so develop myself and the company. I am happy
            to undertake full-time or part-time work with an immediate start.
          </p>
        </div>

        <div className=" mx-auto flex  items-center justify-center text-center">
          <div>
            {features.map((feature) => (
              <ul key={feature.name} className=" flex flex-col justify-center ">
                <li className="mx-auto my-4 flex  items-center justify-center h-20 w-20 rounded-md bg-green-600 text-white">
                  <feature.icon className="h-16 w-16" aria-hidden="true" />
                </li>
                <li>
                  <p className=" text-xl leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </li>
                <li className=" text-lg text-gray-500">
                  {feature.description}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
