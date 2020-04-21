var portfolio = {
    "projects" : {
        0 : {
            "title" : "coding quiz",
            "url" : "https://jollyrgr83.github.io/coding-quiz/",
            "image" : "./assets/images/coding-quiz.png",
            "alt" : "screenshot of coding quiz home screen",
            "text" : "This is a 10-question quiz covering basic programming knowledge. It contains dynamic html updating and DOM manipulation, client storage, and a timer all using javascript."
        },
        1 : {
            "title" : "game",
            "url" : "https://jollyrgr83.github.io/game/",
            "image" : "./assets/images/game.png",
            "alt" : "screenshot of game home screen",
            "text" : "This is the beginning of a war-based role playing game. It contains dynamic html updating and DOM manipulation using javascript. It is a work in progress."
        },
        2 : {
            "title" : "password generator",
            "url" : "https://jollyrgr83.github.io/password-generator/",
            "image" : "./assets/images/password-generator.png",
            "alt" : "screenshot of password generator home screen",
            "text" : "This is a password generator that allows you to select criteria and randomly generate a password meeting those criteria. Specifically, you can select a password from 8 to 128 (inclusive) characters consisting of lowercase, uppercase, numeric, and/or special characters."
        },
        3 : {
            "title" : "password vault",
            "url" : "https://jollyrgr83.github.io/password-vault/",
            "image" : "./assets/images/password-vault.png",
            "alt" : "screenshot of password vault home screen",
            "text" : "This is a quick project that is in its beginning phases. It is intended to be a mobile site that stores and displays login information for various websites."
        },
        4 : {
            "title" : "event scoring database",
            "url" : "https://jollyrgr83.github.io/event-scoring-database/",
            "image" : "./assets/images/event-scoring-database.png",
            "alt" : "screenshot of event scoring database home screen",
            "text" : "This is the beginning of a larger project that I hope to have completed later this year. A public power utility in the southeast organizes a lineworkers rodeo event every year that consists of two tiers of competitors, each completing five events that receive an associated score and time. Calculating and reporting the overall scores has historically been a challenge due to the amount and type of data and the need for tie-breaking. At completion, this project will record, analyze, and display data as well as generate the necessary reports for this event."
        },
        5 : {
            "title" : "day planner",
            "url" : "https://jollyrgr83.github.io/day-planner/",
            "image" : "./assets/images/day-planner.png",
            "alt" : "screenshot of day planner home screen",
            "text" : "This is a day planner project that was assigned as part of the University of Utah full stack coding bootcamp. It dynamically updates formatting based on the current hour and allows users to input tasks for a workday."
        },
        6 : {
            "title" : "Skyvi3w",
            "url" : "https://jollyrgr83.github.io/Project-1/",
            "image" : "./assets/images/skyvi3w.PNG",
            "alt" : "screenshot of skyvi3w home screen",
            "text" : "Skyvi3w is a search engine that delivers information about upcoming astral, earth, and weather events from NASA and OpenWeather APIs against the stunning visuals provided by NASA's Astronomy Picture of the Day."
        },
        7 : {
            "title" : "weather dashboard",
            "url" : "https://jollyrgr83.github.io/weather-dashboard/",
            "image" : "./assets/images/weather-dashboard.png",
            "alt" : "screenshot of weather dashboard home screen",
            "text" : "This is a weather dashboard project that was assigned as part of the University of Utah full stack coding bootcamp. It dynamically updates a weather display including images, temperature, humidity, uv index, windspeed, and a five day forecast using the openweathermap API."
        },
    },
    "placeholder" : {
        "title" : "coming soon",
        "url" : "https://jollyrgr83.github.io/Project-1/",
        "image" : "./assets/images/placeholder-001.jpg",
        "alt" : "an image of mountains",
        "text" : "coming soon"
    }
};
// change "page" that is displayed using show and hide classes
function display(page) {
    var className = "container main-container p-3 m-3 mx-auto ";
    var show = className + "show";
    var hide = className + "hide";
    switch (page) {
        case "about-me":
            $("#aboutMeContainer").attr("class", show);
            $("#portfolioContainer").attr("class", hide);
            $("#contactMeContainer").attr("class", hide);
            break;
        case "portfolio":
            $("#aboutMeContainer").attr("class", hide);
            $("#portfolioContainer").attr("class", show);
            $("#contactMeContainer").attr("class", hide);
            break;
        case "contact-me":
            $("#aboutMeContainer").attr("class", hide);
            $("#portfolioContainer").attr("class", hide);
            $("#contactMeContainer").attr("class", show);
            break;
    }
}
// renders the portfolio links and associated elements
function renderPortfolio() {
    var portfolioArray = Object.keys(portfolio.projects);
    var numRows = Math.floor(portfolioArray.length / 3) + 1;
    var numPlaceholders = (numRows * 3) - portfolioArray.length;
    var projectCounter = 0;
    for (let i = 0; i < numRows; i++) {
        // row container elements
        var mainContainerEl = $("<div>");
        mainContainerEl.attr("class", "container main-container p-3 m-3 mx-auto");
        var mainRowContainerEl = $("<div>");
        mainRowContainerEl.attr("class", "row");
        // add for loop here
        for (let j = 0; j < 3; j++) {
            if (projectCounter >= portfolioArray.length) {
                // create and update portfolio project elements
                var outerContainerEl = $("<div>");
                outerContainerEl.attr("class", "col-sm-3 mx-auto");
                var outerRowEl = $("<div>");
                outerRowEl.attr("class", "row");
                var buttonContainerEl = $("<div>");
                buttonContainerEl.attr("class", "col-sm-12 my-3");
                var buttonEl = $("<button>");
                buttonEl.attr("class", "btn btn-primary portfolio-btn");
                buttonEl.attr("type", "button");
                buttonEl.attr("data-toggle", "collapse");
                buttonEl.attr("data-target", "#collapse" + projectCounter);
                buttonEl.attr("aria-expanded", "false");
                buttonEl.attr("aria-controls", "collapse" + projectCounter);
                buttonEl.text(portfolio.placeholder.title);
                var innerRowEl = $("<div>");
                innerRowEl.attr("class", "row mb-3");
                var collapseEl = $("<div>");
                collapseEl.attr("class", "collapse card-box");
                collapseEl.attr("id", "collapse" + projectCounter);
                var imgEl = $("<img>");
                imgEl.attr("class", "portfolio-img");
                imgEl.attr("src", portfolio.placeholder.image);
                imgEl.attr("alt", portfolio.placeholder.alt);
                var linkContainerEl = $("<div>");
                linkContainerEl.attr("class", "portfolio-link");
                var linkEl = $("<a>");
                linkEl.attr("class", "card-box-link");
                linkEl.attr("href", portfolio.placeholder.url);
                linkEl.attr("target", "_blank");
                linkEl.text(portfolio.placeholder.title);
                var textContainerEl = $("<div>");
                textContainerEl.attr("class", "card-box-text");
                var textEl = $("<p>");
                textEl.text(portfolio.placeholder.text);
                // append portfolio project elements
                buttonContainerEl.append(buttonEl);
                outerRowEl.append(buttonContainerEl);
                linkContainerEl.append(linkEl);
                textContainerEl.append(textEl);
                collapseEl.append(imgEl);
                collapseEl.append(linkContainerEl);
                collapseEl.append(textContainerEl);
                innerRowEl.append(collapseEl);
                outerContainerEl.append(outerRowEl);
                outerContainerEl.append(innerRowEl);
                // append to row element
                mainRowContainerEl.append(outerContainerEl);
            }
            else {
                // create and update portfolio project elements
                var outerContainerEl = $("<div>");
                outerContainerEl.attr("class", "col-sm-3 mx-auto");
                var outerRowEl = $("<div>");
                outerRowEl.attr("class", "row");
                var buttonContainerEl = $("<div>");
                buttonContainerEl.attr("class", "col-sm-12 my-3");
                var buttonEl = $("<button>");
                buttonEl.attr("class", "btn btn-primary portfolio-btn");
                buttonEl.attr("type", "button");
                buttonEl.attr("data-toggle", "collapse");
                buttonEl.attr("data-target", "#collapse" + projectCounter);
                buttonEl.attr("aria-expanded", "false");
                buttonEl.attr("aria-controls", "collapse" + projectCounter);
                buttonEl.text(portfolio.projects[projectCounter].title);
                var innerRowEl = $("<div>");
                innerRowEl.attr("class", "row mb-3");
                var collapseEl = $("<div>");
                collapseEl.attr("class", "collapse card-box");
                collapseEl.attr("id", "collapse" + projectCounter);
                var imgEl = $("<img>");
                imgEl.attr("class", "portfolio-img");
                imgEl.attr("src", portfolio.projects[projectCounter].image);
                imgEl.attr("alt", portfolio.projects[projectCounter].alt);
                var linkContainerEl = $("<div>");
                linkContainerEl.attr("class", "portfolio-link");
                var linkEl = $("<a>");
                linkEl.attr("class", "card-box-link");
                linkEl.attr("href", portfolio.projects[projectCounter].url);
                linkEl.attr("target", "_blank");
                linkEl.text(portfolio.projects[projectCounter].title);
                var textContainerEl = $("<div>");
                textContainerEl.attr("class", "card-box-text");
                var textEl = $("<p>");
                textEl.text(portfolio.projects[projectCounter].text);
                // append portfolio project elements
                buttonContainerEl.append(buttonEl);
                outerRowEl.append(buttonContainerEl);
                linkContainerEl.append(linkEl);
                textContainerEl.append(textEl);
                collapseEl.append(imgEl);
                collapseEl.append(linkContainerEl);
                collapseEl.append(textContainerEl);
                innerRowEl.append(collapseEl);
                outerContainerEl.append(outerRowEl);
                outerContainerEl.append(innerRowEl);
                // append to row element
                mainRowContainerEl.append(outerContainerEl);
            }
            // increment project counter "projectCounter"
            projectCounter++;
        }
        mainContainerEl.append(mainRowContainerEl);
        $("#portfolioArea").append(mainRowContainerEl);
    }
}

$(document).on("click", ".nav-link", function(event) {
    var targetID = $(event.target).attr("id");
    switch (targetID) {
        case "about-me-link":
            display("about-me");
            break;
        case "portfolio-link":
            renderPortfolio();
            display("portfolio");
            break;
        case "contact-link":
            display("contact-me");
            break;
    }
});

// starting script
display("about-me");