console.log(config);
const testsTitles = config.testsTitles;
const answers = config.answers;
const trueAnswers = config.trueAnswers;
const podskazka = config.podskazka;
const testsCount = testsTitles.length;
const answersCount = answers[0].length;

const correctResults = [];
const incorrectResults = [];
let testIndex = -1;
let podskazkaVisible = false;

const zagalovok = document.getElementById("zadacha");
const answerButtons = [
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3'),
    document.getElementById('btn4'),
    document.getElementById('btn5')
];
const buttonNext = document.getElementById('btn10');
const text2 = document.getElementById("otvet");

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function nextTest() {
    podskazkaVisible = false;
    buttonNext.disabled = true;
    testIndex = testIndex + 1;
    if (testIndex >= testsCount) {
        let s1 = correctResults.length > 0
            ? "<br>Успешные задания: " + correctResults.filter(onlyUnique).map((idx) => testsTitles[idx]).join(", ")
            : "";
        let s2 = incorrectResults.length > 0
            ? "<br>Проваленные задания: " + incorrectResults.filter(onlyUnique).filter((q) => !correctResults.some((v) => q === v)).map((idx) => testsTitles[idx]).join(", ")
            : "";
        text2.innerHTML = "Задания выполнены! " + s1 + s2;
        for (let i = 0; i < answersCount; ++i) {
            answerButtons[i].style.display = "none";
        }
    } else {
        zagalovok.textContent = testsTitles[testIndex];
        text2.textContent = "";
        for (let i = 0; i < answersCount; ++i) {
            answerButtons[i].textContent = answers[testIndex][i];
            answerButtons[i].style.backgroundColor = '#D1D1D1';
        }
    }
}

for (let i = 0; i < answersCount; ++i) {
    answerButtons[i].addEventListener('click', () => {
        if (i === trueAnswers[testIndex]) {
            answerButtons[i].style.backgroundColor = '#0F0';
            text2.textContent = "Верно!";
            correctResults.push(testIndex);
            buttonNext.disabled = false;
        } else {
            if (podskazkaVisible) {
                answerButtons[i].style.backgroundColor = '#F00';
                text2.textContent = "Не верно!";
                incorrectResults.push(testIndex);
                buttonNext.disabled = false;
            } else {
                answerButtons[i].style.backgroundColor = '#F00';
                text2.textContent = podskazka[testIndex];
                podskazkaVisible = true;
            }
        }
    });
}

buttonNext.addEventListener('click', () => {
    nextTest();
});

nextTest();
