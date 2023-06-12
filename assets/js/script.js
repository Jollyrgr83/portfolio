class Portfolio {
  professional;
  projects;
  keys;
  containerEls;
  projectEls;
  professionalEls;
  buttonEls;
  selectEls;
  pageState;
  constructor() {
    this.setContent();
    this.getEls();
    this.setEvents();
    this.pageState = ["show", "hide", "hide"];
    this.renderMenus();
    this.displayProfessional(0);
    this.displayProject(0);
    this.displayPage("about");
  }
  setContent() {
    this.professional = {
      0: {
        title: "Gold Rush Expeditions, Inc®",
        url: "https://goldrushexpeditions.com",
        git: "false",
        image: "./assets/images/professional-gre.png",
        alt: "screenshot of Gold Rush Expeditions, Inc® home screen",
        text:
            "GRE text",
      },
      1: {
        title: "National Bureau of Mines®",
        url: "https://nationalbureauofmines.com",
        git: "false",
        image: "./assets/images/professional-nbom.png",
        alt: "screenshot of National Bureau of Mines® home screen",
        text:
            "NBOM text",
      },
      2: {
        title: "Stay Out Stay Alive®",
        url: "https://stayoutstayalive.com",
        git: "false",
        image: "./assets/images/professional-sosa.png",
        alt: "screenshot of Stay Out Stay Alive® home screen",
        text:
            "SOSA text",
      },
    };
    this.projects = {
      0: {
        title: "Rodeo Scoring",
        url: "false",
        git: "https://github.com/Jollyrgr83/rodeo-scoring-version-1",
        image: "./assets/images/project-rodeo-scoring-version-1.png",
        alt: "screenshot of Rodeo Scoring home screen",
        text:
            "Rodeo Scoring was developed to assist a public power utility (or similar entity) in facilitating an annual lineworkers rodeo (or similar competition). Rodeo Scoring uses jQuery, Bootstrap, MySQL, Node.js, and Express to allow users to enter competitor, event, competition tier, and score info and generate necessary reports for standings and results.",
      },
      1: {
        title: "Bier Run",
        url: "false",
        git: "https://github.com/Jollyrgr83/bierRun",
        image: "./assets/images/project-bier-run.png",
        alt: "screenshot of Bier run home screen",
        text:
            "Bier Run was developed as the final project of the UofU Coding Bootcamp. It is a MERN stack allowing customers to place beer delivery orders and vendors to fulfill them. Bier Run utilizes Auth0 for registration and login.",
      },
      2: {
        title: "Story Lines",
        url: "false",
        git: "https://github.com/Jollyrgr83/uofu-project-story-lines",
        image: "./assets/images/project-story-lines.png",
        alt: "screenshot of Story Lines home screen",
        text: "Story Lines was developed as the second project of the UofU Coding Bootcamp. Story Lines uses Bootstrap, MySQL, Sequelize, Node.js, Express, and Passport to provide users with an agile streamlined project management experience."
      },
      3: {
        title: "Google Books Companion",
        url: "false",
        git: "https://github.com/Jollyrgr83/uofu-hw-book-search",
        image: "./assets/images/project-books.png",
        alt: "screenshot of Google Books Companion home screen",
        text: "Google Books Companion was developed as a companion to the Google Books API. It is a MERN stack allowing users to find and save books of interest to them using Bootstrap, Mongoose ORM, MongoDB, Node.js, and Express."
      },
      4: {
        title: "Employee Directory",
        url: "false",
        git: "https://github.com/Jollyrgr83/uofu-hw-directory",
        image: "./assets/images/project-directory.png",
        alt: "screenshot of Directory home screen",
        text: "Employee Directory was developed as a simple and easy-to-use interface to access employee information from a directory. It uses Bootstrap and React to allow users to view, sort, and filter employee information by a number of fields. It uses the Random User API to simulate an employee database."
      },
      5: {
        title: "Budget Tracker",
        url: "false",
        git: "https://github.com/Jollyrgr83/uofu-hw-budget-tracker",
        image: "./assets/images/project-budget.png",
        alt: "screenshot of Budget Tracker home screen",
        text: "Budget Tracker was developed as a simple and easy-to-use method to allow users to keep a record of their credits and debits to an account. It uses Bootstrap, Mongoose ORM, MongoDB, Node.js, and Express as well as utlizing indexedDB to provide a cohesive off-line experience."
      },
      6: {
        title: "Fitness Tracker",
        url: "false",
        git: "https://github.com/Jollyrgr83/uofu-hw-fitness-tracker",
        image: "./assets/images/project-fitness.png",
        alt: "screenshot of Fitness Tracker home screen",
        text: "Fitness Tracker was developed as a simple and easy-to-use method to allow users to keep a record of their recent workouts and associated statistics. It uses Bootstrap, Mongoose ORM, MongoDB, Node.js, and Express."
      },
      7: {
        title: "Burger Database",
        url: "false",
        git: "https://github.com/Jollyrgr83/uofu-hw-burger-database",
        image: "./assets/images/project-burger.png",
        alt: "screenshot of Burger Database home screen",
        text: "Burger Database was developed as a simple database to allow users to keep a record of burgers that they would like to eat and their status. It uses Bootstrap, MySQL, Handlebars, Node.js, and Express."
      },
      8: {
        title: "This Portfolio",
        url: "https://jollyrgr83.github.io/portfolio/",
        git: "https://github.com/Jollyrgr83/portfolio",
        image: "./assets/images/portfolio.png",
        alt: "screenshot of Portfolio home screen",
        text: "Use the links to view the codebase for this portfolio."
      }
    };
    this.keys = {
      "projects": Object.keys(this.projects),
      "professional": Object.keys(this.professional)
    };
  }
  getEls() {
    this.containerEls = {
      "about": document.getElementById("about"),
      "projects": document.getElementById("projects"),
      "contact": document.getElementById("contact")
    };
    this.projectEls = {
      "container": document.getElementById("project-container"),
      "image": document.getElementById("project-image"),
      "live_link_container": document.getElementById("project-live-link-container"),
      "live_link": document.getElementById("project-live-link"),
      "repo_link": document.getElementById("project-repo-link"),
      "text": document.getElementById("project-text")
    };
    this.professionalEls = {
      "container": document.getElementById("professional-container"),
      "image": document.getElementById("professional-image"),
      "live_link_container": document.getElementById("professional-live-link-container"),
      "live_link": document.getElementById("professional-live-link"),
      "repo_link_container": document.getElementById("professional-repo-link-container"),
      "repo_link": document.getElementById("professional-repo-link"),
      "text": document.getElementById("professional-text")
    };
    this.buttonEls = {
      "about": document.getElementById("about-btn"),
      "projects": document.getElementById("projects-btn"),
      "contact": document.getElementById("contact-btn"),
      "form": document.getElementById("form-btn")
    };
    this.selectEls = {
      "project": document.getElementById("project-select"),
      "professional": document.getElementById("professional-select")
    };
  }
  setEvents() {
    this.selectEls.project.addEventListener("change", () => {
      this.displayProject(parseInt(this.selectEls.project.value));
    });
    this.selectEls.professional.addEventListener("change", () => {
      this.displayProfessional(parseInt(this.selectEls.professional.value));
    })
    this.buttonEls.about.addEventListener("click", this.nav.bind(this));
    this.buttonEls.projects.addEventListener("click", this.nav.bind(this));
    this.buttonEls.contact.addEventListener("click", this.nav.bind(this));
  }
  nav(e) {
    const page = e.target.getAttribute("id").split("-")[0];
    this.displayPage(page);
  }
  classUpdate() {
    this.containerEls.about.setAttribute("class", this.pageState[0]);
    this.containerEls.projects.setAttribute("class", this.pageState[1]);
    this.containerEls.contact.setAttribute("class", this.pageState[2]);
  }
  displayPage(p) {
    switch (p) {
      case "projects":
        this.pageState = ["hide", "show", "hide"];
        break;
      case "contact":
        this.pageState = ["hide", "hide", "show"];
        break;
      case "about":
      default:
        this.pageState = ["show", "hide", "hide"];
        break;
    }
    this.classUpdate();
  }
  displayProject(i) {
    this.projectEls.container.setAttribute("class", "show");
    this.projectEls.image.setAttribute("src", this.projects[i].image);
    this.projectEls.image.setAttribute("alt", this.projects[i].alt);
    if (this.projects[i].url === "false") {
      this.projectEls.live_link_container.setAttribute("style", "display: none;");
    } else {
      this.projectEls.live_link_container.setAttribute("style", "display: block;");
      this.projectEls.live_link.setAttribute("href", this.projects[i].url);
      this.projectEls.live_link.setAttribute("target", "_blank");
      this.projectEls.live_link.innerText = this.projects[i].title + " live page";
    }
    this.projectEls.repo_link.setAttribute("href", this.projects[i].git);
    this.projectEls.repo_link.setAttribute("target", "_blank");
    this.projectEls.repo_link.innerText = this.projects[i].title + " repository";
    this.projectEls.text.innerText = this.projects[i].text;
  }
  displayProfessional(i) {
    this.professionalEls.container.setAttribute("class", "show");
    this.professionalEls.image.setAttribute("src", this.professional[i].image);
    this.professionalEls.image.setAttribute("alt", this.professional[i].alt);
    if (this.professional[i].url === "false") {
      this.professionalEls.live_link_container.setAttribute("style", "display: none;");
    } else {
      this.professionalEls.live_link_container.setAttribute("style", "display: block;");
      this.professionalEls.live_link.setAttribute("href", this.professional[i].url);
      this.professionalEls.live_link.setAttribute("target", "_blank");
      this.professionalEls.live_link.innerText = this.professional[i].title + " live page";
    }
    if (this.professional[i].git === "false") {
      this.professionalEls.repo_link_container.setAttribute("style", "display: none;");
    } else {
      this.professionalEls.repo_link_container.setAttribute("style", "display: block;");
      this.professionalEls.repo_link.setAttribute("href", this.professional[i].git);
      this.professionalEls.repo_link.setAttribute("target", "_blank");
      this.professionalEls.repo_link.innerText = this.professional[i].title + " repository";
    }
    this.professionalEls.text.innerText = this.professional[i].text;
  }
  renderMenus() {
    this.keys.projects.forEach(k => {
      const el = document.createElement("option");
      el.value = k;
      el.innerText = this.projects[k].title;
      this.selectEls.project.appendChild(el);
    });
    this.keys.professional.forEach(k => {
      const el = document.createElement("option");
      el.value = k;
      el.innerText = this.professional[k].title;
      this.selectEls.professional.appendChild(el);
    });
  }
}
const P = new Portfolio();