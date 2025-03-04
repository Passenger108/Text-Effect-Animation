
let words = ["Engineer.", "Developer.", "Student."];

let element = document.querySelector(".container h1");

let charIndex =0, wordIndex =0;

const update = function () {
    element.textContent = `I am a${wordIndex==0?"n":""} ${words[wordIndex].slice(0,charIndex)}`;
    charIndex++;
    if(charIndex>words[wordIndex].length){
        charIndex=0;
        wordIndex++;
        if(wordIndex>2)
            wordIndex=0;   
    }    
}

setInterval(update,200);