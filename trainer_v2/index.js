const testsTitles = config.testsTitles;
const answers = config.answers;
const trueAnswers = config.trueAnswers;
const toLearn = config.toLearn;
const testsCount = testsTitles.length;
const answersCount = answers[0].length;

const results = testsTitles.map((_, idx) => ({ testIdx: idx, correct: false }));
let testIndex = -1;

const title = document.getElementById("zadacha");
const answerButtons = [];
const buttonNext = document.getElementById('btn10');
const answerResult = document.getElementById("otvet");
const taskDiv = document.getElementById("task");
const resultDiv = document.getElementById("result");

function nextTest() {
    buttonNext.disabled = true;
    testIndex++;
    if (testIndex >= testsCount) {
        taskDiv.style.display = "none";
        resultDiv.innerHTML = "<p>Задания выполнены!</p>" +
            (results.some((v) => !v.correct)
            ? "Повтори следующий материал:<ul><li>" + results.filter((v) => !v.correct)
                .map((v) => toLearn[v.testIdx]).join("<li>") + "</ul>"
            : "");
    } else {
        title.textContent = testsTitles[testIndex];
        answerResult.textContent = "";
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
            answerResult.textContent = "Верно!";
            results[testIndex].correct = true;
        } else {
            answerButtons[i].style.backgroundColor = '#F00';
            answerResult.innerHTML = "Не верно!<br>Повтори следующий материал: " + toLearn[testIndex];
        }
        answerButtons.forEach((b) => b.disabled = true);
        buttonNext.disabled = false;
    });
}

buttonNext.addEventListener('click', () => {
    nextTest();
});

nextTest();
