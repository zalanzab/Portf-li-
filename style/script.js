function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

    // Mobil menü bezárása kattintás után
    const nav = document.getElementById("nav-menu");
    nav.classList.remove("active");
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

function toggleCard(button) {

    const card = button.closest(".study-card");
    if (!card) return;

    const isActive = card.classList.toggle("active");

    if (isActive) {
        button.innerText = "Bezárás";
    } else {
        button.innerText = "Bővebben";
    }
}

function handleStudyClick() {

    const dropdown = document.querySelector(".dropdown-content");
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        //  Desktop -> azonnal scroll
        scrollToSection('tanulmanyok');
        return;
    }

    //  Mobil logika
    if (!dropdown.classList.contains("mobile-open")) {
        // Első kattintás -> lenyit
        dropdown.classList.add("mobile-open");
    } else {
        // Második kattintás -> scroll
        dropdown.classList.remove("mobile-open");
        scrollToSection('tanulmanyok');
    }
}

function handleProjectsClick() {

    const dropdowns = document.querySelectorAll(".dropdown-content");
    const projectsDropdown = dropdowns[1];
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        //  Desktop -> azonnal scroll
        scrollToSection('projektek');
        return;
    }

    //  Mobil logika
    if (!projectsDropdown.classList.contains("mobile-open")) {
        // Első kattintás -> lenyit
        projectsDropdown.classList.add("mobile-open");
    } else {
        // Második kattintás -> scroll
        projectsDropdown.classList.remove("mobile-open");
        scrollToSection('projektek');
    }
}

function openProject1() {
    window.location.href = 'Projektek_1/projekt_1.html';
}
function openProject2() {
    window.location.href = 'Projektek_2/projekt_2.html';
}
function openProject3() {
    window.location.href = 'Projektek_3/projekt_3.html';
}

function openProject4() {
    window.location.href = 'Projektek_4/projekt_4.html';
}
