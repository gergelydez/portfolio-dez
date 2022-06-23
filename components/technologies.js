import React from "react";
import { useElementOnScreen } from "../helpers/animate-on-scroll";
const technologies = [
  {
    name: "HTML",
    color: " bg-gradient-to-r from-red-500 to-red-700 ",
    width: "w-11/12",
  },
  {
    name: "JavaScript",
    color: " bg-gradient-to-l from-amber-500 to-yellow-500",
    width: "w-4/5",
  },
  {
    name: "CSS",
    color: " bg-gradient-to-r from-cyan-500 to-blue-500",
    width: "w-11/12",
  },
  {
    name: "NextJS",
    color: " bg-gradient-to-r from-gray-700 to-zinc-900",
    width: "w-3/5",
  },
  {
    name: "ReactJS",
    color: " bg-gradient-to-r from-cyan-400 to-blue-600",
    width: "w-3/5",
  },
  {
    name: "Tailwind",
    color: " bg-gradient-to-r from-cyan-700 to-blue-900",
    width: "w-3/6",
  },
  {
    name: "NodeJS",
    color: " bg-gradient-to-r from-emerald-500 to-green-800",
    width: "w-2/5",
  },
  {
    name: "GIT",
    color: " bg-gradient-to-r from-neutral-500 to-slate-700",
    width: "w-9/12",
  },
  {
    name: "Github",
    color: " bg-gradient-to-r from-stone-600 to-stone-900",
    width: "w-11/12",
  },
];
export default function Technologies() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });
  return (
    <div className="max-w-7xl mx-auto p-8 text-center glassmorphism">
      <h1 className="   text-4xl  font-extrabold  sm:text-4xl md:text-5xl py-12 my-8">
        Tools and technologies
      </h1>
      {technologies.map((technologie) => (
        <div
          ref={containerRef}
          key={technologie.name}
          className="w-5/6 bg-gray-300 mx-auto my-6   shadow-sm rounded-full"
        >
          <div
            className={`${technologie.width} rounded-full ${
              isVisible && "progress"
            }  ${isVisible && technologie.color}`}
          >
            <div className=" w-40    text-slate-50  text-sm tracking-tight font-base sm:text-xl md:text-2xl  ">
              <p className="text-center tracking-in-expand">
                {technologie.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
