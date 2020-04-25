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
        }
        // 1 : {
        //     "title" : "game",
        //     "url" : "https://jollyrgr83.github.io/game/",
        //     "git" : "https://github.com/Jollyrgr83/game.git",
        //     "image" : "./assets/images/game.png",
        //     "alt" : "screenshot of game home screen",
        //     "text" : "This is the beginning of a war-based role playing game. It contains dynamic html updating and DOM manipulation using javascript. It is a work in progress."
        // },
        // 2 : {
        //     "title" : "password generator",
        //     "url" : "https://jollyrgr83.github.io/password-generator/",
        //     "git" : "https://github.com/Jollyrgr83/password-generator.git",
        //     "image" : "./assets/images/password-generator.png",
        //     "alt" : "screenshot of password generator home screen",
        //     "text" : "This is a password generator that allows you to select criteria and randomly generate a password meeting those criteria. Specifically, you can select a password from 8 to 128 (inclusive) characters consisting of lowercase, uppercase, numeric, and/or special characters."
        // },
        // 3 : {
        //     "title" : "password vault",
        //     "url" : "https://jollyrgr83.github.io/password-vault/",
        //     "git" : "https://github.com/Jollyrgr83/password-vault.git",
        //     "image" : "./assets/images/password-vault.png",
        //     "alt" : "screenshot of password vault home screen",
        //     "text" : "This is a quick project that is in its beginning phases. It is intended to be a mobile site that stores and displays login information for various websites."
        // },
        // 4 : {
        //     "title" : "event scoring database",
        //     "url" : "https://jollyrgr83.github.io/event-scoring-database/",
        //     "git" : "https://github.com/Jollyrgr83/event-scoring-database.git",
        //     "image" : "./assets/images/event-scoring-database.png",
        //     "alt" : "screenshot of event scoring database home screen",
        //     "text" : "This is the beginning of a larger project that I hope to have completed later this year. A public power utility in the southeast organizes a lineworkers rodeo event every year that consists of two tiers of competitors, each completing five events that receive an associated score and time. Calculating and reporting the overall scores has historically been a challenge due to the amount and type of data and the need for tie-breaking. At completion, this project will record, analyze, and display data as well as generate the necessary reports for this event."
        // },
        // 5 : {
        //     "title" : "day planner",
        //     "url" : "https://jollyrgr83.github.io/day-planner/",
        //     "git" : "https://github.com/Jollyrgr83/day-planner.git",
        //     "image" : "./assets/images/day-planner.png",
        //     "alt" : "screenshot of day planner home screen",
        //     "text" : "This is a day planner project that was assigned as part of the University of Utah full stack coding bootcamp. It dynamically updates formatting based on the current hour and allows users to input tasks for a workday."
        // },
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