document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop , 
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav_right ul li a").forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

function toggleMenu() {
    var menu = document.getElementById("menu-list");
    menu.classList.toggle("show");
}
