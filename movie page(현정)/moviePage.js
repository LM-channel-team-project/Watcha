'use strict';
import * as srcLike from '/movie page(현정)/src/like.js';
import * as srcColor from '/movie page(현정)/src/color.js';

//nav
const nav = document.querySelector('.nav')
const logo = document.querySelector('.logo')
const navProfile = document.querySelector('.navProfile');
const logoText = document.querySelector('.logoText');
const logoMovie = document.querySelector('.logoMovie');
const logoTv = document.querySelector('.logoTv');
const logoBook = document.querySelector('.logoBook');
const searchBox = document.querySelector('.searchBox');
const searchBoxInput = document.querySelector('.searchBoxInput');
const navEst = document.querySelector('.navEst');
const navSearch = document.querySelector('.navSearch');

//footer
const footer1 = document.querySelector('.footer1');
const footer2 = document.querySelector('.footer2');
const footer3 = document.querySelector('.footer3');
const footer4 = document.querySelector('.footer4');


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
const RgvchRight = document.querySelector('.RgvchRight');
const RgvchLeft = document.querySelector('.RgvchLeft');

// 기본 정도 더 보기
const seeMoreOverview = document.querySelector('.seeMoreOverview');

// 슬라이드 container
const appearanceProduction = document.querySelector('.appearanceProduction');
const productionUl = document.querySelector('.production');
const commentContentSpace = document.querySelector('.commentContentSpace');
const galleryImages = document.querySelector('.galleryImages');
const videos = document.querySelector('.videos');
const collectionContentUl = document.querySelector('.collectionContentUl');
const RgalleryImages = document.querySelector('.RgalleryImages');

// icon
const faCaretDown = document.querySelector('.fa-caret-down');
const plusFirst = document.querySelector('.plusFirst');
const plusLater = document.querySelector('.plusLater');
const emptyBookMarkModal = document.querySelector('.emptyBookMarkModal');
const fullBookMarkModal = document.querySelector('.fullBookMarkModal');
const emptyBookMark = document.querySelector('.emptyBookMark');
const fullWatchingEye = document.querySelector('.fullWatchingEye');
const watchingEyeModal = document.querySelector('.watchingEyeModal');
const fullWatchingEyeModal = document.querySelector('.fullWatchingEyeModal');
const faBanModal = document.querySelector('.fa-ban-modal');
const faBanMark = document.querySelector('.fa-ban-mark');
const ccThumbs = document.querySelectorAll('.ccThumb');
const noneMembetFatimes = document.querySelector('noneMembetFatimes');
const star = document.querySelectorAll('.fa-star');

//modal.button
const markModal = document.querySelector('.markModal');
const mark = document.querySelector('.mark');
const mdCancel = document.querySelector('.mdCancel');
const topLeftCommentBtn = document.querySelector('.topLeftComment');
const alertNo = document.querySelector('.alertNo');
const alertOK = document.querySelector('.alertOK');
const cancelAlert = document.querySelector('.cancelAlert');


// modal
const mdWantToSeeMoreContainer = document.querySelector('.mdWantToSeeMoreContainer');
const modalBackGround = document.querySelector('.modalBackGround');
const mdWantToSeeMore = document.querySelector('.mdWantToSeeMore');
const mdNonMember = document.querySelector('.mdNonMember');
const mdLeftIconBox = document.querySelector('.mdLeftIconBox');
const mdRightIconBox = document.querySelector('.mdRightIconBox');
const mdLeftIconText = document.querySelector('.mdLeftIconText');
const mdRightIconText = document.querySelector('.mdRightIconText');
const markWatchingText = document.querySelector('.markWatchingText');
const markWantSeeText = document.querySelector('.markWantSeeText');
const mdNoThanksText = document.querySelector('.mdNoThanksText');
const mdNoThanks = document.querySelector('.mdNoThanks');
const markNoThanksText = document.querySelector('.markNoThanksText');
const mdNonMemberContainer = document.querySelector('.mdNonMemberContainer');
const mdCommentContainer = document.querySelector('.mdCommentContainer');
const mdCommentTopText = document.querySelector('.mdCommentTopText');
const commentInput = document.querySelector('.commentInput');
const mdComment = document.querySelector('.mdComment');
const mdCommentText = document.querySelector('.mdCommentText');

// button
const similarSeeMore = document.querySelector('.similarSeeMore');
const button = document.querySelectorAll('button');

// star
const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');
const star3 = document.querySelector('.star3');
const star4 = document.querySelector('.star4');
const star5 = document.querySelector('.star5');
const starText = document.querySelector('.estimateText');
const cancelStar = document.querySelector('.cancelStar');

// 비슷한 작품
const similarWork = document.querySelector('.similarWork');
const similarContentUl = document.querySelector('.similarContentUl');

const section2LeftContainer = document.querySelector('.section2LeftContainer');
const productionLi = document.querySelector('.productionList');
const numOfthumbsUp = document.querySelectorAll('.numOfthumbsUp');
const ccNums = document.querySelectorAll('.ccNum');
const ccComments = document.querySelectorAll('.ccComment');

const container = document.querySelector('.container');
const body = document.querySelector('body');
const section2LeftContents = document.querySelector('.section2LeftContents');

const Rgallery = document.querySelector('.Rgallery');
const collection = document.querySelector('.collection');
const gallery = document.querySelector('.gallery');
const video = document.querySelector('.video');


// 코멘트
const afterTrash = document.querySelector('.afterTrash');
const section2LeftTopContainer = document.querySelector('.section2LeftTopContainer');
const afterCommentContainer = document.querySelector('.afterCommentContainer');
let afterCommentText = document.querySelector('.afterCommentText');
const commentTextarea = document.querySelector('.commentTextarea');
const comment = document.querySelector('.comment');

// 전역변수
const leftSideWidth = 60.4;
const rightSideWidth = 25;
const similarContentUlWidth = 85.2;
let count = 0;
let check = false;
let productCount = 0;
let comCount = 0;
let lchCount = 0;
let colCount = 0;
let galCount = 0;
let vidCount = 0;

let countPro = 0;
let countGal = 0;
let countCol = 0;
let countG = 0;
let countV = 0;


