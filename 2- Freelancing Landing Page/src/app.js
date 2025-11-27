let links = document.getElementById("nav-links");
let humburger = document.getElementById("humburger");
    humburger.addEventListener("click" , () => {
        links.classList.toggle("active");
    });