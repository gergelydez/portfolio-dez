import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";
import { navigation } from "../navbar";
const socialItems = [
  {
    name: "Linkedin",
    icon: "fa fa-linkedin",
    href: "https://www.linkedin.com/in/dezso-gergely-9356a3208",
  },
  {
    name: "Github",
    icon: "fa fa-github",
    href: "https://github.com/gergelydez",
  },
  {
    name: "Whatsapp",
    icon: "fa fa-whatsapp",
    href: "tel:+40758656192",
  },
  {
    name: "E-mail",
    icon: "fa fa-envelope",
    href: "mailto:dezweb1@gmail.com",
  },
];

function Footer() {
  const dynamicFooterDate = new Date().getFullYear();
  return (
    <footer className="flex bg-black text-white w-full  m-auto shadow-md rounded-t-md mt-12  flex-col justify-center items-center">
      <div className=" text-white text-3xl mt-4  ">
        {socialItems.map((socialItem) => (
          <a
            key={socialItem.name}
            className=" px-3 hover:scale-110 hover:bg-white hover:text-black hover:rounded-md"
            href={socialItem.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={socialItem.icon}></i>
          </a>
        ))}
      </div>

      <div className="my-6">
        {navigation.map((navItem) => (
          <Link href={navItem.href} key={navItem.name}>
            <a className="p-2 m-2 text-xl   text-white hover:bg-white hover:rounded-md hover:p-1 hover:text-black ">
              {navItem.name}
            </a>
          </Link>
        ))}
      </div>

      <Link href="/">
        <a className="my-4">Gergely Dezső &copy; {dynamicFooterDate}</a>
      </Link>
    </footer>
  );
}

export default Footer;
