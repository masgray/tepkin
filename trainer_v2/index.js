const testsCount = 4;
const answersCount = 5;
const testsTitles = ["Задача 1", "Задача 2", "Задача 3", "Задача 4"];
const answers = [
    ["Ответ 1.1", "Ответ 1.2", "Ответ 1.3", "Ответ 1.4", "Ответ 1.5"],
    ["Ответ 2.1", "Ответ 2.2", "Ответ 2.3", "Ответ 2.4", "Ответ 2.5"],
    ["Ответ 3.1", "Ответ 3.2", "Ответ 3.3", "Ответ 3.4", "Ответ 3.5"],
    ["Ответ 4.1", "Ответ 4.2", "Ответ 4.3", "Ответ 4.4", "Ответ 4.5"]
];
const trueAnswers = [2, 0, 1, 3];
const correctResults = [];
const incorrectResults = [];
const podskazka = ["Подсказка 1 (2)", "Подсказка 2 (0)", "Подсказка 3 (1)", "Подсказка 4 (3)"];
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

function NextTest() {
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
    answerButtons[i].addEventListener('click', event => {
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

buttonNext.addEventListener('click', event => {
    NextTest();
});

NextTest();
