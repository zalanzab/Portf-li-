let isHungarian = true;

function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text;
}

function toggleLanguage() {

    if (isHungarian) {

        /* ===== NAV ===== */
        setText("nav-study","Studies");
        setText("nav-projects","Projects");
        setText("nav-summary","Summary");
        setText("nav-about","About");

        /* ===== HERO ===== */
        setText("title","Industrial Informatics Student");
        setText("about-btn",
            "About <span class='arrow'>→</span>");

        /* ===== SECTION CÍMEK ===== */
        setText("study-title","Studies");
        setText("projects-title","Projects");
        setText("summary-title","Summary");
        setText("about-title","About Me");

        /* ===== ÉVFOLYAMOK ===== */
        setText("ev9-btn","Grade 9");
        setText("ev10-btn","Grade 10");
        setText("ev11-btn","Grade 11");
        setText("ev12-btn","Grade 12");
        setText("ev13-btn","Grade 13");

        /* ===== BACK BUTTONS ===== */
        setText("back-about","Back ↑");
        setText("back-study","Back ↑");
        setText("back-projects","Back ↑");
        setText("back-summary","Back ↑");

        /* ===== TANULMÁNYOK TARTALOM ===== */

        setText("ev9-title","Grade 9");
        setText("ev10-title","Grade 10");
        setText("ev11-title","Grade 11");
        setText("ev12-title","Grade 12");
        setText("ev13-title","Grade 13");

        setText("ev9-text","Description of my 9th grade studies.");
        setText("ev10-text","Description of my 10th grade studies.");
        setText("ev11-text","Description of my 11th grade studies.");
        setText("ev12-text","Description of my 12th grade studies.");
        setText("ev13-text","Description of my 13th grade studies.");



        setText("projects-text","Presentation of my projects.");
        setText("summary-text","Summary of my studies.");
        setText("about-text","Here comes the introductory text...");

        isHungarian = false;

    } else {

        /* ===== NAV ===== */
        setText("nav-study","Tanulmányok");
        setText("nav-projects","Projektek");
        setText("nav-summary","Összegzés");
        setText("nav-about","Rólam");

        /* ===== HERO ===== */
        setText("title","Ipari informatikus hallgató");
        setText("about-btn",
            "Rólam <span class='arrow'>→</span>");

        /* ===== SECTION CÍMEK ===== */
        setText("study-title","Tanulmányok");
        setText("projects-title","Projektek");
        setText("summary-title","Összegzés");
        setText("about-title","Rólam");

        /* ===== ÉVFOLYAMOK ===== */
        setText("ev9-btn","9. évfolyam");
        setText("ev10-btn","10. évfolyam");
        setText("ev11-btn","11. évfolyam");
        setText("ev12-btn","12. évfolyam");
        setText("ev13-btn","13. évfolyam");

        /* ===== BACK BUTTONS ===== */
        setText("back-about","Vissza ↑");
        setText("back-study","Vissza ↑");
        setText("back-projects","Vissza ↑");
        setText("back-summary","Vissza ↑");

        setText("ev9-title","9. évfolyam");
        setText("ev10-title","10. évfolyam");
        setText("ev11-title","11. évfolyam");
        setText("ev12-title","12. évfolyam");
        setText("ev13-title","13. évfolyam");

        setText("ev9-text","Itt lesz a 9. évfolyam leírása.");
        setText("ev10-text","Itt lesz a 10. évfolyam leírása.");
        setText("ev11-text","Itt lesz a 11. évfolyam leírása.");
        setText("ev12-text","Itt lesz a 12. évfolyam leírása.");
        setText("ev13-text","Itt lesz a 13. évfolyam leírása.");
        


        setText("projects-text","Projektjeim bemutatása...");
        setText("summary-text","Tanulmányaim összefoglalása...");
        setText("about-text","Itt jön majd a bemutatkozás szöveg...");

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