// function
// 슬라이드
function onLeftSideRightChevron(ul) {
    if(body.clientWidth > 696){
        // console.log('오');
        if(ul == productionUl && productCount === 2){
            return;
        }
        if(ul == RgalleryImages && lchCount == 1){
            return;
        }
        if(ul == collectionContentUl && colCount == 1){
            return;
        }
        if(ul == productionUl){
            countPro = countPro - leftSideWidth;
            ul.style.transform = `translateX(${countPro}rem)`;
            productCount++;
            return;
        }
        if(ul == RgalleryImages){
            countGal = countGal - leftSideWidth;
            ul.style.transform = `translateX(${countGal}rem)`;
            lchCount++;
            return;
        }
        if(ul == collectionContentUl){
            countCol = countCol - leftSideWidth;
            ul.style.transform = `translateX(${countCol}rem)`;
            colCount++;
            return;
        }
    }else{
        if(ul == productionUl && productCount === 4){
            return;
        }
        if(ul == RgalleryImages && lchCount == 2){
            return;
        }
        if(ul == collectionContentUl && colCount == 3){
            return;
        }
        if(ul == productionUl){
            countPro = countPro - section2LeftContents.clientWidth - 10;
            ul.style.transform = `translateX(${countPro}px)`;
            productCount++;
            return;
        }
        if(ul == RgalleryImages){
            countGal = countGal - section2LeftContents.clientWidth - 10;
            ul.style.transform = `translateX(${countGal}px)`;
            lchCount++;
            return;
        }
        if(ul == collectionContentUl){
            countCol = countCol - section2LeftContents.clientWidth - 10;
            ul.style.transform = `translateX(${countCol}px)`;
            colCount++;
            return;
        }
    }
}

function onLeftSideLeftChevron(ul) {
    if(body.clientWidth > 696){
        // console.log('왼');
        if(ul == productionUl && productCount === 0){
            return;
        }
        if(ul == RgalleryImages && lchCount == 0){
            return;
        }
        if(ul == collectionContentUl && colCount == 0){
            return;
        }
        if(ul == productionUl){
            countPro = countPro + leftSideWidth;
            ul.style.transform = `translateX(${countPro}rem)`;
            productCount--;
            return;
        }
        if(ul == RgalleryImages){
            countGal = countGal + leftSideWidth;
            ul.style.transform = `translateX(${countGal}rem)`;
            lchCount--;
            return;
        }
        if(ul == collectionContentUl){
            countCol = countCol + leftSideWidth;
            ul.style.transform = `translateX(${countCol}rem)`;
            colCount--;
            return;
        }
    } else {
        if(ul == productionUl && productCount === 0){
            return;
        }
        if(ul == RgalleryImages && lchCount == 0){
            return;
        }
        if(ul == collectionContentUl && colCount == 0){
            return;
        }
        if(ul == productionUl){
            countPro = countPro + section2LeftContents.clientWidth + 10;
            ul.style.transform = `translateX(${countPro}px)`;
            productCount--;
            return;
        }
        if(ul == RgalleryImages){
            countGal = countGal + section2LeftContents.clientWidth + 10;
            ul.style.transform = `translateX(${countGal}px)`;
            lchCount--;
            return;
        }
        if(ul == collectionContentUl){
            countCol = countCol + section2LeftContents.clientWidth + 10;
            ul.style.transform = `translateX(${countCol}px)`;
            colCount--;
            return;
        }
    }
}

function onCommentRightChevron(ul) {
    if(body.clientWidth > 696){
        if(comCount === 1){
            return;
        }
        // console.log('오');
        count = count - leftSideWidth + 2;
        ul.style.transform = `translateX(${count}rem)`;
        comCount++;
    } else {
        if(comCount === 2){
            return;
        }
        count = count - section2LeftContents.clientWidth + (-10);
        ul.style.transform = `translateX(${count}px)`;
        comCount++;
        return;
    }
}

function onCommentLeftChevron(ul) {
    if(body.clientWidth > 696){
        if(comCount === 0){
            return;
        }
        // console.log('왼');
        count = count + (leftSideWidth - 2);
        ul.style.transform = `translateX(${count}rem)`;
        comCount--;
    } else {
        if(comCount === 0){
            return;
        }
        count = count + (section2LeftContents.clientWidth - (-10));
        ul.style.transform = `translateX(${count}px)`;
        comCount--;
    }
}

function onRightSideRightChevron(ul) {
    if(body.clientWidth > 696){
        // console.log('오');
        if(ul == galleryImages && galCount === 2){
            return;
        }
        if(ul == videos && vidCount === 1){
            return;
        }
        if(ul == galleryImages){
            countG = countG - rightSideWidth;
            ul.style.transform = `translateX(${countG}rem)`;
            galCount++;
        }
        if(ul == videos){
            countV = countV - rightSideWidth;
            ul.style.transform = `translateX(${countV}rem)`;
            vidCount++;
        }
    } else {
        if(ul == galleryImages && galCount === 2){
            return;
        }
        if(ul == videos && vidCount === 1){
            return;
        }
        if(ul == galleryImages){
            countG = countG - section2LeftContents.clientWidth;
            ul.style.transform = `translateX(${countG}px)`;
            galCount++;
        }
        if(ul == videos){
            countV = countV - section2LeftContents.clientWidth;
            ul.style.transform = `translateX(${countV}px)`;
            vidCount++;
        }
    }
}

