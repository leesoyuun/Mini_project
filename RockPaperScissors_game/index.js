const imogeShow = ['✌','✊','🖐'];
const imogeShowin = document.getElementById("ImogeShow");
console.log(imogeShowin)
let index = 0;
function Random() {
    imogeShowin.innerText = `${imogeShow[index++]}`;
    if(index == imogeShow.length){
        index = 0;
    }
}

let randomImoge = setInterval(Random,1000);
