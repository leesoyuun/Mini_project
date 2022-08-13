let wordIn = document.getElementById("inner_text");
let putword = wordIn.getElementsByTagName("td");
let randomNum = Math.floor(Math.random() * 10)  + 6;


for(let i = 0 ; i <putword.length ;i++){
    if(i == randomNum){
        putword[i].innerHTML = '뜗';
        putword[i].addEventListener('click',()=>{
            alert('👍성공')
        })
    }
    else{
        putword[i].innerHTML = '뚧'
        putword[i].addEventListener('click',()=>{
            alert('❌')
        })
    }
}

