const imogeShow = ['✌','✊','🖐'];
let index = 0;
function Random() {
    let image = imogeShow[index++];
    if(index == imogeShow.length){
        index = 0;
    }
    console.log(image);
}

let randomImoge = setInterval(Random,1000);