function onRightSideLeftChevron(ul) {
    if(body.clientWidth > 696){
        // console.log('오');
        if(ul == galleryImages && galCount === 0){
            return;
        }
        if(ul == videos && vidCount === 0){
            return;
        }
        if(ul == galleryImages){
            countG = countG + rightSideWidth;
            ul.style.transform = `translateX(${countG}rem)`;
            galCount--;
        }
        if(ul == videos){
            countV = countV + rightSideWidth;
            ul.style.transform = `translateX(${countV}rem)`;
            vidCount--;
        }
    } else {
        if(ul == galleryImages && galCount === 0){
            return;
        }
        if(ul == videos && vidCount === 0){
            return;
        }
        if(ul == galleryImages){
            countG = countG + section2LeftContents.clientWidth;
            ul.style.transform = `translateX(${countG}px)`;
            galCount--;
        }
        if(ul == videos){
            countV = countV + section2LeftContents.clientWidth;
            ul.style.transform = `translateX(${countV}px)`;
            vidCount--;
        }
    }
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

// 별점
function onStar(e, t){
    if(star1.classList.contains('fix')){
        cancelStar.style.display = 'block';
        if(body.clientWidth < 696){
            if(star1.classList.contains('one')){
                cancelStar.style.left = '0.9rem';
                return;
            }
            if(star1.classList.contains('two')){
                cancelStar.style.left = '4.2rem';
                return;
            }
            if(star1.classList.contains('three')){
                cancelStar.style.left = '7.4rem';
                return;
            }
            if(star1.classList.contains('four')){
                cancelStar.style.left = '10.7rem';
                return;
            }
            if(star1.classList.contains('five')){
                cancelStar.style.left = '13.9rem';
                return;
            }
        } else {
            if(star1.classList.contains('one')){
                cancelStar.style.left = '0';
                return;
            }
            if(star1.classList.contains('two')){
                cancelStar.style.left = '4rem';
                return;
            }
            if(star1.classList.contains('three')){
                cancelStar.style.left = '8.5rem';
                return;
            }
            if(star1.classList.contains('four')){
                cancelStar.style.left = '13rem';
                return;
            }
            if(star1.classList.contains('five')){
                cancelStar.style.left = '17.5rem';
                return;
            }
        }
    }
    const target = e.target.lastElementChild;
    if(!target){return};
    if(target.className === 'star1'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('one');
            starText.innerHTML = '싫어요';
        }
    }
    if(target.className === 'star2'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        star2.parentElement.classList.remove('far');
        star2.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('two');
            starText.innerHTML = '별로예요';
        }
    }
    if(target.className === 'star3'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        star2.parentElement.classList.remove('far');
        star2.parentElement.classList.add('fas');
        star3.parentElement.classList.remove('far');
        star3.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('three');
            starText.innerHTML = '보통이에요';
        }
    }
    if(target.className === 'star4'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        star2.parentElement.classList.remove('far');
        star2.parentElement.classList.add('fas');
        star3.parentElement.classList.remove('far');
        star3.parentElement.classList.add('fas');
        star4.parentElement.classList.remove('far');
        star4.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('four');
            starText.innerHTML = '재밌어요';
        }
    }
    if(target.className === 'star5'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        star2.parentElement.classList.remove('far');
        star2.parentElement.classList.add('fas');
        star3.parentElement.classList.remove('far');
        star3.parentElement.classList.add('fas');
        star4.parentElement.classList.remove('far');
        star4.parentElement.classList.add('fas');
        star5.parentElement.classList.remove('far');
        star5.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('five');
            starText.innerHTML = '최고예요!';
        }
    }
}

function onStarLeave(e){
    if(star1.classList.contains('fix')){
        cancelStar.style.display = 'none';
        return;
    }
    const star = e.target;
    const target = e.target.lastElementChild;
    if(!target){return};
    if(target.className === 'star1'){
        star.classList.remove('fas');
        star.classList.add('far');
    }
    if(target.className === 'star2'){
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
    }
    if(target.className === 'star3'){
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
        star3.parentElement.classList.remove('fas');
        star3.parentElement.classList.add('far');
    }
    if(target.className === 'star4'){
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
        star3.parentElement.classList.remove('fas');
        star3.parentElement.classList.add('far');
        star4.parentElement.classList.remove('fas');
        star4.parentElement.classList.add('far');
    }
    if(target.className === 'star5'){
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
        star3.parentElement.classList.remove('fas');
        star3.parentElement.classList.add('far');
        star4.parentElement.classList.remove('fas');
        star4.parentElement.classList.add('far');
        star5.parentElement.classList.remove('fas');
        star5.parentElement.classList.add('far');
    }
}

function onStarClick(e){
    if(star1.classList.contains('fix')){
        section2LeftTopContainer.style.display = 'none';
        if(afterCommentContainer.style.display !== 'flex'){
            section2LeftContainer.style.marginTop = '4rem';
        }
        star1.classList.remove('fix');
        star1.classList.remove('one');
        star1.classList.remove('two');
        star1.classList.remove('three');
        star1.classList.remove('four');
        star1.classList.remove('five');
        cancelStar.style.left = '-0.5rem';
        cancelStar.style.display = 'none';
        starText.innerHTML = '평가하기';
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
        star3.parentElement.classList.remove('fas');
        star3.parentElement.classList.add('far');
        star4.parentElement.classList.remove('fas');
        star4.parentElement.classList.add('far');
        star5.parentElement.classList.remove('fas');
        star5.parentElement.classList.add('far');
        return;
    }
    if(afterCommentContainer.style.display !== 'flex'){
        section2LeftTopContainer.style.display = 'flex';
    }
    section2LeftContainer.style.marginTop = '1rem';
    onStar(e, true);
    star1.classList.add('fix');
}

//footer
function onFooter(e){
    const target = e.target;
    removeActive();
    target.parentElement.classList.add('active');
}

function removeActive(){
    footer1.classList.remove('active');
    footer2.classList.remove('active');
    footer3.classList.remove('active');
    footer4.classList.remove('active');
}


// modal
function onModalBtn(){
    modalBackGround.style.display = 'flex'
    mdWantToSeeMore.style.display = 'block'
    mdWantToSeeMoreContainer.style.display = 'flex';
}

function onMdCancelBtn(){
    modalBackGround.style.display = 'none';
    mdWantToSeeMore.style.display = 'none';
    mdWantToSeeMoreContainer.style.display = 'none';
    mdNonMemberContainer.style.display = 'none';
    mdCommentContainer.style.display = 'none';
    mdCommentTopText.style.color = srcColor.mediumGray;
    commentTextarea.value = '';
}

function fabanCancel(){
    noneFabanMark();
    markBtnGrayToPinkColorChange();
    markWantSeeText.style.display = 'inline';
    plusFirst.style.display = 'inline';
}

function noneFabanMark(){
    faBanModal.style.color = '#787878';
    mdNoThanksText.style.color = 'black';
    markNoThanksText.style.display = 'none';
    faBanMark.style.display = 'none';
}

