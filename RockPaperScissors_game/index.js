const imogeShow = ['✌','✊','🖐'];
const imogeShowin = document.getElementById("ImogeShow");
const userPick = document.querySelectorAll("#pickbtn")

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
    console.log(userPick)

}
for(let i = 0 ; i<userPick.length;i++){
    userPick[i].addEventListener('click',click);
    
}

