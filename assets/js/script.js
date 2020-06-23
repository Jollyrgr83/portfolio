$(() => {
  // stores associated project information
  const portfolio = {
    0: {
      title: "Skyvi3w (Project 1)",
      url: "https://jollyrgr83.github.io/Project-1/",
      git: "https://github.com/Jollyrgr83/Project-1.git",
      image: "./assets/images/skyvi3w.PNG",
      alt: "screenshot of skyvi3w home screen",
      text:
        "Skyvi3w is a search engine that delivers information about upcoming astral, earth, and weather events from NASA and OpenWeather APIs against the stunning visuals provided by NASA's Astronomy Picture of the Day.",
    },
    3: {
      title: "Weather Dashboard",
      url: "https://jollyrgr83.github.io/weather-dashboard/",
      git: "https://github.com/Jollyrgr83/weather-dashboard.git",
      image: "./assets/images/weather-dashboard.png",
      alt: "screenshot of weather dashboard home screen",
      text:
        "This is a weather dashboard project that was assigned as part of the University of Utah full stack coding bootcamp. It dynamically updates a weather display including images, temperature, humidity, uv index, windspeed, and a five day forecast using the openweathermap API.",
    },
    2: {
      title: "Quiz",
      url: "https://jollyrgr83.github.io/coding-quiz/",
      git: "https://github.com/Jollyrgr83/coding-quiz.git",
      image: "./assets/images/coding-quiz.png",
      alt: "screenshot of coding quiz home screen",
      text:
        "This is a 10-question quiz covering basic programming knowledge. It contains dynamic html updating and DOM manipulation, client storage, and a timer all using javascript.",
    },
    5: {
      title: "Burger Database",
      url: "https://guarded-journey-29239.herokuapp.com/",
      git: "https://github.com/Jollyrgr83/burger.git",
      image: "./assets/images/burger.png",
      alt: "screenshot of burger project home screen",
      text:
        "This is an app that allows users to keep track of the hamburgers that they would like to eat and update their status as they eat them. It uses express, handlebars, and mysql.",
    },
    6: {
      title: "Event Scoring Database",
      url: "https://protected-peak-05301.herokuapp.com/",
      git: "https://github.com/Jollyrgr83/rodeo.git",
      image: "./assets/images/event-scoring-database.png",
      alt: "screenshot of event scoring database project home screen",
      text:
        "This is an app that allows users to keep track of scores relating to a sporting event with multiple events and tiers of competitors. It is a work in progress.",
    },
    4: {
      title: "Day Planner",
      url: "https://jollyrgr83.github.io/day-planner/",
      git: "https://github.com/Jollyrgr83/day-planner.git",
      image: "./assets/images/day-planner.png",
      alt: "screenshot of day planner project home screen",
      text:
        "This is an app that allows users to keep track of their daily schedule.",
    },
    1: {
      title: "Story Lines (Project 2)",
      url: "https://peaceful-scrubland-88128.herokuapp.com/",
      git: "https://github.com/Jollyrgr83/project-2.git",
      image: "./assets/images/story-lines.png",
      alt: "screenshot of story lines home screen",
      text:
        "This is an agile project management app designed to track several users and projects with a focus on simplicity and ease of use.",
    },
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
