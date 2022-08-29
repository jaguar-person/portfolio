import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Currently I work as a frontend content teacher at Digital House,
  the work consists of creating content for frontend specialization classes.
  Some themes of the contents were:
  React, Redux, TypeScript, Tests, GraphQL, Next.js, MUI, React Hook Form and styled-components.`,
  "Professor conteudista em Frontend",
  "Content teacher at Frontend",
  "Nov 2021 - Current"
);

hoverChangeExperience(
  ".blueprint",
  `I structured several internal systems comprising production
  workflow tracking, as well as design and develop custom REST
  APIs and Prisma schemas using Ruby on Rails. I resolved 400+ critical bugs in RoR project to improve
  performance and helped customers launch a seamless
  experience. Translating designs into high-quality code (Had the task of
  turning designs into quality code that makes applications work
  effectively with RoR, React.js, Angular.js, Next.js, Nuxt.js).
  Collaborating with team members to improve usability. Provided MVP versions of software using Figma, React, Typescript and Storybook.`,
  "Senior Full-Stack Developer",
  "iTBlueprint Solutions",
  "Apr 2020 - Sep 2021"
);

hoverChangeExperience(
  ".synditech",
  `I conducted over 100 successful testings to identify bugs that
  resulted in over 300 UI improvements. I was responsible for developing mobile responsive web
  applications using React.js, JavaScript/TypeScript, HTML5, CSS3. Refactored a frontend application by introducing Material-UI
  components and reengineering the complete architecture to
  make the code readable, scalable, and optimized for specific
  usage. Daily maintenance of code, debugging issues, and solving
  clients’ problems. Collaborated with the UX/UI design teams to improve the
  website and applications.`,
  "Junior Frontend Engineer",
  "Synditech Solutions",
  "Jan 2019 - Dec 2019"
);

hoverChangeExperience(
  ".contweb",
  `I did the internship at ContWeb, an accounting company.
  Where I first had experience with React.
  In addition to the frontend development, I created several components for the company's new platform.`,
  "Developer frontend e UI Designer",
  "ContWeb",
  "Jan 2017 - Nov 2018"
);

hoverChangeDescription(
  ".html",
  "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
);
hoverChangeDescription(
  ".css",
  "CSS describes how HTML elements are to be displayed on screen, paper and in other media."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, etc."
);
hoverChangeDescription(
  ".sass",
  "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets."
);
hoverChangeDescription(
  ".react",
  "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components."
);
hoverChangeDescription(
  ".next",
  "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites."
);
hoverChangeDescription(
  ".styled",
  "Styled-components is a popular library that is used to style React applications. It allows you to build custom components by writing actual CSS in your JavaScript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is an open-source utility-first CSS framework."
);
