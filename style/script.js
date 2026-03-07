let isHungarian = true;

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
        setText("nav-summary","Summary");
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
        setText("summary-title","Summary");
        setText("about-title","About Me");

        /* ===== ÉVFOLYAMOK ===== */
        setText("ev910-btn","Grade 9-10");
        setText("ev11-btn","Grade 11");
        setText("ev12-btn","Grade 12");
        setText("ev13-btn","Grade 13");

        /* ===== BACK BUTTONS ===== */
        setText("back-about","Back ↑");
        setText("back-study","Back ↑");
        setText("back-projects","Back ↑");
        setText("back-technologies","Back ↑");
        setText("back-summary","Back ↑");


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
        setText("summary-text","Summary of my studies.");
        setText("about-text","Here comes the introductory text...");
        setText("lang-btn","EN");

        isHungarian = false;

    } else {

        /* ===== NAV ===== */
        setText("nav-name","ZAB ZALÁN");
        setText("nav-study","Tanulmányok");
        setText("nav-projects","Projektek");
        setText("nav-technologies","Technológiák");
        setText("nav-summary","Összegzés");
        setText("nav-about","Rólam");
        

        /* ===== HERO ===== */
        setText("title","Ipari informatikus hallgató");
        setText("name","ZAB ZALÁN");
        setText("about-btn",
            "Rólam <span class='arrow'>→</span>");

        /* ===== SECTION CÍMEK ===== */
        setText("study-title","Tanulmányok");
        setText("projects-title","Projektek");
        setText("technologies-title","Technológiák");
        setText("summary-title","Összegzés");
        setText("about-title","Rólam");
        
        /* ===== ÉVFOLYAMOK ===== */
        setText("ev910-btn","9–10. évfolyam");
        setText("ev11-btn","11. évfolyam");
        setText("ev12-btn","12. évfolyam");
        setText("ev13-btn","13. évfolyam");

        /* ===== BACK BUTTONS ===== */
        setText("back-about","Vissza ↑");
        setText("back-study","Vissza ↑");
        setText("back-projects","Vissza ↑");
        setText("back-technologies","Vissza ↑");
        setText("back-summary","Vissza ↑");


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
        setText("summary-text","Tanulmányaim összefoglalása...");
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