function showFabanMark(){
    plusFirst.style.display = 'none';
    plusLater.style.display = 'none';
    fullWatchingEye.style.display = 'none';
    emptyBookMark.style.display = 'none';
    faBanMark.style.display = 'inline';
    markWantSeeText.style.display = 'none';
    markWatchingText.style.display = 'none';
    markNoThanksText.style.display = 'inline';
}

function faBanModalColorChange(){
    mark.style.backgroundColor = '#fd99b7';
    mark.style.color = '#ffffff';
    mark.style.border = 'inline';
    mark.style.border = '1px #F8F8F8 solid';
    markModal.style.backgroundColor = '#fd99b7';
    markModal.style.color = '#ffffff';
    markModal.style.border = '1px #F8F8F8 solid';
    faCaretDown.style.color = '#ffffff';
    faBanMark.style.color = '#ffffff';
}

function markBtnWatchingColorChange(){
    mark.style.backgroundColor = '#D9D9D9';
    mark.style.color = 'black';
    mark.style.border = '1px #EBEBEB solid';
    markModal.style.backgroundColor = '#D9D9D9';
    markModal.style.color = 'black';
    markModal.style.border = '1px #EBEBEB solid';
    faCaretDown.style.color = '#F6F6F6';
}

function markBtnPinkToGrayColorChange(){
    mark.style.backgroundColor = '#F6F6F6';
    mark.style.color = 'black';
    mark.style.border = '1px #EBEBEB solid';
    markModal.style.backgroundColor = '#F6F6F6';
    markModal.style.color = 'black';
    markModal.style.border = '1px #EBEBEB solid';
    faCaretDown.style.color = '#D9D9D9';
}

function markBtnGrayToPinkColorChange(){
    mark.style.backgroundColor = '#ff2f6e';
    mark.style.color = '#ffffff';
    mark.style.border = 'inline';
    mark.style.borderRight = '1px #e71252 solid';
    markModal.style.backgroundColor = '#ff2f6e';
    markModal.style.color = '#ffffff';
    faCaretDown.style.color = '#ffffff';
    // mark.addEventListener('mouseover', ()=>{
    //     console.log('?');
    //     plusLater.style.transform = 'rotate(0.25turn)';
    // })
    // mark.addEventListener('mouseout', ()=>{
    //     plusLater.style.transform = 'rotate(0)';
    // })
}

function noneFullWatchingEyeModal() {
    noneFabanMark();
    watchingEyeModal.style.display = 'inline';
    fullWatchingEyeModal.style.display = 'none';
    markWantSeeText.style.display = 'inline';
    markWatchingText.style.display = 'none';
    mdRightIconText.style.color = 'black';
}

// 보는 중 눈모양 아이콘 누르면(파란색 아니고 회색일 때)
function eyeGrayToBlueColorChange(){
    watchingEyeModal.style.display = 'none';
    fullWatchingEyeModal.style.display = 'inline';
    mdRightIconText.style.color = '#00A0FF';
    plusFirst.style.display = 'none';
    plusLater.style.display = 'none';
    emptyBookMark.style.display = 'none';
    fullWatchingEye.style.display = 'inline';

    markWantSeeText.style.display = 'none';
    markWatchingText.style.display = 'inline';
    
    noneFabanMark();
    fullToemptyBookMarkChange();
    markBtnWatchingColorChange();
    onMdCancelBtn();
}

function emptyToFullBookMarkChange(){
    emptyBookMarkModal.style.display = 'none';
    fullBookMarkModal.style.display = 'inline';
    mdLeftIconText.style.color = '#ff2f6e';
}

function fullToemptyBookMarkChange(){
    fullBookMarkModal.style.display = 'none';
    emptyBookMarkModal.style.display = 'inline';
    mdLeftIconText.style.color = 'black';
}

function showBookMark(){
    fullWatchingEye.style.display = 'none';
    plusFirst.style.display = 'none';
    plusLater.style.display = 'none';
    emptyBookMark.style.display = 'inline';
}

function showPlus(){
    fullWatchingEye.style.display = 'none';
    emptyBookMark.style.display = 'none';
    plusLater.style.display = 'inline';
}

function onEmptyBookMarkModal(){
    if(emptyBookMarkModal.style.display == 'none'){
        onfullBookMarkModal();
        return;
    }
    noneFabanMark();
    noneFullWatchingEyeModal();
    showBookMark();
    markBtnPinkToGrayColorChange();
    emptyToFullBookMarkChange();
    onMdCancelBtn();
}


function onMarkBtn(){
    if(emptyBookMark.style.display == 'none'
    & fullWatchingEye.style.display == 'none'
    & markNoThanksText.style.display == 'none'){
        onEmptyBookMarkModal();
        return;
    }
    onModalBtn();
}

function onfullBookMarkModal(){
    noneFabanMark();
    onMdCancelBtn();
    markBtnGrayToPinkColorChange();
    fullToemptyBookMarkChange();
    showPlus();
}

function onWatchingEyeModal(){
    if(watchingEyeModal.style.display == 'none'){
        onFullWatchingEyeModal();
        return;
    }
    noneFabanMark();
    eyeGrayToBlueColorChange();
}

function onFullWatchingEyeModal(){
    noneFullWatchingEyeModal();
    markBtnGrayToPinkColorChange();
    onMdCancelBtn();
    fullWatchingEye.style.display = 'none';
    plusFirst.style.display = 'inline';
}

function onFaBanModal() {
    if(mdNoThanksText.style.color == 'black'){
        faBanModal.style.color = '#ff2f6e';
        mdNoThanksText.style.color = '#ff2f6e';
        fullWatchingEyeModal.style.display = 'none';
        watchingEyeModal.style.display = 'inline';
        mdRightIconText.style.color = 'black';
        fullToemptyBookMarkChange();
        faBanModalColorChange();
        showFabanMark();
        onMdCancelBtn();
        return;
    }else{
        mdNoThanksText.style.color = 'black';
    }
    fabanCancel();
    onMdCancelBtn();
}

