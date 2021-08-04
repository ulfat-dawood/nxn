
// if (typeof(Storage) !== "undefined") {
//     localStorage.setItem("UR-1", 2);
//     localStorage.setItem("UR-2", 2);
//     localStorage.setItem("UR-3", 2);
//     localStorage.setItem("UR-4", 2);
//     localStorage.setItem("UR-5", 2);
//     localStorage.setItem("UR-6", 2);
//     localStorage.setItem("UR-7", 2);
//     localStorage.setItem("UR-8", 2);

//     localStorage.setItem("UL-1", 2);
//     localStorage.setItem("UL-2", 2);
//     localStorage.setItem("UL-3", 2);
//     localStorage.setItem("UL-4", 2);
//     localStorage.setItem("UL-5", 2);
//     localStorage.setItem("UL-6", 2);
//     localStorage.setItem("UL-7", 2);
//     localStorage.setItem("UL-8", 2);

//     localStorage.setItem("LR-1", 2);
//     localStorage.setItem("LR-2", 2);
//     localStorage.setItem("LR-3", 2);
//     localStorage.setItem("LR-4", 2);
//     localStorage.setItem("LR-5", 2);
//     localStorage.setItem("LR-6", 2);
//     localStorage.setItem("LR-7", 2);
//     localStorage.setItem("LR-8", 2);

//     localStorage.setItem("LL-1", 2);
//     localStorage.setItem("LL-2", 2);
//     localStorage.setItem("LL-3", 2);
//     localStorage.setItem("LL-4", 2);
//     localStorage.setItem("LL-5", 2);
//     localStorage.setItem("LL-6", 2);
//     localStorage.setItem("LL-7", 2);
//     localStorage.setItem("LL-8", 2);

//     localStorage.setItem("currentTooth", "");
    



//     localStorage.lastname; 
// }
window.addEventListener('load', ()=>{
    teeth.forEach((tooth)=>{
        let theToothStatus= parseInt(localStorage.getItem(tooth.id));
        console.log('teeth',theToothStatus)

        tooth.style.filter= filters[theToothStatus]; 
 
    
})

})

const select= document.querySelector('#slct'); 

select.addEventListener('change',()=>{
    let crntTooth= localStorage.currentTooth; 
    //Change the tooth status:
    localStorage.setItem(crntTooth, select.value);
    const toothModalImg= document.querySelector('#tooth-img');
    toothModalImg.style.filter= filters[parseInt(select.value)]; 


    teeth.forEach((tooth)=>{
            let theToothStatus= parseInt(localStorage.getItem(tooth.id));
            tooth.style.filter= filters[theToothStatus]; 
            


            // var toothId= tooth.id; 
            // msg=[`${toothId} is diagnosed`,`treating ${toothId}`, `${toothId} has no history`]
            // console.log(msg[currentStatus])
            // msgBox.innerHTML=msg[currentStatus]; 
        
    })


})


