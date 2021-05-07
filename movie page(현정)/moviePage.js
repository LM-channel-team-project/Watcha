const rightArrow = document.querySelector('.fa-chevron-right');
const leftArrow = document.querySelector('.fa-chevron-left');
const appearanceProduction = document.querySelector('.appearanceProduction');
const productionUl = document.querySelector('.production');
const productionLi = document.querySelector('.productionList');
const chevron = document.querySelector('.chevron');
const body = document.querySelector('body');

let count = 0;

appearanceProduction.addEventListener('click', (e)=>{
    const target = e.target;
    if(target.classList.contains('fa-chevron-right')){
        count = count - 60.4;
        
        productionUl.style.transform = `translate(${count}rem)`;
    }
    if(target.classList.contains('fa-chevron-left')){
        count = count + 60.4;
        productionUl.style.transform = `translate(${count}rem)`;
    }
})

console.log(appearanceProduction.clientWidth);




productionUl.addEventListener('mouseover', ()=>{
    chevron.style.visibility = "visible";
})

// appearanceProduction.addEventListener('mouseout', ()=>{
//     chevron.style.visibility = "hidden";
// })