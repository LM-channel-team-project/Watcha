'use strict';
import * as srcLike from '/movie page(현정)/src/like.js';

let thumbsUp = document.querySelectorAll('.fa-thumbs-up');
let faComments = document.querySelectorAll('.fa-comment');
let numOfLikes = document.querySelectorAll('.numOfLikes');
let numOfComments = document.querySelectorAll('.numOfComments');
       
// addEventListener
for(const thumb of thumbsUp){
    thumb.addEventListener('click', (e)=>{
        srcLike.onLikeBtn(e)}
    ); 
}

for(const like of numOfLikes){
    like.addEventListener('click', (e) =>{
        srcLike.onNumOfLikes(e)}
    );
}

for(const comment of faComments){
    comment.addEventListener('click', (e)=>{
        srcLike.onCommentBtn(e);
    })
}

for(const numOfComment of numOfComments){
    numOfComment.addEventListener('click', (e)=>{
        srcLike.onNumOfComment(e);
    })
}