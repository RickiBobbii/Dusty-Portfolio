import React from "react";
import Project from "../components/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import image1 from "../assets/ChatSpace.png";
import image2 from "../assets/CatApp.png";
import image3 from "../assets/JATE-App.png";
import image4 from "../assets/TechBlog.png";
import image5 from "../assets/QuizApp.png";
import image6 from "../assets/WeatherApp.png";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "ChatSpace",
      description: "A social forum with live chat functionality.  Users can create an account, create posts, comment on posts, and chat with other users.",
      technologies:
        "HTML, CSS, JavaScript, Socket.io, Tailwind CSS, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Heroku, JawsDB",
      githubLink: "https://github.com/RickiBobbii/ChatSpace",
      appLink: "https://quiet-ocean-06513-0d1db6ff8a7d.herokuapp.com/login",
      image: image1,
    },
    {
      id: 2,
      name: "Cat Random Facts App",
      description:
        "Usefull facts about cats along with cute cat images. Generates random facts and images as well pertaining to the selected breed.",
      technologies:
        "HTML, CSS, JavaScript, Bulma CSS, Cat Facts API, Cat Images API",
      githubLink:
        "https://github.com/KaarageOnigiri/Cat-Images-and-Facts-Retriever",
      appLink:
        "https://rickibobbii.github.io/Cat-Facts-App/",
      image: image2,
    },
    {
      id: 3,
      name: "J.A.T.E Text Editor",
      description:
        "A text editor that is a single page application that uses PWA and IndexedDB to store and retrieve inputed text.  App can also be downloaded.",
      technologies:
        "JavaScript, IndexedDB, Webpack, Node.js, Express.js, Heroku",
      githubLink: "https://github.com/RickiBobbii/PWA-Text-Editor",
      appLink: "https://boiling-dawn-25219-c27d4b6fed52.herokuapp.com/",
      image: image3,
    },
    {
      id: 4,
      name: "Tech Blog",
      description: "A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.",
      technologies: "HTML, CSS, JavaScript, Node.js, Express.js, Express-Session, MySQL, Sequelize, Handlebars.js, Bcrypt, dotenv, Heroku",
      githubLink: "https://github.com/RickiBobbii/MVC-Blog-site",
      appLink: "https://arcane-hamlet-47926-17c19d5fa5ec.herokuapp.com/",
      image: image4,
    },
    {
      id: 5,
      name: "JavaScript Quiz",
      description: "A timed quiz app that tests your knowledge of JavaScript. The app stores your high score.",
      technologies: "HTML, CSS, JavaScript, Local Storage",
      githubLink: "https://github.com/RickiBobbii/JavaScript-Quiz",
      appLink: "https://rickibobbii.github.io/JavaScript-Quiz/",
      image: image5,
    },
    {
      id: 6,
      name: "5-Day Weather App",
      description: "A weather app that displays the current weather and 5-day forecast for a city.",
      technologies: "HTML, CSS, JavaScript, Weather API",
      githubLink: "https://github.com/RickiBobbii/Weather-App",
      appLink: "https://rickibobbii.github.io/Weather-App/",
      image: image6,
    },
  ];
  return (
    <div>
      <Project projects={projects} />
    </div>
  );
}
