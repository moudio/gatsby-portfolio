import appointcar from "./Images/appointment.jpg"
import hulu from "./Images/hulu_clone.jpg"
import covid from "./Images/covid_tracker.png"

const data = {
  featuredProjects: [
    {
      title: "Appointcar",
      description:
        "A car appointment app. You can create your account and book for your next favorite car",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Redux"],
      slug: "appointcar",
      github: "https://github.com/MouhaDiouf/appointment",
      website: "https://appointcar.netlify.app/",
      image: appointcar,
    },
    {
      title: "New York Times",
      description: "A New York Times Clone",
      technologies: ["HTML", "CSS"],
      slug: "nytimes",
      github: "https://github.com/MouhaDiouf/New_york_times",
      website:
        "https://raw.githack.com/MouhaDiouf/New_york_times/master/index.html",
      image: covid,
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
  ],
}

export default data
