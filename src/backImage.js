const body = document.querySelector("body");

const IMG_NUM = 6;
const BG_CLS = "bgImage";

function getBGImage(imgNum){
    const BGimg = new Image();
    BGimg.src = `images/${imgNum}.jpg`;
    BGimg.classList.add(BG_CLS);

    body.appendChild(BGimg);
}
function getRandNum(){
    const num = Math.floor(Math.random()*IMG_NUM)+1;
    return num;
}
function loadBGImage(){
    const randNum = getRandNum();
    getBGImage(randNum);
}
function init(){
    loadBGImage();
}
init();