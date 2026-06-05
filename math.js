const answerText = document.getElementById("answerText");
const keypadButtons = document.getElementsByClassName("keypadButton");

var answer = "";

function keypadPress(event){
    console.log(event.target.textContent);
    answerText.textContent += event.target.textContent;
}

for(let i = 0; i < keypadButtons.length; i++){
    console.log(keypadButtons[i]);
    keypadButtons[i].addEventListener("click", keypadPress);
}