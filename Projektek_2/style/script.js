function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

    // Mobil menü bezárása kattintás után
    const nav = document.getElementById("nav-menu");
    nav.classList.remove("active");
}

function navigateToSection(sectionId) {
    window.location.href = '../index.html#' + sectionId;
}

function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function openProject1() {
    window.location.href = '../Projektek_1/projekt_1.html';
}

function openProject2() {
    window.location.href = '../Projektek_2/projekt_2.html';
}

function openProject3() {
    window.location.href = '../Projektek_3/projekt_3.html';
}

function openProject4() {
    window.location.href = '../Projektek_4/projekt_4.html';
}

function handleStudyClick() {

    const dropdown = document.querySelector(".dropdown-content");
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        //  Desktop → azonnal navigate
        navigateToSection('tanulmanyok');
        return;
    }

    //  Mobil logika
    if (!dropdown.classList.contains("mobile-open")) {
        // Első kattintás → lenyit
        dropdown.classList.add("mobile-open");
    } else {
        // Második kattintás → navigate
        dropdown.classList.remove("mobile-open");
        navigateToSection('tanulmanyok');
    }

}
