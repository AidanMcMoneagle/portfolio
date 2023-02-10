const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://github.com/AidanMcMoneagle",
  title: "AM.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Aidan",
  role: "Full Stack Engineer",
  description: [
    "I am a First-Class Engineering Masters Graduate from the University of Nottingham looking for my first role as a Software Engineer. After graduating in 2020, I spent 2 years as a Civil Engineer on a major UK infrastructure project. During this time, I worked across multiple teams, dealt with complex problems and worked collaboratively with others to create solutions.",
    "I decided to leave civil engineering, aspiring to work in an industry which was fast paced, dynamic and innovative. In February 2022 whilst working full time I spent evenings and weekends learning how to code. Since then have built my skillset from the ground up and am now confident in developing full-stack applications.",
    "I am passionate about building tech-enabled solutions to solve business problems and I hope the selection of projects below illustrate my technical ability.",
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/aidan-mcmoneagle/",
    github: "https://github.com/AidanMcMoneagle",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "My Weights Tracker",
    description: [
      "Full-stack, fully responsive single-page application allowing users to create, view and track progress of gym workouts.",
      "Implements JWT user authentication and uses the recharts library to produce graphs visualising workout progress.",
    ],

    stack: ["JavaScript", "React", "Node", "Express", "MongoDB"],
    image:
      "https://user-images.githubusercontent.com/99369057/214873732-718e3ce4-af4c-4232-8116-3d67c41531bb.png",
    sourceCode:
      "https://github.com/AidanMcMoneagle/my-weights-tracker-frontend",
    livePreview: "https://myweightstracker.web.app/",
  },

  {
    name: "Cocktails DB",
    description: [
      "Front-end project allowing users to search for cocktail recipes.",
      "Fetches cocktail data from an external API based on user input.",
    ],
    stack: ["JavaScript", "React"],
    image:
      "https://user-images.githubusercontent.com/99369057/217780836-11d4eae4-8e2e-41e8-a176-dbd013aadcf2.png",
    sourceCode: "https://github.com/AidanMcMoneagle/cocktailDB",
    livePreview: "https://aidancocktaildb.web.app/",
  },

  {
    name: "Places",
    description: [
      "Full-stack application allowing users to upload details of their favourite destinations.",
      "Utilises the Google Geocoding API and cloud image upload/storage.",
      "Client side routing with React Router.",
    ],
    stack: ["JavaScript", "React", "Node", "Express", "MongoDB"],
    image:
      "https://user-images.githubusercontent.com/99369057/217676492-606890a8-0849-4b21-8e8a-f279f5580159.png",
    sourceCode: "https://github.com/AidanMcMoneagle/mern-course-frontend",
    livePreview: "https://mern-course-app-frontend.web.app/",
  },
  {
    name: "YelpCamp",
    description: [
      "Full-stack, multi-page application allowing users to create and review campgrounds.",
      "Implemented user authenitcation using Passport.js.",
      "Utilised MAPBOX API to render an interactive dot map.",
    ],
    stack: ["JavaScript", "EJS", "Bootstrap", "Node", "Express", "MongoDB"],
    image:
      "https://user-images.githubusercontent.com/99369057/217675133-ee6ad622-45a8-499e-b35e-59e07131a862.png",
    sourceCode: "https://github.com/AidanMcMoneagle/YelpCamp",
    livePreview: "https://yelpcamp-course-app.herokuapp.com/",
  },

  {
    name: "Shopping Cart",
    description: [
      "Front-end TypeScript shopping cart.",
      "Used to learn the fundamentals of TypeScript with React.",
    ],
    stack: ["TypeScript", "React"],
    image:
      "https://user-images.githubusercontent.com/99369057/217677670-0a895257-339b-4d4b-8e74-afbdb57edeea.png",
    sourceCode: "https://github.com/AidanMcMoneagle/shoppingCart",
    livePreview: "https://ts-shoppingcart.web.app/",
  },
  {
    name: "Mapty",
    description: [
      "Front-end application allowing users to pinpoint workout locations on a map and enter metrics.",
      "Used browser local storage to store user input.",
      "Built using Vanilla JS and developed using OOP principles.",
    ],
    stack: ["JavaScript"],
    image:
      "https://user-images.githubusercontent.com/99369057/217674920-a4a4d4dd-590e-4033-a0dd-85f744207b85.png",
    sourceCode: "https://github.com/AidanMcMoneagle/mapty-vanillaJS",
    livePreview: "",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "JavaScript",
  "TypeScript",
  "React",
  "Node",
  "Express",
  "MongoDB",
  "Mongoose",
  "Git",
  "GitHub",
  "HTML",
  "EJS",
  "CSS",
  "Bootstrap",
  "Heroku",
  "Firebase",
];

const contact = {
  email: "aidan.mcmoneagle@gmail.com",
};

export { header, about, projects, skills, contact };
