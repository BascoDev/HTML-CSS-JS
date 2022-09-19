let music = document.getElementById('music');
let playerBefore = document.getElementById('playerImageBefore');
let playerAfter = document.getElementById('playerImageAfter');
let playerEndIcon = document.getElementById('playerEnd');
let playerStart = document.getElementById('playerStart');

playerBefore.addEventListener("click", playAudio);
playerAfter.addEventListener("click", playAudio);
playerStart.addEventListener("click", playAudio);
playerEndIcon.addEventListener("click", playAudio);

function playAudio(){
    if (music.paused){
        music.play();
        playerStart.style.opacity = 0;
        playerEndIcon.style.opacity = 1;
    }else{
        music.pause();
        playerStart.style.opacity = 1;
        playerEndIcon.style.opacity = 0;
    }
}

playerAfter.onmouseover = function(){
    playerAfter.style.opacity = 1;
    playerBefore.classList.add("beforeHoverStart");
    playerBefore.classList.remove("beforeHoverBack");

    playerAfter.classList.add("afterHoverStart");
    playerAfter.classList.remove("afterHoverBack");

    playerStart.classList.add("appearIconAnimation");
    playerStart.classList.remove("disappearIconAnimation");
}

playerAfter.onmouseout = function (){
    playerAfter.style.opacity = 0;
    playerBefore.classList.add("beforeHoverBack");
    playerBefore.classList.remove("beforeHoverStart");

    playerAfter.classList.add("afterHoverBack");
    playerAfter.classList.remove("afterHoverStart");

    playerStart.classList.add("disappearIconAnimation");
    playerStart.classList.remove("appearIconAnimation");
}

playerEndIcon.onmouseover = function (){
    playerAfter.classList.add("afterHoverStart");
    playerAfter.classList.remove("afterHoverBack");

    playerBefore.classList.add("beforeHoverStart");
    playerBefore.classList.remove("beforeHoverBack");

    playerStart.classList.add("appearIconAnimation");
    playerStart.classList.remove("disappearIconAnimation");
}

playerEndIcon.onmouseout = function (){
    playerBefore.classList.add("beforeHoverBack");
    playerBefore.classList.remove("beforeHoverStart");

    playerAfter.classList.add("afterHoverBack");
    playerAfter.classList.remove("afterHoverStart");

    playerStart.classList.add("disappearIconAnimation");
    playerStart.classList.remove("appearIconAnimation");
}