$(() => {
  // stores associated project information
  const portfolio = {
    0: {
      title: "Bier Run",
      url: "https://bier-run.herokuapp.com/",
      git: "https://github.com/Jollyrgr83/bierRun",
      image: "./assets/images/project-bier-run.png",
      alt: "screenshot of Bier run home screen",
      text:
        "Bier Run was developed as the final project of the UofU Coding Bootcamp. It is a MERN stack allowing customers to place beer delivery orders and vendors to fulfill them. Bier Run utilizes Auth0 for registration and login.",
    },
    1: {
      title: "Rodeo Scoring",
      url: "https://rodeo-scoring-version-2.herokuapp.com/",
      git: "https://github.com/Jollyrgr83/rodeo-scoring-version-2",
      image: "./assets/images/project-rodeo-scoring-version-2.png",
      alt: "screenshot of Rodeo Scoring home screen",
      text:
        "Rodeo Scoring was developed to assist a public power utility (or similar entity) in facilitating an annual lineworkers rodeo (or similar competition). Rodeo Scoring uses jQuery, Bootstrap, MySQL, Node.js, and Express to allow users to enter competitor, event, competition tier, and score info and generate necessary reports for standings and results.",
    },
    2: {
      title: "Story Lines",
      url: "https://uofu-project-2-story-lines.herokuapp.com/",
      git: "https://github.com/Jollyrgr83/uofu-project-story-lines",
      image: "./assets/images/project-story-lines.png",
      alt: "screenshot of Story Lines home screen",
      text: "Story Lines was developed as the second project of the UofU Coding Bootcamp. Story Lines uses Bootstrap, MySQL, Sequelize, Node.js, Express, and Passport to provide users with an agile streamlined project management experience."
    },
    3: {
      title: "Google Books Companion",
      url: "https://uofu-homework-books.herokuapp.com/",
      git: "https://github.com/Jollyrgr83/uofu-hw-book-search",
      image: "./assets/images/project-books.png",
      alt: "screenshot of Google Books Companion home screen",
      text: "Google Books Companion was developed as a companion to the Google Books API. It is a MERN stack allowing users to find and save books of interest to them using Bootstrap, Mongoose ORM, MongoDB, Node.js, and Express."
    },
    4: {
      title: "Employee Directory",
      url: "https://jollyrgr83.github.io/uofu-hw-directory/",
      git: "https://github.com/Jollyrgr83/uofu-hw-directory",
      image: "./assets/images/project-directory.png",
      alt: "screenshot of Directory home screen",
      text: "Employee Directory was developed as a simple and easy-to-use interface to access employee information from a directory. It uses Bootstrap and React to allow users to view, sort, and filter employee information by a number of fields. It uses the Random User API to simulate an employee database."
    },
    5: {
      title: "Budget Tracker",
      url: "https://uofu-homework-budget.herokuapp.com/",
      git: "https://github.com/Jollyrgr83/uofu-hw-budget-tracker",
      image: "./assets/images/project-budget.png",
      alt: "screenshot of Budget Tracker home screen",
      text: "Budget Tracker was developed as a simple and easy-to-use method to allow users to keep a record of their credits and debits to an account. It uses Bootstrap, Mongoose ORM, MongoDB, Node.js, and Express as well as utlizing indexedDB to provide a cohesive off-line experience."
    },
    6: {
      title: "Fitness Tracker",
      url: "https://uofu-homework-fitness.herokuapp.com/",
      git: "https://github.com/Jollyrgr83/uofu-hw-fitness-tracker",
      image: "./assets/images/project-fitness.png",
      alt: "screenshot of Fitness Tracker home screen",
      text: "Fitness Tracker was developed as a simple and easy-to-use method to allow users to keep a record of their recent workouts and associated statistics. It uses Bootstrap, Mongoose ORM, MongoDB, Node.js, and Express."
    },
    7: {
      title: "Burger Database",
      url: "https://uofu-homework-burger.herokuapp.com/",
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
  const keys = Object.keys(portfolio);
  // updates page elements
  const classUpdate = (s) => {
    $("#about").attr("class", s[0]);
    $("#projects").attr("class", s[1]);
    $("#contact").attr("class", s[2]);
  };
  // change "page" that is displayed using show and hide classes
  const display = (page) => {
    switch (page) {
      case "about":
        classUpdate(["show", "hide", "hide"]);
        break;
      case "projects":
        classUpdate(["hide", "show", "hide"]);
        break;
      case "contact":
        classUpdate(["hide", "hide", "show"]);
        break;
    }
  };
  // updates project display section
  const project = (num) => {
    $("#project-container").attr("class", "show");
    $("#project-image").attr("src", portfolio[num].image);
    $("#project-image").attr("alt", portfolio[num].alt);
    $("#project-live-link").attr("href", portfolio[num].url);
    $("#project-live-link").text(`${portfolio[num].title} live page`);
    $("#project-live-link").attr("target", "_blank");
    $("#project-repo-link").attr("href", portfolio[num].git);
    $("#project-repo-link").text(`${portfolio[num].title} repository`);
    $("#project-repo-link").attr("target", "_blank");
    $("#project-text").text(portfolio[num].text);
  };
  // html build library
  const h = (o) => {
    const e = $(`<${o.e}>`);
    if (o.i) {
      e.attr("id", o.i);
    }
    if (o.c) {
      e.attr("class", o.c);
    }
    if (o.tx) {
      e.text(o.tx);
    }
    if (o.v) {
      e.val(o.v);
    }
    return e;
  };
  // event listener for project selection menu
  $(document).on("change", "#project-select", () => {
    project(parseInt($("#project-select").val()));
  });
  // event listener for buttons
  $(document).on("click", ".button", (event) => {
    display($(event.target).attr("id").split("-")[0]);
  });
  // starting script
  display("about");
  // renders project selection options
  for (let i = 0; i < keys.length; i++) {
    const optionEl = h({
      e: "option",
      v: keys[i],
      tx: portfolio[keys[i]].title
    });
    $("#project-select").append(optionEl);
  }
  // renders initial project options
  project(0);
});