function onTopLeftCommentBtn(edit){
    modalBackGround.style.display = 'flex';
    mdCommentContainer.style.display = 'flex';
    if(edit || mdCommentText.innerText == '코멘트 수정하기'){
        commentTextarea.value = localStorage.getItem('text');
        mdCommentTopText.innerHTML = '코멘트 수정';
    }
    mdWantToSeeMoreContainer.style.display = 'none';
}

// comment

function onCommentModal(e){
    const target = e.target;
    let text = target.parentElement.parentElement.lastElementChild.value;
    section2LeftContainer.style.marginTop = '1rem';
    afterCommentText.innerText = text;
    localStorage.setItem('text', text);
    if(!check){
        const commentContentList = `<li class="commentContentList">
                                        <div class="commentContent">
                                            <div class="ccTop">
                                                <span class="ccTopLeft">
                                                    <img class="ccTopImg" src="https://picsum.photos/200/200/?random=2" alt="이미지가 없습니다">
                                                    <span class="ccTopName">내가 작성한 댓글</span>
                                                </span>
                                                <span class="ccTopRight">
                                                    <i class="fas fa-star"></i>
                                                    <span class="starScope">3.0</span>
                                                </span>
                                            </div>
                                            <div class="ccText">
                                                <a href="comment page/commentPage.html" class="ccTextInner">
                                                    ${text}
                                                </a>
                                            </div>
                                            <div class="ccNumOfLikeComment">
                                                <span class="ccNumOfLike ccNumAfter">
                                                    <i class="fas fa-thumbs-up ccThumb"></i>
                                                    <span class="numOfthumbsUp">0</span>
                                                </span>
                                                <span class="ccNumOfComment">
                                                    <i class="fas fa-comment ccNum"></i>
                                                    <span class="ccComment">0</span>
                                                </span>
                                            </div>
                                        </div>
                                    </li>`;
        commentContentSpace.insertAdjacentHTML('afterbegin', commentContentList);
    }
    if(check){
        check = false;
        commentContentSpace.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerHTML = text;
    }
    commentTextarea.value = '';
    text = '';
    mdCommentText.innerText = '코멘트 수정하기';
    modalBackGround.style.display = 'none';
    mdCommentContainer.style.display = 'none';
    section2LeftTopContainer.style.display = 'none';
    afterCommentContainer.style.display = 'flex';
    if(afterCommentText.childNodes[0].parentElement.scrollHeight > 74){
        afterCommentText.classList.add('beforeAfter');
        afterCommentText.style.alignItems = 'flex-start';
    }else{
        afterCommentText.classList.remove('beforeAfter');
        afterCommentText.style.alignItems = 'center';
    }
}


function onCommentTextarea(e){
    const target = e.target;
    mdCommentContainer.addEventListener('keyup',()=>{
        if(target.placeholder !== ''){
            mdCommentTopText.style.color = srcColor.hotPink;
        }
        if(target.value == ''){
            mdCommentTopText.style.color = srcColor.mediumGray;
        }
    })
}

function onDeleteComment(e){
    mdCommentText.innerText = '코멘트 작성하기';
    afterCommentContainer.style.display = 'none';
    section2LeftTopContainer.style.display = 'none';
    mdCommentTopText.innerText = '코멘트 작성';
    section2LeftContainer.style.marginTop = '4rem';
    afterCommentText.innerHTML = '';
    commentContentSpace.firstElementChild.remove();
}

function onDeleteCheck(){
    cancelAlert.style.display = "flex";
}

function onEditComment(e){
    onTopLeftCommentBtn(true);
    check = true;
}

function onSearch(){
    navSearch.style.display = 'none';
    logoText.style.display = 'none';
    searchBox.style.width = '28rem';
    searchBox.style.visibility = 'visible';
    setTimeout(()=>{
        searchBoxInput.focus();
    }, 510)
}

function onSearchBox(){
    if(body.clientWidth > 896){
        return;
    }
    setTimeout(()=>{
        logoText.style.display = 'flex';
        navSearch.style.display = 'block';
    }, 500)
    searchBox.style.width = '0';
    searchBox.style.visibility = 'hidden';
}


