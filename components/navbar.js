import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { AnimateOnScroll } from "../helpers/animate-on-scroll";
import Link from "next/link";


export const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const animate = AnimateOnScroll();
  return (
    <Popover>
      <div
        className={`${
          animate &&
          "fixed   bg-transparent backdrop-blur-xl transition ease-in-out  p-3"
        }  top-0 left-0 right-0 z-40 p-5 lg:px-8 rounded-b-md shadow-md shadow-slate-300 bg-white mb-4`}
      >
        <nav
          className=" flex items-center justify-between sm:h-10 lg:justify-between"
          aria-label="Global"
        >
          <div className=" flex items-center flex-grow flex-shrink-0 lg:flex-grow-0 md:px-3">
            <div className="flex items-center justify-between w-full md:w-auto lg:px-8">
              <Link href="/">
                <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-200">
                  {" "}
                  <span className="sr-only">Workflow</span>
                  <span className=" block text-indigo-600 xl:inline text-2xl tracking-tight font-extrabold  sm:text-2xl md:text-3xl lg:px-8 px-4 ">
                    PORTFOLIO
                  </span>
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name} className=" ">
                <a className=" text-xl  font-bold text-gray-900 hover:text-indigo-500  ">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <span className="block text-indigo-600 xl:inline text-2xl tracking-tight font-extrabold  sm:text-2xl md:text-3xl">
                PORTFOLIO
              </span>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Navbar;
