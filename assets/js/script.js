// stores associated project information
var portfolio = {
    "projects" : {
        0 : {
            "title" : "skyvi3w",
            "url" : "https://jollyrgr83.github.io/Project-1/",
            "git" : "https://github.com/Jollyrgr83/Project-1.git",
            "image" : "./assets/images/skyvi3w.PNG",
            "alt" : "screenshot of skyvi3w home screen",
            "text" : "Skyvi3w is a search engine that delivers information about upcoming astral, earth, and weather events from NASA and OpenWeather APIs against the stunning visuals provided by NASA's Astronomy Picture of the Day."
        },
        1 : {
            "title" : "weather",
            "url" : "https://jollyrgr83.github.io/weather-dashboard/",
            "git" : "https://github.com/Jollyrgr83/weather-dashboard.git",
            "image" : "./assets/images/weather-dashboard.png",
            "alt" : "screenshot of weather dashboard home screen",
            "text" : "This is a weather dashboard project that was assigned as part of the University of Utah full stack coding bootcamp. It dynamically updates a weather display including images, temperature, humidity, uv index, windspeed, and a five day forecast using the openweathermap API."
        },
        2 : {
            "title" : "quiz",
            "url" : "https://jollyrgr83.github.io/coding-quiz/",
            "git" : "https://github.com/Jollyrgr83/coding-quiz.git",
            "image" : "./assets/images/coding-quiz.png",
            "alt" : "screenshot of coding quiz home screen",
            "text" : "This is a 10-question quiz covering basic programming knowledge. It contains dynamic html updating and DOM manipulation, client storage, and a timer all using javascript."
        },
        3 : {
            "title" : "burger",
            "url" : "https://guarded-journey-29239.herokuapp.com/",
            "git" : "https://github.com/Jollyrgr83/burger.git",
            "image" : "./assets/images/burger.png",
            "alt" : "screenshot of burger project home screen",
            "text" : "This is an app that allows users to keep track of the hamburgers that they would like to eat and update their status as they eat them. It uses express, handlebars, and mysql."
        },
        4 : {
            "title" : "event scoring database",
            "url" : "https://jollyrgr83.github.io/event-scoring-database/",
            "git" : "https://github.com/Jollyrgr83/event-scoring-database.git",
            "image" : "./assets/images/event-scoring-database.png",
            "alt" : "screenshot of event scoring database project home screen",
            "text" : "This is an app that allows users to keep track of scores relating to a sporting event with multiple events and tiers of competitors. It is a work in progress."
        },
        5 : {
            "title" : "day planner",
            "url" : "https://jollyrgr83.github.io/day-planner/",
            "git" : "https://github.com/Jollyrgr83/day-planner.git",
            "image" : "./assets/images/day-planner.png",
            "alt" : "screenshot of day planner project home screen",
            "text" : "This is an app that allows users to keep track of their daily schedule."
        }
 
    },
    "placeholder" : {
        "title" : "coming soon",
        "url" : "https://jollyrgr83.github.io/Project-1/",
        "git" : "https://Jollyrgr83/Project-1.git",
        "image" : "./assets/images/placeholder-001.jpg",
        "alt" : "an image of mountains",
        "text" : "coming soon"
    }
};
// change "page" that is displayed using show and hide classes
function display(page) {
    var className = "container ";
    var show = className + "show";
    var hide = className + "hide";
    switch (page) {
        case "about":
            $("#about").attr("class", show);
            $("#projects").attr("class", hide);
            $("#contact").attr("class", hide);
            break;
        case "projects":
            $("#about").attr("class", hide);
            $("#projects").attr("class", show);
            $("#contact").attr("class", hide);
            break;
        case "contact":
            $("#about").attr("class", hide);
            $("#projects").attr("class", hide);
            $("#contact").attr("class", show);
            break;
        case "education":
            $("#about").attr("class", show);
            $("#projects").attr("class", hide);
            $("#contact").attr("class", hide);
            $("#educationContainer").attr("class", show);
            $("#linksContainer").attr("class", hide);
            break;
        case "links":
            $("#about").attr("class", show);
            $("#projects").attr("class", hide);
            $("#contact").attr("class", hide);
            $("#educationContainer").attr("class", hide);
            $("#linksContainer").attr("class", show);
            break;
        case "hide":
            $("#about").attr("class", hide);
            $("#projects").attr("class", hide);
            $("#contact").attr("class", hide);
            break;
    }
}
// renders the project links and associated elements
function renderProject(indexNumber) {
    // clear existing elements from project container
    $("#projectContainer").empty();
    // create and update html elements
    var imgContainerEl = $("<div>");
    imgContainerEl.attr("class", "img-container");
    var imgEl = $("<img>");
    imgEl.attr("class", "project-img mx-auto");
    imgEl.attr("src", portfolio.projects[indexNumber].image);
    imgEl.attr("alt", portfolio.projects[indexNumber].alt);
    var linkContainerEl = $("<div>");
    linkContainerEl.attr("class", "link-container mx-auto");
    var linkEl = $("<a>");
    linkEl.attr("class", "project-link");
    linkEl.attr("href", portfolio.projects[indexNumber].url);
    linkEl.attr("target", "_blank");
    linkEl.text(portfolio.projects[indexNumber].title + " live page");
    var repoContainerEl = $("<div>");
    repoContainerEl.attr("class", "link-container mx-auto");
    var repoEl = $("<a>");
    repoEl.attr("class", "project-link");
    repoEl.attr("href", portfolio.projects[indexNumber].git);
    repoEl.attr("target", "_blank");
    repoEl.text(portfolio.projects[indexNumber].title + " repository");
    var textContainerEl = $("<div>");
    textContainerEl.attr("class", "project-text-container mx-auto")
    var textEl = $("<p>");
    textEl.attr("class", "project-text");
    textEl.text(portfolio.projects[indexNumber].text);
    // append html elements
    imgContainerEl.append(imgEl);
    linkContainerEl.append(linkEl);
    repoContainerEl.append(repoEl);
    textContainerEl.append(textEl);
    // append to page element
    $("#projectContainer").append(imgContainerEl);
    $("#projectContainer").append(linkContainerEl);
    $("#projectContainer").append(repoContainerEl);
    $("#projectContainer").append(textContainerEl);
}
// event listener for page buttons
$(document).on("click", ".bio-btn", function(event) {
    var targetID = $(event.target).attr("id");
    switch (targetID) {
        case "aboutBtn":
            display("about");
            break;
        case "projectsBtn":
            display("projects");
            break;
        case "contactBtn":
            display("contact");
            break;
        case "educationBtn":
            display("education");
            break;
        case "linksBtn":
            display("links");
            break;
    }
});
// event listener for project buttons
$(document).on("click", ".project-btn", function(event) {
    var indexNumber = $(event.target).attr("data-index");
    renderProject(indexNumber);
});
// starting script
display("hide");