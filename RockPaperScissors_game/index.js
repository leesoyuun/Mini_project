const imogeShow = ['β','β','π'];
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
    if(imogeShowin.innerText == "β"){
        alert("κ°λ€.");
    }
    else if(imogeShowin.innerText == "β" ){
        alert("μ‘λ€.");
        computerScore.innerText = `${'μ»΄ν¨ν° μ μ : ' + ++comScore}`;
    }
    else{
        alert("μ΄κ²Όλ€.");
        PeopleScore.innerText = `${'λ΄μ μ : ' + ++PepScore}`;
        
    }
    

}
function paperclick(){
    click();
    if(imogeShowin.innerText == "β"){
        alert("μ‘λ€.");
        computerScore.innerText = `${'μ»΄ν¨ν° μ μ : ' + ++comScore}`;
    }
    else if(imogeShowin.innerText == "β" ){
        alert("μ΄κ²Όλ€.");
        PeopleScore.innerText = `${'λ΄μ μ : ' + ++PepScore}`;
    }
    else{
        alert("λΉκ²Όλ€. λ€μ!")
    }
    
}
function rockclick(){
    click();
    if(imogeShowin.innerText == "β"){
        alert("μ΄κ²Όλ€.");
        PeopleScore.innerText = `${'λ΄μ μ : ' + ++PepScore}`;
    }
    else if(imogeShowin.innerText == "β" ){
        alert("λΉκ²Όλ€. λ€μ!");
    }
    else{
        alert("μ‘λ€.");
        computerScore.innerText = `${'μ»΄ν¨ν° μ μ : ' + ++comScore}`;
    }
        
}

function Re(){
    randomImoge = setInterval(Random,100);
}