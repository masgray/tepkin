const testsTitles = config.testsTitles;
const answers = config.answers;
const trueAnswers = config.trueAnswers;
const podskazka = config.podskazka;
const testsCount = testsTitles.length;
const answersCount = answers[0].length;

const results = testsTitles.map((_, idx) => ({ testIdx: idx, correct: false }));
let testIndex = -1;
let podskazkaVisible = false;
let clickedButton = -1;

const zagalovok = document.getElementById("zadacha");
const answerButtons = [];
const buttonNext = document.getElementById('btn10');
const text2 = document.getElementById("otvet");

function nextTest() {
    podskazkaVisible = false;
    buttonNext.disabled = true;
    testIndex++;
    if (testIndex >= testsCount) {
        let s1 = results.some((v) => v.correct)
            ? "<br>Успешные задания: " + results.filter((v) => v.correct).map((v) => testsTitles[v.testIdx]).join(", ")
            : "";
        let s2 = results.some((v) => !v.correct)
            ? "<br>Проваленные задания: " + results.filter((v) => !v.correct).map((v) => testsTitles[v.testIdx]).join(", ")
            : "";
        text2.innerHTML = "Задания выполнены! " + s1 + s2;
        for (let i = 0; i < answersCount; ++i) {
            answerButtons[i].style.display = "none";
        }
    } else {
        clickedButton = -1;
        zagalovok.textContent = testsTitles[testIndex];
        text2.textContent = "";
        for (let i = 0; i < answersCount; ++i) {
            answerButtons[i].textContent = answers[testIndex][i];
            answerButtons[i].style.backgroundColor = '#D1D1D1';
            answerButtons[i].disabled = false;
        }
    }
}

for (let i = 0; i < answersCount; ++i) {
    const btn = document.getElementById('btn' + (i + 1));
    answerButtons.push(btn);
    btn.addEventListener('click', () => {
        if (i === trueAnswers[testIndex]) {
            answerButtons[i].style.backgroundColor = '#0F0';
            text2.textContent = "Верно!";
            results[testIndex].correct = true;
            answerButtons.forEach((b) => b.disabled = true);
            buttonNext.disabled = false;
        } else {
            answerButtons[i].style.backgroundColor = '#F00';
            if (podskazkaVisible) {
                if (i == clickedButton) {
                    return;
                }
                text2.textContent = "Не верно!";
                answerButtons.forEach((b) => b.disabled = true);
                buttonNext.disabled = false;
            } else {
                text2.textContent = podskazka[testIndex];
                podskazkaVisible = true;
                clickedButton = i;
            }
        }
    });
}

buttonNext.addEventListener('click', () => {
    nextTest();
});

nextTest();
