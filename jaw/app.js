const lowerJaw= document.querySelectorAll(".lower-jaw img");
const buttons= document.querySelectorAll(".buttons div");
const msgBox= document.querySelector('#msg');

var currentStatus= '2';
const filters= ['invert(17%) sepia(56%) saturate(6000%) hue-rotate(50deg) brightness(97%) contrast(127%)','invert(17%) sepia(56%) saturate(6000%) hue-rotate(1deg) brightness(97%) contrast(127%)','none']

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        currentStatus= parseInt(button.id); 
    })
})

lowerJaw.forEach((tooth)=>{
    tooth.addEventListener('click', ()=>{
        tooth.style.filter= filters[currentStatus]; 

        var toothId= tooth.id; 
        msg=[`${toothId} is diagnosed`,`treating ${toothId}`, `${toothId} has no history`]
        console.log(msg[currentStatus])
        msgBox.innerHTML=msg[currentStatus]; 
    })
})

