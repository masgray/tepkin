var text = ["Задача 1","Задача 2","Задача 3","Задача 4"]; 
var answer1 = ["Ответ 1.1","Ответ 2.1","Ответ 3.1","Ответ 4.1"]; 
var answer2 = ["Ответ 1.2","Ответ 2.2","Ответ 3.2","Ответ 4.2"]; 
var answer3 = ["Ответ 1.3","Ответ 2.3","Ответ 3.3","Ответ 4.3"]; 
var answer4 = ["Ответ 1.4","Ответ 2.4","Ответ 3.4","Ответ 4.4"]; 
var TrueAnswer = ["Ответ 1.3","Ответ 2.1","Ответ 3.2","Ответ 4.4"]; 
var podskazka = ["Подсказка 1","Подсказка 2","Подсказка 3","Подсказка 4"]; 
var i; 
var x = 0; 
var zagalovok = document.getElementById("zadacha"); 
const button1 = document.getElementById('btn1'); 
const button2 = document.getElementById('btn2'); 
const button3 = document.getElementById('btn3'); 
const button4 = document.getElementById('btn4'); 
const text2 = document.getElementById("otvet"); 
const dalee = document.getElementById("btn10"); 
/----------------------------------------------------------/ 
i = Math.floor(Math.random()*4); 
zagalovok.textContent = text[i]; 
button1.textContent = answer1[i]; 
button2.textContent = answer2[i]; 
button3.textContent = answer3[i]; 
button4.textContent = answer4[i]; 
/----------------------------------------------------------/ 
button1.addEventListener('click', event => { 
 if (answer1[i] === TrueAnswer[i] && x === 0){ 
 button1.style.backgroundColor = '#0F0'; 
 text2.textContent = "Верно!"; 
 x = 1; 
 }else if(answer1[i] !== TrueAnswer[i] && x === 0){ 
 button1.style.backgroundColor = '#F00'; 
 text2.textContent = podskazka[i]; 
 x = 1; 
 } 
document.getElementById('btn10').className = 'btn'; 
}); 
/----------------------------------------------------------/ 
button2.addEventListener('click', event => { 
 if (answer2[i] === TrueAnswer[i] && x === 0){ 
 button2.style.backgroundColor = '#0F0'; 
 text2.textContent = "Верно!"; 
 x = 1; 
 }else if(answer2[i] !== TrueAnswer[i] && x === 0){ 
 button2.style.backgroundColor = '#F00'; 
 text2.textContent = podskazka[i]; 
 x = 1; 
 } 
document.getElementById('btn10').className = 'btn'; 
}); 
/----------------------------------------------------------/ 
button3.addEventListener('click', event => { 
 if (answer3[i] === TrueAnswer[i] && x === 0){ 
 button3.style.backgroundColor = '#0F0'; 
 text2.textContent = "Верно!"; 
 x =1; 
 }else if(answer3[i] !== TrueAnswer[i] && x === 0){ 
 button3.style.backgroundColor = '#F00'; 
 text2.textContent = podskazka[i]; 
 x = 1; 
 } 
document.getElementById('btn10').className = 'btn'; 
}); 
/----------------------------------------------------------/ 
button4.addEventListener('click', event => { 
 if (answer4[i] === TrueAnswer[i] && x === 0){ 
 button4.style.backgroundColor = '#0F0'; 
 text2.textContent = "Верно!"; 
 x = 1; 
 }else if (answer4[i] !== TrueAnswer[i] && x === 0){ 
 button4.style.backgroundColor = '#F00'; 
 text2.textContent = podskazka[i]; 
 x = 1; 
 } 
document.getElementById('btn10').className = 'btn'; 
}); 
/----------------------------------------------------------/ 
dalee.addEventListener('click', event => { 
 if (x === 1){ 
 button1.style.backgroundColor = '#D1D1D1'; 
 button2.style.backgroundColor = '#D1D1D1'; 
 button3.style.backgroundColor = '#D1D1D1'; 
 button4.style.backgroundColor = '#D1D1D1'; 
 i = Math.floor(Math.random()*4); 
 x = 0; 
 zagalovok.textContent = text[i]; 
 button1.textContent = answer1[i]; 
 button2.textContent = answer2[i]; 
 button3.textContent = answer3[i]; 
 button4.textContent = answer4[i]; 
 document.getElementById('btn10').className = 'btn101'; 
 } 
});
