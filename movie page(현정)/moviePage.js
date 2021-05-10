// chevron
const rightArrow = document.querySelectorAll('.fa-chevron-right');
const leftArrow = document.querySelectorAll('.fa-chevron-left');
const apchRight = document.querySelector('.apchRight');
const apchLeft = document.querySelector('.apchLeft');
const ccchRight = document.querySelector('.ccchRight');
const ccchLeft = document.querySelector('.ccchLeft');
const gchRight = document.querySelector('.gchRight');
const gchLeft = document.querySelector('.gchLeft');
const vchRight = document.querySelector('.vchRight');
const vchLeft = document.querySelector('.vchLeft');
const clchRight = document.querySelector('.clchRight');
const clchLeft = document.querySelector('.clchLeft');
const chevron = document.querySelectorAll('.chevron');

// 슬라이드 container
const appearanceProductionUl = document.querySelector('.appearanceProduction');
const productionUl = document.querySelector('.production');
const commentUl = document.querySelector('.commentContentSpace');
const galleryImages = document.querySelector('.galleryImages');
const videos = document.querySelector('.videos');
const collectionContentUl = document.querySelector('.collectionContentUl');

// icon
const faCaretDown = document.querySelector('.fa-caret-down');
const faPlus = document.querySelector('.fa-plus');
const emptyBookMarkModal = document.querySelector('.emptyBookMarkModal');
const fullBookMark = document.querySelector('.fullBookMark');
const emptyBookMark = document.querySelector('.emptyBookMark');

//modal.button
const markModal = document.querySelector('.markModal');
const mark = document.querySelector('.mark');
const mdCancel = document.querySelector('.mdCancel');

// modal
const modalBackGround = document.querySelector('.modalBackGround');
const MDWantToSeeMore = document.querySelector('.MDWantToSeeMore');
const MDNonMember = document.querySelector('.MDNonMember');
const mdLeftIconBox = document.querySelector('.mdLeftIconBox');

// button
const similarSeeMore = document.querySelector('.similarSeeMore');
const button = document.querySelectorAll('button');

// 비슷한 작품
const similarWork = document.querySelector('.similarWork');
const similarContentUl = document.querySelector('.similarContentUl');



const section2LeftContainer = document.querySelector('.section2LeftContainer');
const productionLi = document.querySelector('.productionList');
const body = document.querySelector('body');


const leftSideWidth = 60.4;
const rightSideWidth = 25;
const similarContentUlWidth = 85.2;
let count = 0;


// function
// 슬라이드
function onProductionRightChevron() {
    count = count - leftSideWidth;
    productionUl.style.transform = `translateX(${count}rem)`;
}

function onProductionLeftChevron() {
    count = count + leftSideWidth;
    productionUl.style.transform = `translateX(${count}rem)`;
}

function onCommentRightChevron() {
    count = count - leftSideWidth;
    commentUl.style.transform = `translateX(${count}rem)`;
}

function onCommentLeftChevron() {
    count = count + leftSideWidth;
    commentUl.style.transform = `translateX(${count}rem)`;
}

function onGRightChevron() {
    count = count - rightSideWidth;
    galleryImages.style.transform = `translateX(${count}rem)`;
}

function onGLeftChevron() {
    count = count + rightSideWidth;
    galleryImages.style.transform = `translateX(${count}rem)`;
}

function onVRightChevron() {
    count = count - rightSideWidth;
    videos.style.transform = `translateX(${count}rem)`;
}

function onVLeftChevron() {
    count = count + rightSideWidth;
    videos.style.transform = `translateX(${count}rem)`;
}

function onClRightChevron() {
    count = count - leftSideWidth;
    collectionContentUl.style.transform = `translateX(${count}rem)`;
}

function onClLightChevron() {
    count = count + leftSideWidth;
    collectionContentUl.style.transform = `translateX(${count}rem)`;
}

// 더보기 버튼
function onSimilarSeeMoreBtn(){
    if(window.getComputedStyle(similarContentUl).visibility === "visible"){
        similarSeeMore.style.visibility = 'hidden';
    }
    count = count + similarContentUlWidth;
    similarContentUl.style.height = `calc(85.2rem + ${count}rem)`;
    similarWork.style.height = `calc(97.5rem + ${count}rem)`;
}


// modal
function onModalBtn(){
    modalBackGround.style.display = 'block';
    MDWantToSeeMore.style.display = 'block';
}

function onMdCancelBtn(){
    modalBackGround.style.display = 'none';
    MDWantToSeeMore.style.display = 'none';
    onFullBookMarkModal();
}

function markBtnColorChange(){
    mark.style.backgroundColor = '#F6F6F6';
    mark.style.color = 'black';
    mark.style.border = 'none';
    markModal.style.backgroundColor = '#F6F6F6';
    markModal.style.color = 'black';
    faCaretDown.style.color = '#D9D9D9';
}

function emptyToFullBookMarkChange(){
    emptyBookMarkModal.style.display = 'none';
    fullBookMark.style.display = 'inline';
}

function fullToemptyBookMarkChange(){
    fullBookMark.style.display = 'none';
    emptyBookMarkModal.style.display = 'inline';
}

function plusToBookMark(){
    faPlus.style.display = 'none';
    emptyBookMark.style.display = 'inline';
}

function bookMarkToPlus(){
    emptyBookMark.style.display = 'none';
    faPlus.style.display = 'inline';
}

function onEmptyBookMarkModal(){
    plusToBookMark();
    emptyToFullBookMarkChange();
}

function onFullBookMarkModal(){
    bookMarkToPlus();
    fullToemptyBookMarkChange();
}

function onMarkBtn(){
    if(faPlus.style.display == 'none'){
        onModalBtn();
        return;
    }
    markBtnColorChange();
    onEmptyBookMarkModal();
}

function onfullBookMark(){
    onMdCancelBtn();
    fullToemptyBookMarkChange();
    bookMarkToPlus();
}



// addEventListener
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
            case 'gchRight':
                onGRightChevron();
                break;
            case 'gchLeft':
                onGLeftChevron();
                break;
            case 'vchRight':
                onVRightChevron();
                break;
            case 'vchLeft':
                onVLeftChevron();
                break;
            case 'clchRight':
                onClRightChevron();
                break;
            case 'clchLeft':
                onClLightChevron();
                break;
            case 'similarSeeMore':
                onSimilarSeeMoreBtn();
                break;
            case 'fa-caret-down':
                onModalBtn();
                break;
            case 'markModal':
                onModalBtn();
                break;
            case 'mdCancel':
                onMdCancelBtn();
                break;
            case 'mark':
                onMarkBtn();
                break;
            case 'fullBookMark':
                onfullBookMark();
                break;
            case 'emptyBookMarkModal':
                onEmptyBookMarkModal();
                break;
        }
    }
})



