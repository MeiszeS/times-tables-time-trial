const answerText = document.getElementById("answerText");
const keypadButtons = document.getElementsByClassName("keypadButton");
const question = document.getElementById("question"); 
const correctText = document.getElementById("correct");
const incorrectText = document.getElementById("incorrect");

function num1gen(){
    return 1 + Math.ceil(Math.pow(Math.random(), 1)*20);
}

function num2gen(){
    return 1 + Math.ceil(Math.pow(Math.random(), 2)*100);
}

var num1 = num1gen();
var num2 = num2gen();
var answer = num1 * num2;

var correct = 0;
var incorrect = 0;

question.textContent = num1+"x"+num2+" = ?";

//alert(window.innerWidth+", "+window.innerHeight);


function keypadPress(event){
    answerText.textContent += event.target.textContent;
    answerCheck();
}

function answerCheck(){
    console.log(answer.toString().length);
    if(answerText.textContent.toString().length == answer.toString().length){
        if(answerText.textContent == answer){correct++;}else{incorrect++;}

        num1 = num1gen();
        num2 = num2gen();
        answer = num1 * num2;
        question.textContent = num1+"x"+num2+" = ?";
        answerText.textContent = "";

        correctText.textContent = "Correct: "+correct;
        incorrectText.textContent = "Incorrect: "+incorrect;
    }
}

for(let i = 0; i < keypadButtons.length; i++){
    keypadButtons[i].addEventListener("click", keypadPress);
}