// addEventListener
body.addEventListener('click', (e)=>{
    const targets = e.target.classList.value.split(" ");
    for(const target of targets){
        switch(target){
            case 'apchRight':
                onLeftSideRightChevron(productionUl);
                break;
            case 'apchLeft':
                onLeftSideLeftChevron(productionUl);
                break;
            case 'ccchRight':
                onCommentRightChevron(commentContentSpace);
                break;
            case 'ccchLeft':
                onCommentLeftChevron(commentContentSpace);
                break;
            case 'clchRight':
                onLeftSideRightChevron(collectionContentUl);
                break;
            case 'clchLeft':
                onLeftSideLeftChevron(collectionContentUl);
                break;
            case 'gchRight':
                onRightSideRightChevron(galleryImages);
                break;
            case 'gchLeft':
                onRightSideLeftChevron(galleryImages);
                break;
            case 'vchRight':
                onRightSideRightChevron(videos);
                break;
            case 'vchLeft':
                onRightSideLeftChevron(videos);
                break;
            case 'RgvchRight':
                onLeftSideRightChevron(RgalleryImages);
                break;
            case 'RgvchLeft':
                onLeftSideLeftChevron(RgalleryImages);
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
            case 'markNoThanksText':
                onModalBtn();
                break;

            case 'mdCancel':
                onMdCancelBtn();
                break;

            case 'mark':
                onMarkBtn();
                break;
            case 'markWantSeeText':
                onMarkBtn();
                break;
            case 'markWatchingText':
                onMarkBtn();
                break;
            case 'fa-ban-mark':
                onMarkBtn();
                break;

            case 'fullBookMarkModal':
                onfullBookMarkModal();
                break;

            case 'mdLeftIconBox':
                onEmptyBookMarkModal();
                break;
            case 'emptyBookMarkModal':
                onEmptyBookMarkModal();
                break;
            case 'mdLeftIconText':
                onEmptyBookMarkModal();
                break;

            case 'mdRightIconBox':
                onWatchingEyeModal();
                break;
            case 'watchingEyeModal':
                onWatchingEyeModal();
                break;
            case 'mdRightIconText':
                onWatchingEyeModal();
                break;

            case 'fullWatchingEyeModal':
                onFullWatchingEyeModal();
                break;     

            case 'mdNoThanks':
                onFaBanModal();
                break;
            case 'mdNoThanksText':
                onFaBanModal();
                break;
            case 'fa-ban-modal':
                onFaBanModal();
                break;

            case 'topLeftComment':
                onTopLeftCommentBtn();
                break;
            case 'mdWriteComment':
                onTopLeftCommentBtn();
                break;
            case 'mdCommentText':
                onTopLeftCommentBtn();
                break;
            case 'faComment':
                onTopLeftCommentBtn();
                break;

            case 'noneMembetFatimes':
                onMdCancelBtn();
                break;
            case 'mdCommentFaTimes':
                onMdCancelBtn();
                break;

            case 'mdCommentTopText':
                onCommentModal(e);
                break;

            case 'commentTextarea':
                onCommentTextarea(e);
                break;

            case 'fa-trash-alt':
                onDeleteCheck();
                break;
            case 'afterTrashText':
                onDeleteCheck();
                break;

            case 'afterEditText':
                onEditComment(e);
                break;
            case 'fa-pencil-alt':
                onEditComment(e);
                break;

            case 'ccThumb':
                srcLike.onLikeBtn(e);
                break;
            case 'numOfthumbsUp':
                srcLike.onNumOfLikes(e);
                break;
            case 'ccNum':
                srcLike.onCommentBtn(e);
                break;
            case 'ccComment':
                srcLike.onNumOfComment(e);
                break;

            case 'star1':
                onStar(e);
                break;
            case 'star2':
                onStar(e);
                break;
            case 'star3':
                onStar(e);
                break;
            case 'star4':
                onStar(e);
                break;
            case 'star5':
                onStar(e);
                break;

            case 'footerText1':
                onFooter(e);
                break;
            case 'footerText2':
                onFooter(e);
                break;
            case 'footerText3':
                onFooter(e);
                break;
            case 'footerText4':
                onFooter(e);
                break;
            case 'footerHome':
                onFooter(e);
                break;
            case 'footerSearch':
                onFooter(e);
                break;
            case 'footerStar':
                onFooter(e);
                break;
            case 'footerUser':
                onFooter(e);
                break;
            
            case 'alertNo':
                cancelAlert.style.display = 'none';
                break;
            case 'alertOK':
                onDeleteComment();
                cancelAlert.style.display = 'none';
                break;

            case 'navSearch':
                onSearch();
                break;
        }
    }
})

searchBoxInput.addEventListener('blur', ()=>{onSearchBox()});

window.addEventListener('resize', () => {
    if(body.clientWidth < 896 && body.clientWidth > 700){
        searchBox.style.width = '0';
        searchBox.style.visibility = 'hidden';
        navEst.style.display = 'none';
        logoText.style.display = 'flex';
        navSearch.style.display = 'block';
        // navStar.style.display = 'block';
    }
    if(body.clientWidth > 896){
        searchBox.style.width = '28rem';
        searchBox.style.visibility = 'visible';
        logoText.style.display = 'flex';
        navSearch.style.display = 'none';
        navEst.style.display = 'block';
        // navStar.style.display = 'none';
    }
})

// container.addEventListener('click', ()=>{

// })

productionUl.addEventListener('mouseenter', (e)=>{
    if(productCount === 0){
        apchLeft.style.display = 'none';
    }else{
        apchLeft.style.display = 'flex';
    }
    if(body.clientWidth > 696){
        if(productCount === 2){
            apchRight.style.display = 'none';
        }else{
            apchRight.style.display = 'flex';
        }
    } else {
        if(productCount === 4){
            apchRight.style.display = 'none';
        }else{
            apchRight.style.display = 'flex';
        }
    }
});

productionUl.addEventListener('mouseleave', (e)=>{
    apchRight.style.display = 'none';
    apchLeft.style.display = 'none';
});

apchRight.addEventListener('mouseenter', (e)=>{
    if(productCount === 0){
        apchLeft.style.display = 'none';
    }else{
        apchLeft.style.display = 'flex';
    }
    if(body.clientWidth > 696){
        if(productCount === 2){
            apchRight.style.display = 'none';
        }else{
            apchRight.style.display = 'flex';
        }
    } else {
        if(productCount === 4){
            apchRight.style.display = 'none';
        }else{
            apchRight.style.display = 'flex';
        }
    }
});

apchRight.addEventListener('mouseleave', (e)=>{
    apchRight.style.display = 'none';
    apchLeft.style.display = 'none';
});

apchLeft.addEventListener('mouseenter', (e)=>{
    if(productCount === 0){
        apchLeft.style.display = 'none';
    }else{
        apchLeft.style.display = 'flex';
    }
    if(body.clientWidth > 696){
        if(productCount === 2){
            apchRight.style.display = 'none';
        }else{
            apchRight.style.display = 'flex';
        }
    } else {
        if(productCount === 4){
            apchRight.style.display = 'none';
        }else{
            apchRight.style.display = 'flex';
        }
    }
});

apchLeft.addEventListener('mouseleave', (e)=>{
    apchRight.style.display = 'none';
    apchLeft.style.display = 'none';
});

commentContentSpace.addEventListener('mouseenter', (e)=>{
    if(body.clientWidth > 696){
        if(commentContentSpace.childElementCount === 3){
            return;
        }
        if(comCount === 1){
            ccchRight.style.display = 'none';
        }else{
            ccchRight.style.display = 'flex';
        }
        if(comCount === 0){
            ccchLeft.style.display = 'none';
        }else{
            ccchLeft.style.display = 'flex';
        }
    } else {
        if(commentContentSpace.childElementCount === 4){
            if(comCount === 2){
                ccchRight.style.display = 'none';
                ccchLeft.style.display = 'flex';
            }
            if(comCount === 1){
                ccchLeft.style.display = 'flex';
                ccchRight.style.display = 'flex';
            }
            if(comCount === 0){
                ccchLeft.style.display = 'none';
                ccchRight.style.display = 'flex';
            }
            return;
        }
        if(commentContentSpace.childElementCount === 3){
            if(comCount === 1){
                ccchRight.style.display = 'none';
                ccchLeft.style.display = 'flex';
            }
            if(comCount === 0){
                ccchLeft.style.display = 'none';
                ccchRight.style.display = 'flex';
            }
            return;
        }
    }
});

