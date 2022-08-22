let wordIn = document.getElementById("inner_text");
let putword = wordIn.getElementsByTagName("td");
let next = document.getElementsByClassName("btn")[0].addEventListener('click',nextstage());

let randomNum = Math.floor(Math.random() * 3);
console.log(randomNum)
let time = document.getElementsByClassName("time")[0];
let sec = "15"

let x = setInterval(function(){
    time.innerHTML = sec + "초";
    sec--;

    if(sec<0){
        clearInterval(x);
        time.innerHTML = "시간초과!!";
        alert('😂실패!');
}
},1000);

for(let i = 0 ; i <putword.length ;i++){
    if(i == randomNum){
        putword[i].innerHTML = '뜗';
        putword[i].addEventListener('click',()=>{
            alert('👍성공')
            clearInterval(x);
        });
        
    }
    else{
        putword[i].innerHTML = '뚧'
        putword[i].addEventListener('click',()=>{
            alert('❌')
        })
    }
}

function nextstage() {
    let addCell = wordIn.insertCell(0);

    addCell.innerHTML = '뚧'
}