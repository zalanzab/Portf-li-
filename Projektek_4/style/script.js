function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

    const nav = document.getElementById("nav-menu");
    nav.classList.remove("active");
}

function navigateToSection(sectionId) {
    window.location.href = '../index.html#' + sectionId;
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


function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("active");
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function handleStudyClick() {

    const dropdown = document.querySelector(".dropdown-content");
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        navigateToSection('tanulmanyok');
        return;
    }

    if (!dropdown.classList.contains("mobile-open")) {
        dropdown.classList.add("mobile-open");
    } else {
        dropdown.classList.remove("mobile-open");
        navigateToSection('tanulmanyok');
    }
}

function showTab(index) {
  var contents = document.querySelectorAll(".tab-content");
  var tabs = document.querySelectorAll(".tab");

  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
    tabs[i].classList.remove("active");
  }

  contents[index].classList.add("active");
  tabs[index].classList.add("active");
}

function openImage(src) {
    const modal = document.getElementById("image-modal");
    const img = document.getElementById("modal-img");

    img.src = src;
    modal.style.display = "flex";
}

function closeImage() {
    document.getElementById("image-modal").style.display = "none";
}