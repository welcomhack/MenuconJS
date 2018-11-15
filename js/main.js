

const menuTogle = document.getElementById("menuToggle");
const menulist = document.getElementById("onBody");
const audioM = document.getElementById("audiom");
const audio1 = document.getElementById("audio1");
if(menuTogle){
    menuTogle.addEventListener("click",e=> {
        audioM.play();
        menuTogle.classList.toggle("menuIsOpen");
        menulist.classList.toggle("onBody");
    });
}

function sonido_1(){
    audio1.play();
}

// const item1 = document.getElementsByClassName("link");
// if(item1){
//     item1.addEventListener("mouseover", e=>{
//         audio1.play();
//     });
// }


