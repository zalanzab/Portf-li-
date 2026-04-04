﻿let isHungarian = true;

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text;
}

function toggleLanguage() {

    if (isHungarian) {

        /* ===== NAV ===== */
        setText("nav-name","ZALAN ZAB");
        setText("nav-study","Studies");
        setText("nav-projects","Projects");
        setText("nav-technologies","Technologies");
        setText("nav-about","About Me");
        

        /* ===== HERO ===== */
        setText("title","Industrial Informatics Student");
        setText("name","ZALAN ZAB");
        setText("about-btn",
            "About Me <span class='arrow'>→</span>");

        /* ===== SECTION CÍMEK ===== */
        setText("study-title","Studies");
        setText("projects-title","Projects");
        setText("technologies-title","Technologies");
        setText("about-title","About Me");

        /* ===== ÉVFOLYAMOK ===== */
        setText("ev910-btn","Grade 9-10");
        setText("ev11-btn","Grade 11");
        setText("ev12-btn","Grade 12");
        setText("ev13-btn","Grade 13");

        /* ===== PROJEKTEK ===== */
        setText("projekt1-btn","Workpiece Counter");
        setText("projekt2-btn","Smart Home Control");
        setText("projekt3-btn","Portfolio");

        /* ===== BACK BUTTONS ===== */
        setText("back-about","Back ↑");
        setText("back-study","Back ↑");
        setText("back-projects","Back ↑");
        setText("back-technologies","Back ↑");


        /* ===== STUDY CARDS ===== */
        setText("card1-title","Grades 9–10");
        setText("card2-title","Grade 11");
        setText("card3-title","Grade 12");
        setText("card4-title","Grade 13");

        setText("card1-text","Lorem");
        setText("card2-text","Lorem");
        setText("card3-text","Lorem");
        setText("card4-text","Lorem");

        setText("card1-btn","Bővebben");
        setText("card2-btn","Bővebben");
        setText("card3-btn","Bővebben");
        setText("card4-btn","Bővebben");



        setText("projects-text","Presentation of my projects.");
        setText("technologies-text","Used technologies and self-reflection");
        setText("about-text","Here comes the introductory text...");
        setText("lang-btn","EN");

        isHungarian = false;

    } else {

        /* ===== NAV ===== */
        setText("nav-name","ZAB ZALÁN");
        setText("nav-study","Tanulmányok");
        setText("nav-projects","Projektek");
        setText("nav-technologies","Technológiák");
        setText("nav-about","Bemutatkozás");
        

        /* ===== HERO ===== */
        setText("title","Ipari informatikus hallgató");
        setText("name","ZAB ZALÁN");
        setText("about-btn",
            "Rólam <span class='arrow'>→</span>");

        /* ===== SECTION CÍMEK ===== */
        setText("study-title","Tanulmányok");
        setText("projects-title","Projektek");
        setText("technologies-title","Technológiák");
        setText("about-title","Bemutatkozás");
        
        /* ===== ÉVFOLYAMOK ===== */
        setText("ev910-btn","9–10. évfolyam");
        setText("ev11-btn","11. évfolyam");
        setText("ev12-btn","12. évfolyam");
        setText("ev13-btn","13. évfolyam");

        /* ===== PROJEKTEK ===== */
        setText("projekt1-btn","Munkadarab számláló");
        setText("projekt2-btn","Okosotthon vezérlés");
        setText("projekt3-btn","Portfólió");

        /* ===== BACK BUTTONS ===== */
        setText("back-about","Vissza ↑");
        setText("back-study","Vissza ↑");
        setText("back-projects","Vissza ↑");
        setText("back-technologies","Vissza ↑");


        /* ===== TANULMÁNYOK TARTALOM ===== */
        setText("card1-title","9–10. évfolyam");
        setText("card2-title","11. évfolyam");
        setText("card3-title","12. évfolyam");
        setText("card4-title","13. évfolyam");

        setText("card1-text","Lorem");
        setText("card2-text","Lorem");
        setText("card3-text","Lorem ");
        setText("card4-text","Lorem ");
        setText("card1-btn","Bővebben");
        setText("card2-btn","Bővebben");
        setText("card3-btn","Bővebben");
        setText("card4-btn","Bővebben");
                


        setText("projects-text","Projektjeim bemutatása...");
        setText("technologies-text","Alkalmazott technológiák és szakmai önreflexió...");
        setText("about-text","Itt jön majd a bemutatkozás szöveg...");
        setText("lang-btn","HU");

        isHungarian = true;
    }
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

function handleProjectsClick() {

    const dropdowns = document.querySelectorAll(".dropdown-content");
    const projectsDropdown = dropdowns[1];
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        //  Desktop → azonnal scroll
        scrollToSection('projektek');
        return;
    }

    //  Mobil logika
    if (!projectsDropdown.classList.contains("mobile-open")) {
        // Első kattintás → lenyit
        projectsDropdown.classList.add("mobile-open");
    } else {
        // Második kattintás → scroll
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