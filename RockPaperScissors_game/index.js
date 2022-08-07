const imogeShow = ['✌','✊','🖐'];
const imogeShowin = document.getElementById("ImogeShow");
const scissorsBtn = document.getElementById("scissors").addEventListener('click',scissorclick);
const paperBtn = document.getElementById("paper").addEventListener('click',paperclick);
const rockBtn = document.getElementById("rock").addEventListener('click',rockclick);
const reBtn = document.getElementById("re").addEventListener('click',Re);
const computerScore = document.getElementById("ComScore")
const PeopleScore = document.getElementById("PeopleScore")

let index = 0;
let comScore = 0;
let PepScore = 0;

function Random() {
    imogeShowin.innerText = `${imogeShow[index++]}`;
    if(index == imogeShow.length){
        index = 0;
    }
}   

let randomImoge = setInterval(Random,100);


function click() {
    clearInterval(randomImoge);
}
function scissorclick(){
    click();   
    if(imogeShowin.innerText == "✌"){
        alert("같다.");
    }
    else if(imogeShowin.innerText == "✊" ){
        alert("졌다.");
        computerScore.innerText = `${'컴퓨터 점수 : ' + ++comScore}`;
    }
    else{
        alert("이겼다.");
        PeopleScore.innerText = `${'내점수 : ' + ++PepScore}`;
        
    }
    

}
function paperclick(){
    click();
    if(imogeShowin.innerText == "✌"){
        alert("졌다.");
        computerScore.innerText = `${'컴퓨터 점수 : ' + ++comScore}`;
    }
    else if(imogeShowin.innerText == "✊" ){
        alert("이겼다.");
        PeopleScore.innerText = `${'내점수 : ' + ++PepScore}`;
    }
    else{
        alert("비겼다. 다시!")
    }
    
}
function rockclick(){
    click();
    if(imogeShowin.innerText == "✌"){
        alert("이겼다.");
        PeopleScore.innerText = `${'내점수 : ' + ++PepScore}`;
    }
    else if(imogeShowin.innerText == "✊" ){
        alert("비겼다. 다시!");
    }
    else{
        alert("졌다.");
        computerScore.innerText = `${'컴퓨터 점수 : ' + ++comScore}`;
    }
        
}

function Re(){
    randomImoge = setInterval(Random,100);
}