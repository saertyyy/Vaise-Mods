// === 1. НАВИГАЦИЯ И КНОПКА "НАВЕРХ" ===
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

// Плавная прокрутка для ссылок
document.querySelectorAll('.nav-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// === 2. ЭФФЕКТ ПЕЧАТНОЙ МАШИНКИ ===
const titleText = "VAULT_01";
const speed = 150;
let i = 0;

function typeWriter() {
    const element = document.getElementById("typewriter");
    if (element && i < titleText.length) {
        element.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// === 3. СИСТЕМА СЧЕТЧИКОВ (LOCAL STORAGE) ===
// Функция для клика по кнопке
function updateCount(modId) {
    let count = localStorage.getItem('count-' + modId) || 0;
    count++;
    localStorage.setItem('count-' + modId, count);
    
    const element = document.getElementById('count-' + modId);
    if (element) {
        element.innerText = count;
    }
}

// Функция для загрузки цифр при старте
function loadAllCounts() {
    // Список всех ID твоих модов (проверь, чтобы они совпадали с id в HTML)
    const mods = ['camera', 'leaves', 'zoom', 'insanity']; 
    
    mods.forEach(id => {
        let savedCount = localStorage.getItem('count-' + id) || 0;
        let element = document.getElementById('count-' + id);
        if (element) {
            element.innerText = savedCount;
        }
    });
}

// === 4. ЕДИНЫЙ ЗАПУСК ПРИ ЗАГРУЗКЕ ===
window.addEventListener('load', () => {
    typeWriter();
    loadAllCounts();
});