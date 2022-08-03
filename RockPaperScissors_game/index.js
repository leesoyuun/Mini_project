const imogeShow = ['✌','✊','🖐'];
const imogeShowin = document.getElementById("ImogeShow");
const scissorsBtn = document.getElementById("scissors").addEventListener('click',scissorclick);
const paperBtn = document.getElementById("paper").addEventListener('click',paperclick);
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
    if(imogeShowin.innerText == "✌"){
        console.log("같다.");
    }
    else if(imogeShowin.innerText == "✊" ){
        console.log("졌다.");
    }
    else{
        console.log("이겼다.")
    }

}
function paperclick(){
    click();
    if(imogeShowin.innerText == "✌"){
        console.log("졌다.");
    }
    else if(imogeShowin.innerText == "✊" ){
        console.log("이겼다.");
    }
    else{
        console.log("비겼다.")
    }

}
function rockclick(){
    click();
    if(imogeShowin.innerText == "✌"){
        console.log("이겼다.");
    }
    else if(imogeShowin.innerText == "✊" ){
        console.log("비겼다.");
    }
    else{
        console.log("졌다.")
    }
}
