const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
}, {
    threshold: 0.2
})

hiddenElements.forEach((el) => observer.observe(el))

const ideaButtons = document.querySelectorAll('.idea-btn')

ideaButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target')
        const targetBox = document.getElementById(targetId)

        targetBox.classList.toggle('show')
        button.classList.toggle('active')
    })
})

const form = document.querySelector('.contact-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert("Богиня услышала ваше послание 🌬️")
})

const powerItems = document.querySelectorAll('.hidden-power');

const powerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-power')
        } else {
            entry.target.classList.remove('show-power')
        }
    })
}, {
    threshold: 0.2
})

// вот эта штука снизу это вот с облаком, это с помощью ИИ

powerItems.forEach((item) => powerObserver.observe(item));

const sounds = {
    wind: document.getElementById('windSound'),
    katana: document.getElementById('katanaSound'),
    campfire: document.getElementById('campfireSound'),
    fight: document.getElementById('fightSound')
};

const clouds = document.querySelectorAll('.sound-cloud');

let soundEnabled = false;

document.addEventListener('click', () => {
    soundEnabled = true;
}, { once: true });

clouds.forEach((cloud) => {
    cloud.addEventListener('mouseenter', () => {
        if (!soundEnabled) return;

        const soundType = cloud.dataset.sound;
        const sound = sounds[soundType];

        if (!sound) return;

        sound.currentTime = 0;
        sound.volume = 0.4;
        sound.play().catch((error) => {
            console.log('Звук не проигрался:', error);
        });
    });
});

// preloader с помощью ИИ

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);

    }, 800); // задержка
});

const mapPoints = document.querySelectorAll('.map-point');
const mapInfoTitle = document.getElementById('mapInfoTitle');
const mapInfoText = document.getElementById('mapInfoText');

const places = {
    europe: {
        title: 'Европа',
        text: 'В Европе Ева появлялась во время путешествий и важных событий своей жизни. Здесь она пережила часть своего пути после побега и становления.'
    },
    NY: {
        title: 'Нью-Йорк',
        text: 'Нью-Йорк — одно из главных мест действия в её истории. Здесь она взаимодействовала с Мстителями и участвовала в крупных битвах.'
    },
    asgard: {
        title: 'Асгард',
        text: 'Асгард связан с её прошлым, мифологией и важными событиями, связанными с богами и Локи.'
    }
};

mapPoints.forEach((point) => {
    point.addEventListener('click', () => {
        const place = point.dataset.place;
        mapInfoTitle.textContent = places[place].title;
        mapInfoText.textContent = places[place].text;
    });
});

const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });
}