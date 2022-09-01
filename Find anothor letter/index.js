let wordIn = document.getElementById("inner_text");
let putword = wordIn.getElementsByTagName("td");


let randomNum = Math.floor(Math.random() * (putword.length));
let time = document.getElementsByClassName("time")[0];

let sec = "15"
window.onload = startGame();

function startGame(){
    let x = setInterval(function(){
        
        time.innerHTML = sec + "초";
        sec--;
    
        if(sec<0){
            clearInterval(x);
            time.innerHTML = "시간초과!!";
    }
    },1000);
    
    for(let i = 0 ; i <putword.length ;i++){
        if(i == randomNum){
            putword[i].innerHTML = '뜗';
            putword[i].addEventListener('click',()=>{
                alert('👍성공')
                clearInterval(x);
                addRow();
            });
            
        }
        else{
            putword[i].innerHTML = '뚧'
            putword[i].addEventListener('click',()=>{
                alert('❌')
            })
        }
    }
}


function addRow(){
    let newRow = wordIn.insertRow(0);
    let newCell = newRow.insertCell(0);
    let copy = wordIn.rows[2].cells[0].cloneNode(true);

    newCell.innerHTML = copy.innerHTML;
    startGame();
}
