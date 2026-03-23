// Появление кнопки Наверх
const btn = document.getElementById('backToTop');

window.onscroll = () => {
    if (window.scrollY > 500) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Плавная прокрутка для ссылок навигации
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});