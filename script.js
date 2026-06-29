
const cube=document.getElementById("cube");
let rx=-25, ry=35;
let drag=false,lx=0,ly=0;
cube.onpointerdown=e=>{drag=true;lx=e.clientX;ly=e.clientY;}
window.onpointerup=()=>drag=false;
window.onpointermove=e=>{
 if(!drag)return;
 ry+=(e.clientX-lx)*0.5;
 rx-=(e.clientY-ly)*0.5;
 lx=e.clientX;ly=e.clientY;
 cube.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
};
document.getElementById("complete").onclick=()=>{
 cube.classList.add("completed");
 cube.style.transform=`rotateX(-20deg) rotateY(${ry+360}deg)`;
 document.getElementById("reward").classList.remove("hidden");
 localStorage.setItem("face1","complete");
};
