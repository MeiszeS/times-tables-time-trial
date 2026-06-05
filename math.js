const answerText = document.getElementById("answerText");
const keypadButtons = document.getElementsByClassName("keypadButton");
const question = document.getElementById("question"); 
const correctText = document.getElementById("correct");
const incorrectText = document.getElementById("incorrect");

var num1 = 1 + Math.ceil(Math.sqrt(Math.random()*100));
var num2 = 1 + Math.ceil(Math.sqrt(Math.random()*400));
var answer = num1 * num2;

var correct = 0;
var incorrect = 0;

question.textContent = num1+"x"+num2+" = ?";

function keypadPress(event){
    console.log(event.target.textContent);
    answerText.textContent += event.target.textContent;
    answerCheck();
}

function answerCheck(){
    console.log(answer.toString().length);
    if(answerText.textContent.toString().length == answer.toString().length){
        if(answerText.textContent == answer){correct++;}else{incorrect++;}

        num1 = 1 + Math.ceil(Math.sqrt(Math.random()*100));
        num2 = 1 + Math.ceil(Math.sqrt(Math.random()*400));
        answer = num1 * num2;
        question.textContent = num1+"x"+num2+" = ?";
        answerText.textContent = "";

        correctText.textContent = "Correct: "+correct;
        incorrectText.textContent = "Incorrect: "+incorrect;
    }
}

for(let i = 0; i < keypadButtons.length; i++){
    console.log(keypadButtons[i]);
    keypadButtons[i].addEventListener("click", keypadPress);
}