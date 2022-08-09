let wordIn = document.getElementById("inner_text");
let putword = wordIn.getElementsByTagName("td")
let randomNum = Math.floor(Math.random() * 10)  + 6
console.log(randomNum)
for(let i = 0 ; i <putword.length ;i++){
    if(i == randomNum)
        putword[i].innerHTML = '뜗';
    else
        putword[i].innerHTML = '뚧'
}


