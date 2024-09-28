// toggle aside navbar
const navItemToggler = document.querySelector(".nav-toggler");
navItemToggler.addEventListener("click", () => {
    document.querySelector(".aside").classList.toggle("open");
})

//hide aside navbar on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".aside").classList.contains("open")) {
        document.querySelector(".aside").classList.remove("open");
    }
})

// toggle style switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

//theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach(style => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled" , "true");
        }
    })
}

//theme dark mode and light mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

//set active navbar
const navbar = document.querySelectorAll(".nav-item");
const setActive = (navItem) => {
    navbar.forEach(nav => {
        if (navItem === nav.querySelector("a").getAttribute("title")) {
            nav.querySelector("a").classList.add("active")
        } else {
            nav.querySelector("a").classList.remove("active")
        }
    })
}

