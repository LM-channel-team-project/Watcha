'use strict'
import * as srcColor from '/movie page(현정)/src/color.js'


export function onLikeBtn(e){
    const target = e.target;
    if(target.style.color == 'rgb(255, 47, 110)'){
        target.style.color = srcColor.darkGray;
        let likeNumbers = parseInt(target.nextElementSibling.innerText)-1;
        target.nextElementSibling.innerText = likeNumbers;      
        return;
    }
    target.style.color = srcColor.hotPink;
    let likeNumbers = parseInt(target.nextElementSibling.innerText)+1;
    target.nextElementSibling.innerText = likeNumbers;
}

export function onNumOfLikes(e){
    const target = e.target;
    if(target.previousElementSibling.style.color == 'rgb(255, 47, 110)'){
        target.previousElementSibling.style.color = srcColor.darkGray;
        let likeNumbers = parseInt(target.innerText)-1;
        target.innerText = likeNumbers;      
        return;
    }   
    target.previousElementSibling.style.color = srcColor.hotPink;
    let likeNumbers = parseInt(target.innerText)+1;
    target.innerText = likeNumbers;
}


export function onCommentBtn(e){
    const target = e.target;
    // console.log(target);
}


export function onNumOfComment(e){
    const target = e.target;
    // console.log(target);
}
