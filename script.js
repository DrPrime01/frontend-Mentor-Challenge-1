//Toggling the menu-bar in mobile

const menuBar = document.getElementById("dropdown-icon");
const nav = document.querySelector("nav");

menuBar.addEventListener("click", function() {
    nav.classList.toggle("show")
    let menuIcon = document.querySelector("#menu-icon")
    if (nav.classList.contains("show")) {
        menuIcon.setAttribute("src", "/images/icon-close-menu.svg")
    } else {
        menuIcon.setAttribute("src", "/images/icon-menu.svg")
    }
})

//toggling features and company dropdowns

const company = document.getElementById("company");
const features = document.getElementById("features");
const featuresDropdown = document.getElementById("features-dropdown");
const companyDropdown = document.getElementById("company-dropdown");

company.addEventListener("click", function (){
    companyDropdown.classList.toggle("show");
    let arrowDownCompany = document.querySelector("#arrow-down-company");
    if (companyDropdown.classList.contains("show")) {
        arrowDownCompany.setAttribute("src", "/images/icon-arrow-up.svg")
    } else {
        arrowDownCompany.setAttribute("src", "/images/icon-arrow-down.svg")
    }
})

features.addEventListener("click", function (){
    featuresDropdown.classList.toggle("show");
    let arrowDownFeat = document.querySelector("#arrow-down-feat");
    if (featuresDropdown.classList.contains("show")) {
        arrowDownFeat.setAttribute("src", "/images/icon-arrow-up.svg")
    } else {
        arrowDownFeat.setAttribute("src", "/images/icon-arrow-down.svg")
    }
})

//function to change arrowDown icon when clicked

