let bigfornt=document.querySelector(".easy .bigfont");
let bigfornt1=document.querySelector(".plan .bigfont");

let body=document.querySelector("body");
let smallfont=document.querySelector(".smallfont");
let get=document.querySelector(".get");
let tex=document.querySelectorAll(".tex");
let signin=document.querySelector(".signin");
let signup=document.querySelector(".signup");
window.addEventListener("resize",function(){
    let x=body.getBoundingClientRect();
    console.log(x);
if(x.height<4202.39990234375 || x.width<828.7999877929688){
    console.log("hiii")
    smallfont.style.fontSize='10px';
    get.style.fontSize='10px';
    signup.style.fontSize='10px';
    signin.style.fontSize='10px'
    for(let i=0;i<tex.length;i++){
        tex[i].style.fontSize='10px';
    }
    bigfornt.style.fontSize='20px';
    bigfornt1.style.fontSize='20px';
    bigfornt.style.fontWeight='350';
    bigfornt1.style.fontWeight='350';
}
else if(x.height>4202.39990234375 || x.width>828.7999877929688){
    smallfont.style.fontSize='20px';
    get.style.fontSize='20px';
    signup.style.fontSize='20px';
    signin.style.fontSize='20px'
    for(let i=0;i<tex.length;i++){
        tex[i].style.fontSize='20px';
    }
    bigfornt.style.fontSize='45px';
    bigfornt.style.fontWeight='900';
    bigfornt1.style.fontSize='45px';
    bigfornt1.style.fontWeight='900';

}
})
