const rightArrow = document.querySelector('.fa-chevron-right');
const leftArrow = document.querySelector('.fa-chevron-left');
const appearanceProduction = document.querySelector('.appearanceProduction');
const productionUl = document.querySelector('.production');
const chevron = document.querySelector('.chevron');
const body = document.querySelector('body');

const number = 0;

appearanceProduction.addEventListener('click', (e)=>{
    const target = e.target;
    if(target.classList.contains('fa-chevron-right')){
        const num = number - 60.4;
        productionUl.style.transform = `translateX(${num}rem)`;
    }
    if(target.classList.contains('fa-chevron-left')){
        const num = number + 60.4;
        productionUl.style.transform = `translateX(${num}rem)`;
    }
})

productionUl.addEventListener('mouseover', ()=>{
    chevron.style.visibility = "visible";
})

// appearanceProduction.addEventListener('mouseout', ()=>{
//     chevron.style.visibility = "hidden";
// })