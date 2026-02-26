let isHungarian = true;

function toggleLanguage() {

    if (isHungarian) {
        document.getElementById("nav-about").innerText = "About";
        document.getElementById("nav-study").innerText = "Studies";
        document.getElementById("nav-projects").innerText = "Projects";
        document.getElementById("nav-summary").innerText = "Summary";
        document.getElementById("about-title").innerText = "About Me";
        document.getElementById("title").innerText = "Industrial Informatics Student";
        isHungarian = false;
    } else {
        document.getElementById("nav-about").innerText = "Rólam";
        document.getElementById("nav-study").innerText = "Tanulmányok";
        document.getElementById("nav-projects").innerText = "Projektek";
        document.getElementById("nav-summary").innerText = "Összegzés";
        document.getElementById("about-title").innerText = "Rólam";
        document.getElementById("title").innerText = "ipari informatikus";
        isHungarian = true;
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}