commentContentSpace.addEventListener('mouseleave', (e)=>{
    ccchRight.style.display = 'none';
    ccchLeft.style.display = 'none';
});

ccchRight.addEventListener('mouseenter', (e)=>{
    if(body.clientWidth > 696){
        if(commentContentSpace.childElementCount === 3){
            return;
        }
        if(comCount === 1){
            ccchRight.style.display = 'none';
        }else{
            ccchRight.style.display = 'flex';
        }
        if(comCount === 0){
            ccchLeft.style.display = 'none';
        }else{
            ccchLeft.style.display = 'flex';
        }
    } else {
        if(commentContentSpace.childElementCount === 4){
            if(comCount === 2){
                ccchRight.style.display = 'none';
                ccchLeft.style.display = 'flex';
            }
            if(comCount === 1){
                ccchLeft.style.display = 'flex';
                ccchRight.style.display = 'flex';
            }
            if(comCount === 0){
                ccchLeft.style.display = 'none';
                ccchRight.style.display = 'flex';
            }
            return;
        }
        if(commentContentSpace.childElementCount === 3){
            if(comCount === 1){
                ccchRight.style.display = 'none';
                ccchLeft.style.display = 'flex';
            }
            if(comCount === 0){
                ccchLeft.style.display = 'none';
                ccchRight.style.display = 'flex';
            }
            return;
        }
    }
});

ccchRight.addEventListener('mouseleave', (e)=>{
    ccchRight.style.display = 'none';
    ccchLeft.style.display = 'none';
});

ccchLeft.addEventListener('mouseenter', (e)=>{
    if(body.clientWidth > 696){
        if(commentContentSpace.childElementCount === 3){
            return;
        }
        if(comCount === 1){
            ccchRight.style.display = 'none';
        }else{
            ccchRight.style.display = 'flex';
        }
        if(comCount === 0){
            ccchLeft.style.display = 'none';
        }else{
            ccchLeft.style.display = 'flex';
        }
    } else {
        if(commentContentSpace.childElementCount === 4){
            if(comCount === 2){
                ccchRight.style.display = 'none';
                ccchLeft.style.display = 'flex';
            }
            if(comCount === 1){
                ccchLeft.style.display = 'flex';
                ccchRight.style.display = 'flex';
            }
            if(comCount === 0){
                ccchLeft.style.display = 'none';
                ccchRight.style.display = 'flex';
            }
            return;
        }
        if(commentContentSpace.childElementCount === 3){
            if(comCount === 1){
                ccchRight.style.display = 'none';
                ccchLeft.style.display = 'flex';
            }
            if(comCount === 0){
                ccchLeft.style.display = 'none';
                ccchRight.style.display = 'flex';
            }
            return;
        }
    }
});

ccchLeft.addEventListener('mouseleave', (e)=>{
    ccchRight.style.display = 'none';
    ccchLeft.style.display = 'none';
});

RgalleryImages.addEventListener('mouseenter', (e)=>{
    if(body.clientWidth > 696){
        if(lchCount === 0){
            RgvchLeft.style.display = 'none';
            RgvchRight.style.display = 'flex';
        }else{
            RgvchRight.style.display = 'none';
            RgvchLeft.style.display = 'flex';
        }
    } else {
        if(lchCount === 0){
            RgvchLeft.style.display = 'none';
            RgvchRight.style.display = 'flex';
        }
        if(lchCount === 1){
            RgvchRight.style.display = 'flex';
            RgvchLeft.style.display = 'flex';
        }
        if(lchCount === 2){
            RgvchRight.style.display = 'none';
            RgvchLeft.style.display = 'flex';
        }
    }
});

RgalleryImages.addEventListener('mouseleave', (e)=>{
    RgvchRight.style.display = 'none';
    RgvchLeft.style.display = 'none';
});

RgvchRight.addEventListener('mouseenter', (e)=>{
    if(body.clientWidth > 696){
        if(lchCount === 0){
            RgvchLeft.style.display = 'none';
            RgvchRight.style.display = 'flex';
        }else{
            RgvchRight.style.display = 'none';
            RgvchLeft.style.display = 'flex';
        }
    } else {
        if(lchCount === 0){
            RgvchLeft.style.display = 'none';
            RgvchRight.style.display = 'flex';
        }
        if(lchCount === 1){
            RgvchRight.style.display = 'flex';
            RgvchLeft.style.display = 'flex';
        }
        if(lchCount === 2){
            RgvchRight.style.display = 'none';
            RgvchLeft.style.display = 'flex';
        }
    }
});

RgvchRight.addEventListener('mouseleave', (e)=>{
    RgvchRight.style.display = 'none';
    RgvchLeft.style.display = 'none';
});

RgvchLeft.addEventListener('mouseenter', (e)=>{
    if(body.clientWidth > 696){
        if(lchCount === 0){
            RgvchLeft.style.display = 'none';
            RgvchRight.style.display = 'flex';
        }else{
            RgvchRight.style.display = 'none';
            RgvchLeft.style.display = 'flex';
        }
    } else {
        if(lchCount === 0){
            RgvchLeft.style.display = 'none';
            RgvchRight.style.display = 'flex';
        }
        if(lchCount === 1){
            RgvchRight.style.display = 'flex';
            RgvchLeft.style.display = 'flex';
        }
        if(lchCount === 2){
            RgvchRight.style.display = 'none';
            RgvchLeft.style.display = 'flex';
        }
    }
});

RgvchLeft.addEventListener('mouseleave', (e)=>{
    RgvchRight.style.display = 'none';
    RgvchLeft.style.display = 'none';
});

collectionContentUl.addEventListener('mouseenter', (e)=>{
    if(body.clientWidth > 696){
        if(colCount === 0){
            clchLeft.style.display = 'none';
            clchRight.style.display = 'flex';
        } else {
            clchRight.style.display = 'none';
            clchLeft.style.display = 'flex';
        }
    } else {
        if(colCount === 0){
            clchLeft.style.display = 'none';
            clchRight.style.display = 'flex';
        } 
        if(colCount === 1 || colCount === 2){
            clchRight.style.display = 'flex';
            clchLeft.style.display = 'flex';
        }
        if(colCount === 3){
            clchRight.style.display = 'none';
            clchLeft.style.display = 'flex';
        }
    }
});

