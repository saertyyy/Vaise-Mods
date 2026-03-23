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
});const NAMESPACE = "my_vault_unique_2026"; 

// Печатная машинка
const titleText = "VAULT_01";
const speed = 150;
let i = 0;

function typeWriter() {
    if (i < titleText.length) {
        document.getElementById("typewriter").innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Счетчик скачиваний
async function updateCount(modId) {
    try {
        await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${modId}`);
    } catch (e) {
        console.error("Counter error");
    }
}

async function getInitialCount(modId) {
    try {
        const response = await fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${modId}`);
        const data = await response.json();
        if (data.value) {
            document.getElementById(`count-${modId}`).innerText = data.value;
        }
    } catch (e) {
        console.log("Counter initialized on first click");
    }
}

// Запуск при загрузке
window.addEventListener('load', () => {
    typeWriter();
    getInitialCount('split-self');
});