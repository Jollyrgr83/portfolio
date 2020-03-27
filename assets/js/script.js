var aboutMeButtonEl = document.getElementById("about-me-link");
var portfolioButtonEl = document.getElementById("portfolio-link");
var contactMeButtonEl = document.getElementById("contact-link");

var aboutMePageEl = document.getElementById("about-me-page");
var portfolioPageEl0 = document.getElementById("portfolio-page-0");
var portfolioPageEl1 = document.getElementById("portfolio-page-1");
var portfolioPageEl2 = document.getElementById("portfolio-page-2");
var contactMePageEl = document.getElementById("contact-me-page");

aboutMeButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    aboutMePageEl.setAttribute("class", "container main-container p-3 m-3 mx-auto show");            
    portfolioPageEl0.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");
    portfolioPageEl1.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");
    portfolioPageEl2.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");
    contactMePageEl.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");
});

portfolioButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    portfolioPageEl0.setAttribute("class", "container main-container p-3 m-3 mx-auto show");
    portfolioPageEl1.setAttribute("class", "container main-container p-3 m-3 mx-auto show");
    portfolioPageEl2.setAttribute("class", "container main-container p-3 m-3 mx-auto show");
    aboutMePageEl.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");            
    contactMePageEl.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");
});

contactMeButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    contactMePageEl.setAttribute("class", "container main-container p-3 m-3 mx-auto show");
    aboutMePageEl.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");            
    portfolioPageEl0.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");
    portfolioPageEl1.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");
    portfolioPageEl2.setAttribute("class", "container main-container p-3 m-3 mx-auto hide");
});