collectionContentUl.addEventListener('mouseleave', (e)=>{
    clchRight.style.display = 'none';
    clchLeft.style.display = 'none';
});

clchRight.addEventListener('mouseenter', (e)=>{
    if(body.clientWidth > 696){
        if(colCount === 0){
            clchLeft.style.display = 'none';
            clchRight.style.display = 'flex';
        } else {
            clchRight.style.display = 'none';
            clchLeft.style.display = 'flex';
        }
    } else {
        if(colCount === 0){
            clchLeft.style.display = 'none';
            clchRight.style.display = 'flex';
        } 
        if(colCount === 1 || colCount === 2){
            clchRight.style.display = 'flex';
            clchLeft.style.display = 'flex';
        }
        if(colCount === 3){
            clchRight.style.display = 'none';
            clchLeft.style.display = 'flex';
        }
    }
});

clchRight.addEventListener('mouseleave', (e)=>{
    clchRight.style.display = 'none';
    clchLeft.style.display = 'none';
});

clchLeft.addEventListener('mouseenter', (e)=>{
    if(body.clientWidth > 696){
        if(colCount === 0){
            clchLeft.style.display = 'none';
            clchRight.style.display = 'flex';
        } else {
            clchRight.style.display = 'none';
            clchLeft.style.display = 'flex';
        }
    } else {
        if(colCount === 0){
            clchLeft.style.display = 'none';
            clchRight.style.display = 'flex';
        } 
        if(colCount === 1 || colCount === 2){
            clchRight.style.display = 'flex';
            clchLeft.style.display = 'flex';
        }
        if(colCount === 3){
            clchRight.style.display = 'none';
            clchLeft.style.display = 'flex';
        }
    }
});

clchLeft.addEventListener('mouseleave', (e)=>{
    clchRight.style.display = 'none';
    clchLeft.style.display = 'none';
});

galleryImages.addEventListener('mouseenter', (e)=>{
    if(galCount === 0){
        gchLeft.style.display = 'none';
        gchRight.style.display = 'flex';
    }
    if(galCount === 1){
        gchLeft.style.display = 'flex';
        gchRight.style.display = 'flex';
    }
    if(galCount === 2){
        gchLeft.style.display = 'flex';
        gchRight.style.display = 'none';
    }
});

galleryImages.addEventListener('mouseleave', (e)=>{
    gchRight.style.display = 'none';
    gchLeft.style.display = 'none';
});

gchRight.addEventListener('mouseenter', (e)=>{
    if(galCount === 0){
        gchLeft.style.display = 'none';
        gchRight.style.display = 'flex';
    }
    if(galCount === 1){
        gchLeft.style.display = 'flex';
        gchRight.style.display = 'flex';
    }
    if(galCount === 2){
        gchLeft.style.display = 'flex';
        gchRight.style.display = 'none';
    }
});

gchRight.addEventListener('mouseleave', (e)=>{
    gchRight.style.display = 'none';
    gchLeft.style.display = 'none';
});

gchLeft.addEventListener('mouseenter', (e)=>{
    if(galCount === 0){
        gchLeft.style.display = 'none';
        gchRight.style.display = 'flex';
    }
    if(galCount === 1){
        gchLeft.style.display = 'flex';
        gchRight.style.display = 'flex';
    }
    if(galCount === 2){
        gchLeft.style.display = 'flex';
        gchRight.style.display = 'none';
    }
});

gchLeft.addEventListener('mouseleave', (e)=>{
    gchRight.style.display = 'none';
    gchLeft.style.display = 'none';
});

videos.addEventListener('mouseenter', (e)=>{
    if(vidCount === 0){
        vchLeft.style.display = 'none';
        vchRight.style.display = 'flex';
    }else{
        vchRight.style.display = 'none';
        vchLeft.style.display = 'flex';
    }
});

videos.addEventListener('mouseleave', (e)=>{
    vchRight.style.display = 'none';
    vchLeft.style.display = 'none';
});

vchRight.addEventListener('mouseenter', (e)=>{
    if(vidCount === 0){
        vchLeft.style.display = 'none';
        vchRight.style.display = 'flex';
    }else{
        vchRight.style.display = 'none';
        vchLeft.style.display = 'flex';
    }
});

vchRight.addEventListener('mouseleave', (e)=>{
    vchRight.style.display = 'none';
    vchLeft.style.display = 'none';
});

vchLeft.addEventListener('mouseenter', (e)=>{
    if(vidCount === 0){
        vchLeft.style.display = 'none';
        vchRight.style.display = 'flex';
    }else{
        vchRight.style.display = 'none';
        vchLeft.style.display = 'flex';
    }
});

vchLeft.addEventListener('mouseleave', (e)=>{
    vchRight.style.display = 'none';
    vchLeft.style.display = 'none';
});

window.addEventListener('scroll', ()=>{
    if(window.scrollY !== 0){
        if(nav.classList.contains('scrollNav')){
            return;
        }
        setTimeout(()=>{
            nav.classList.add('scrollNav');
            logo.classList.add('scrollLogo');
            navProfile.classList.add('scrollPro');
            logoText.classList.add('scrollText');
            searchBox.classList.add('scrollBox');
            navEst.classList.add('scrollEst');
            navSearch.classList.add('scrollSearch');
        }, 200);
    } else {
        setTimeout(()=>{
            nav.classList.remove('scrollNav');
            logo.classList.remove('scrollLogo');
            navProfile.classList.remove('scrollPro');
            logoText.classList.remove('scrollText');
            searchBox.classList.remove('scrollBox');
            navEst.classList.remove('scrollEst');
            navSearch.classList.remove('scrollSearch');
        }, 200);
    }
})

for(let item of star){
    item.addEventListener('click', (e)=>{onStarClick(e)});
    item.addEventListener('mouseenter', (e)=>{onStar(e)});
    item.addEventListener('mouseleave', (e)=>{onStarLeave(e)})
}

window.onload = function() {
    scrollTo(0,0);
}

