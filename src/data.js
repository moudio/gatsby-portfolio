import appointcar from "./Images/appointment.jpg"
import hulu from "./Images/hulu_clone.jpg"
import covid from "./Images/covid_tracker.png"
import newsweek from "./Images/Newsweek.jpg"

const data = {
  featuredProjects: [
    {
      title: "Appointcar",
      description:
        "A car appointment app. You can create your account and book for your next favorite car",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Ruby on Rails"],
      slug: "appointcar",
      github: "https://github.com/MouhaDiouf/appointment",
      website: "https://appointcar.netlify.app/",
      image: appointcar,
    },

    {
      title: "Hulu Clone",
      description: "A Hulu clone",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      slug: "hulu",
      github: "https://github.com/MouhaDiouf/hulu_clone",
      website: "https://hulu-mo.web.app/",
      image: hulu,
    },
    {
      title: "Newsweek",
      description: "A Newsweek Clone",
      technologies: ["HTML", "CSS"],
      slug: "newsweek",
      github: "https://github.com/MouhaDiouf/newsweek_replica",
      website:
        "https://raw.githack.com/MouhaDiouf/newsweek_replica/development/index.html",
      image: newsweek,
    },
  ],

  otherProjects: [
    {
      title: "New York Times",
      description: "A New York Times Clone",
      technologies: ["HTML", "CSS"],
      slug: "nytimes",
      github: "https://github.com/MouhaDiouf/New_york_times",
      website:
        "https://raw.githack.com/MouhaDiouf/New_york_times/master/index.html",
    },
    {
      title: "Robinhood",
      description: "A Replica of the Robinhood trading app",
      technologies: ["HTML", "CSS", "React"],
      slug: "robinhood",
      github: "https://github.com/MouhaDiouf/robinhood",
      website: "https://robinhoodmo.netlify.app/",
    },
    {
      title: "Covid Tracker",
      description: "A covid-19 tracker app",
      technologies: ["HTML", "CSS", "React.js"],
      slug: "nytimes",
      github: "https://github.com/MouhaDiouf/covid_tracker",
      website: "https://covid-tracker-mo.netlify.app/",
    },
    {
      title: "Asteroids",
      description:
        "This app communicates with the Nasa API to display asteroids based on their IDs or date. It uses React on the front-end and Firebase on the backend.",
      technologies: ["HTML", "CSS", "React", "Redux"],
      slug: "asteroids",
      github: "https://github.com/MouhaDiouf/asteroids",
      website: "https://asteroids-mo.netlify.app/",
    },
    {
      title: "Comfy House",
      description:
        "An e-commerce interface where the user can choose beds to add to its cart or remove them.",
      technologies: ["HTML", "CSS", "React.js"],
      slug: "nytimes",
      github: "https://github.com/MouhaDiouf/comfy-house",
      website:
        "https://raw.githack.com/MouhaDiouf/comfy-house/develop/index.html",
    },
    {
      title: "Cocktails",
      description:
        "The project is single page react app based on a catalog of cocktails. It's a browsable list of cocktails you can research and access the details for each of them.",
      technologies: ["HTML", "CSS", "React", "Cocktailsdb API"],
      slug: "coktails",
      github: "https://github.com/MouhaDiouf/cocktails",
      website: "https://mo-cocktails.netlify.app/",
    },
  ],
}

export default data
