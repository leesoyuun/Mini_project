let wordIn = document.getElementById("letter");
let word = Array(16);

wordIn.innerText = word.fill('뚧');

console.log(word);

function random(){
    let randomNum = Math.floor(Math.random())*16;

}