import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Hero() {
  return (
    <div className="max-w-screen-2xl mx-auto mt-20  glassmorphism relative  overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-md z-10 pb-8 bg-white  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden   lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className=" mx-auto max-w-7xl px-4  sm:px-6 pt-24 pb-16  lg:px-8 ">
            <div className="sm:text-center lg:text-left">
              <h1 className="anim-typewriter line-1 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-xl">
                <span className="block  xl:inline ">Hi, I am Dezső</span> <br />
                <span className="block text-indigo-600 xl:inline">
                  Web Developer
                </span>
              </h1>
              <p className="text_anim-top mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I design and code beautifully simple things, and I love what I
                do. I like to code things from scratch, and enjoy bringing ideas
                to life in the browser.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/about">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      About
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/projects">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Projects
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
        <div className=" px-4 lg:h-5/6 lg:w-5/6 ">
          <Image
            width={700}
            height={800}
            alt="HeroImage"
            src="/images/profile.png"
            layout="responsive"
            objectFit="cover"
            priority={true}
            className=" object-top rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
