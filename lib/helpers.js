const MY_PROJECTS = [
  {
    id: 1,
    slug: "todo-app",
    image: "todo-app.png",
    title: "todo-app",
    description:
      "This is a simple todo  app. I built the application using HTML CSS and JavaScript . For designing I used my custom CSS and I maked the app responsive.  ",
    codeLink: "https://github.com/gergelydez/todo-app",
    siteLink: "https://affectionate-albattani-d081c8.netlify.app/",
  },
  {
    id: 2,
    title: "Banking App",
    slug: "banking-app",
    image: "banking.png",
    description:
      "This is a simple banking app.I built the application using HTML CSS and JavaScript. For designing I used my custom CSS and I maked the app responsive.  ",
    codeLink: "https://github.com/gergelydez/banking-app",
    siteLink: "https://banking-app-dez.netlify.app/",
  },
  {
    id: 3,
    slug: "flowersy",
    image: "flowersy.png",
    title: "Flowersy",
    description:
      "This is a marketing page. I built the application using HTML CSS and JavaScript. For designing I used my custom CSS and I maked the app responsive.  ",
    codeLink: "https://github.com/gergelydez/flowersy",
    siteLink: "https://flowersy.netlify.app/",
  },
  {
    id: 4,
    slug: "expense-tracking-app",
    image: "expense-tracking-app.png",
    title: "Expense Tracking App",
    description:
      "This is an expense tracking app. I built the application using ReactJS. For designing I used my custom CSS and I maked the app responsive.  ",
    codeLink: "https://github.com/gergelydez/expense-tracker",
    siteLink: "https://expense-tracking-app-dez.netlify.app/",
  },
  {
    id: 5,
    slug: "weather-country-app",
    image: "weather-country-app.png",
    title: "Weather Country App",
    description:
      "This is a weather-country  app. I built the application using HTML CSS and JavaScript . For designing I used my custom CSS and I maked the app responsive.  ",
    codeLink: "https://github.com/gergelydez/weather-country-app",
    siteLink: "https://weather-country-app-dez.netlify.app/",
  },
  {
    id: 6,
    title: "BIO BLOG",
    slug: "bio-blog-app",
    image: "bio-blog-app.png",
    description:
      "This is a blog website I used NextJs to build this app. For designing I used my  custom CSS and I maked the app responsive. I used modern technics NextJs combinated with markdown. Markdown is an easy-to-use simplified markup language that is an alternative to using HTML.  ",
    codeLink: "https://github.com/gergelydez/bio-blog-app",
    siteLink: "https://bio-blog-app.vercel.app/",
  },
];

export function getAllProjects() {
  return MY_PROJECTS;
}
export function getProjectById(slug) {
  return MY_PROJECTS.find((project) => project.slug === slug);
}
