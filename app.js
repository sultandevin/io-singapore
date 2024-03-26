const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const toTop = document.querySelector('.to-top');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100 || window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})