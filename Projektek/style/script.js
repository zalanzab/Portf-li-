let isHungarian = true;

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text;
}


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
        //  Desktop → azonnal scroll
        scrollToSection('tanulmanyok');
        return;
    }

    //  Mobil logika
    if (!dropdown.classList.contains("mobile-open")) {
        // Első kattintás → lenyit
        dropdown.classList.add("mobile-open");
    } else {
        // Második kattintás → scroll
        dropdown.classList.remove("mobile-open");
        scrollToSection('tanulmanyok');
    }
}