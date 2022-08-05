const imogeShow = ['✌','✊','🖐'];
const imogeShowin = document.getElementById("ImogeShow");
const scissorsBtn = document.getElementById("scissors").addEventListener('click',scissorclick);
const paperBtn = document.getElementById("paper").addEventListener('click',paperclick);
const rockBtn = document.getElementById("rock").addEventListener('click',rockclick);
const reBtn = document.getElementById("re").addEventListener('click',Re);

let index = 0;
function Random() {
    imogeShowin.innerText = `${imogeShow[index++]}`;
    if(index == imogeShow.length){
        index = 0;
    }
}   

let randomImoge = setInterval(Random,1000);


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
    }
    else{
        alert("이겼다.")
    }

}
function paperclick(){
    click();
    if(imogeShowin.innerText == "✌"){
        alert("졌다.");
    }
    else if(imogeShowin.innerText == "✊" ){
        alert("이겼다.");
    }
    else{
        alert("비겼다.")
    }

}
function rockclick(){
    click();
    if(imogeShowin.innerText == "✌"){
        alert("이겼다.");
    }
    else if(imogeShowin.innerText == "✊" ){
        alert("비겼다.");
    }
    else{
        alert("졌다.")
    }
}
function Re(){
    setInterval(Random,1000);
}