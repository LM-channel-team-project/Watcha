// chevron
const rightArrow = document.querySelectorAll('.fa-chevron-right');
const leftArrow = document.querySelectorAll('.fa-chevron-left');
const apchRight = document.querySelector('.apchRight');
const apchLeft = document.querySelector('.apchLeft');
const ccchRight = document.querySelector('.ccchRight');
const ccchLeft = document.querySelector('.ccchLeft');
const chevron = document.querySelectorAll('.chevron');

const appearanceProduction = document.querySelector('.appearanceProduction');
const productionUl = document.querySelector('.production');
const productionLi = document.querySelector('.productionList');
const commentUl = document.querySelector('.commentContentSpace');
const body = document.querySelector('body');

let count = 0;

function onProductionRightChevron() {
    count = count - 60.4;
    productionUl.style.transform = `translateX(${count}rem)`;
}

function onProductionLeftChevron() {
    count = count + 60.4;
    productionUl.style.transform = `translateX(${count}rem)`;
}

function onCommentRightChevron() {
    count = count - 60.4;
    commentUl.style.transform = `translateX(${count}rem)`;
}

function onCommentLeftChevron() {
    count = count + 60.4;
    commentUl.style.transform = `translateX(${count}rem)`;
}


// 슬라이드
body.addEventListener('click', (e)=>{
    const targets = e.target.classList.value.split(" ");
    for(const target of targets){
        switch(target){
            case 'apchRight':
                onProductionRightChevron();
                break;
            case 'apchLeft':
                onProductionLeftChevron();
                break;
            case 'ccchRight':
                onCommentRightChevron();
                break;
            case 'ccchLeft':
                onCommentLeftChevron();
                break;
        }
    }

})



