const imogeShow = ['✌','✊','🖐'];
const imogeShowin = document.getElementById("ImogeShow");

const scissorsBtn = document.getElementById("scissors").addEventListener('click',scissorclick);
const paperBtn = document.getElementById("paper").addEventListener('click',paperclick);;
const rockBtn = document.getElementById("rock").addEventListener('click',rockclick);

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
    console.log('가위클릭');
}
function paperclick(){
    click();
    console.log('보자기 클릭')
}
function rockclick(){
    click();
    console.log('주먹 클릭')
}
