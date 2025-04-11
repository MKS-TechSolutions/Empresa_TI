function toggleMenu(event) {
    event.stopPropagation();
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

function closeMenu(event) {
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
    }
}

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

window.addEventListener("scroll", function() {
    let header = this.document.querySelector('.menu-nome-empresa')
    header.classList.toggle('rolagem', this.window.scrollY > 0)
})