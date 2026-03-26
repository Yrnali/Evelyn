// этот js по большей части с помощью ИИ

const quizForm = document.getElementById('quizForm');
const quizResult = document.getElementById('quizResult');
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');
const restartBtn = document.getElementById('restartBtn');

const results = {
    A: {
        title: '🌬️ Ты — Бриз',
        text: 'Ты спокойный, мягкий и свободный человек. Ты не любишь лишнее давление, умеешь приносить гармонию и легче многих переживаешь перемены.'
    },
    B: {
        title: '🌪️ Ты — Шторм',
        text: 'Ты мощный, эмоциональный и яркий. В тебе много энергии, ты не боишься действовать резко и умеешь менять всё вокруг себя.'
    },
    C: {
        title: '🌫️ Ты — Туман',
        text: 'Ты загадочный, глубокий и не такой простой, как кажешься. Не каждый может тебя понять, но именно в твоей таинственности скрыта сила.'
    },
    D: {
        title: '⚡ Ты — Ураган',
        text: 'Ты лидер по натуре. В тебе много силы, уверенности и внутреннего контроля. Ты умеешь вести за собой и не теряешься в сложных ситуациях.'
    }
};

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const answersCount = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);

        if (!selected) {
            alert('Ответь на все 10 вопросов 🌬️');
            return;
        }

        answersCount[selected.value]++;
    }

    let finalType = 'A';
    let maxCount = answersCount.A;

    for (const key in answersCount) {
        if (answersCount[key] > maxCount) {
            maxCount = answersCount[key];
            finalType = key;
        }
    }

    resultTitle.textContent = results[finalType].title;
    resultText.textContent = results[finalType].text;

    quizResult.classList.remove('hidden-result');
    quizResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

restartBtn.addEventListener('click', () => {
    quizForm.reset();
    quizResult.classList.add('hidden-result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});