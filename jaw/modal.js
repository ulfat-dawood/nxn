const openModal= document.querySelectorAll(' [data-open-modal]');
const closeModal= document.querySelectorAll('[data-close-modal]');
const modalOverlay= document.querySelector('.modal-overlay');


openModal.forEach((btn)=>{
    btn.addEventListener('click',()=>{

        toothId= btn.id; 
        localStorage.currentTooth= toothId;
        
        title= document.querySelector('#tooth-title span'); 
        toothImg= document.querySelector('#tooth-img');

        title.innerHTML= toothId;
        toothImg.src= `./img/${toothId}.png`; 
        let theToothStatus= parseInt(localStorage.getItem(btn.id));
        toothImg.style.filter= filters[theToothStatus]; 
        const modal= document.querySelector('#modal-1');
        console.log(modal); 
        const modalOverlay= document.querySelector(`.modal-overlay[data-close-modal='${btn.dataset.openModal}']`);

        modal.classList.add('active')
        modalOverlay.classList.add('active')
    })
})

closeModal.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const modal= document.querySelector(btn.dataset.closeModal);
        const modalOverlay= document.querySelector(`.modal-overlay[data-close-modal='${btn.dataset.closeModal}']`);

        modal.classList.remove('active')
        modalOverlay.classList.remove('active')
    })
})