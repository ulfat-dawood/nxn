const checkbox= document.querySelector('#menu-checkbox');
const sidebar= document.querySelector('aside');
const overlay= document.querySelector('.overlay');

 
const toggleSideBar= ()=>{
    if(checkbox.checked){
    sidebar.classList.add('collapse');
    overlay.classList.remove('active');
    }else{
    sidebar.classList.remove('collapse');
    overlay.classList.add('active');
    }
}

//Event listeners
window.addEventListener('load', toggleSideBar)
checkbox.addEventListener('click', toggleSideBar)   
overlay.addEventListener('click',()=>{
    checkbox.checked= !checkbox.checked; 
    toggleSideBar(); 
})






