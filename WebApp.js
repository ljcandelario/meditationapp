const smallCircle = document.querySelector('.smallcircle');
const meditate5 = document.querySelector('.meditate5')
const meditate7 = document.getElementById('meditate7'); 
const meditate10 = document.getElementById('meditate10'); 
const choices = document.querySelector('.choices')
const outBreathe = document.querySelector('.outBreathe')
const inBreathe = document.querySelector('.inBreathe')
const countdown = document.getElementById('timer')

choices.addEventListener('click', hideAllButtons)

//5mins functions

const startTime5 = 5;
let time5 = startTime5 * 60;

function start5mins() {
    setInterval(countdown5mins, 1000);
} 

function countdown5mins() {
    const mins = Math.floor(time5 / 60);
    let seconds = time5 % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${mins} : ${seconds}`;
    time5--;
}

function loopBreathe5() {
    let breaths = 50;
    while (breaths != 0) {   
    setInterval(circleGrow, 6000)
    breaths--;
    }
    clearInterval(loopBreathe5);
    choices.classList.remove('hideButtons');
    return;
}

function breathingOutProcess5() {
    let breaths = 100;
    while (breaths != 0) {   
    setInterval(breathingOut, 6000)
    breaths--;
    }
    clearInterval(breathingOutProcess5);
    return;
}

function breathingInProcess5() {
    let breaths = 100;
    while (breaths != 0) {   
    setInterval(breathingIn, 6000)
    breaths--;
    }
    clearInterval(breathingInProcess7);
    return;
} 

meditate5.addEventListener('click', () => {
    start5mins(); 
    circleGrow();
    loopBreathe5();
    breathingOut();
    breathingOutProcess5();
    breathingIn();
    breathingInProcess5();
    playMusic5();
})

//7mins functions
const startTime7 = 7;
let time7 = startTime7 * 60;

function start7mins(){
    setInterval(countdown7mins, 1000);
}

function countdown7mins() {
    const mins = Math.floor(time7 / 60);
    let seconds = time7 % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${mins} : ${seconds}`;
    time7--;
}

function loopBreathe7() {
    let breaths = 140;
    while (breaths != 0) {   
    setInterval(circleGrow, 6000)
    breaths--;
    }
    clearInterval(loopBreathe7);
    choices.classList.remove('hideButtons');
    return;
}

function breathingOutProcess7() {
    let breaths = 140;
    while (breaths != 0) {   
    setInterval(breathingOut, 6000)
    breaths--;
    }
    clearInterval(breathingOutProcess7);
    return;
}

function breathingInProcess7() {
    let breaths = 140;
    while (breaths != 0) {   
    setInterval(breathingIn, 6000)
    breaths--;
    }
    clearInterval(breathingInProcess7);
    return;
} 

meditate7.addEventListener('click', () => {
    start7mins(); 
    circleGrow();
    loopBreathe7();
    breathingOut();
    breathingOutProcess7();
    breathingIn();
    breathingInProcess7();
    playMusic7();
})

//10mins functions

const startTime10 = 10;
let time10 = startTime10 * 60;

function start10mins(){
    setInterval(countdown10mins, 1000);
    clearInterval(start10mins);
    return;
}

function countdown10mins() {
    const mins = Math.floor(time10 / 60);
    let seconds = time10 % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${mins} : ${seconds}`;
    time10--;
} 

meditate10.addEventListener('click', () => {
    start10mins(); 
    circleGrow();
    loopBreathe10();
    breathingOut();
    breathingOutProcess10();
    breathingIn();
    breathingInProcess10();
    playMusic10();
})


// Circle 
function circleGrow() {
    smallCircle.classList.add('movingcircle');
    setTimeout(() => {
        smallCircle.classList.remove('movingcircle');
    }, 3000);
    
}

//Continuous breathe
function loopBreathe10() {
    let breaths = 200;
    while (breaths != 0) {   
    setInterval(circleGrow, 6000)
    breaths--;
    }
    clearInterval(loopBreathe10);
    choices.classList.remove('hideButtons');
    return;
}

// hide buttons
function hideAllButtons() {
    setTimeout(function(){
        choices.classList.add('hideButtons');
    }, 500)
}

// breathe in, out
function breathingOut() {
    outBreathe.classList.add('hideBreath');
    setTimeout(function(){
        outBreathe.classList.remove('hideBreath');
    }, 3000);
}

function breathingIn() {
    setTimeout(function(){
        inBreathe.classList.add('hideBreath');
    }, 3000);
    inBreathe.classList.remove('hideBreath');
}

function breathingOutProcess10() {
    let breaths = 200;
    while (breaths != 0) {   
    setInterval(breathingOut, 6000)
    breaths--;
    }
    clearInterval(breathingOutProcess10);
    return;
}

function breathingInProcess10() {
    let breaths = 200;
    while (breaths != 0) {   
    setInterval(breathingIn, 6000)
    breaths--;
    }
    clearInterval(breathingInProcess10);
    return;
} 


// Music
function playMusic10() {
    let music = new Audio("10 mins-endless-by-prabajithk-118998.mp3");
    music.play();
}

function playMusic7() {
    let music = new Audio("7 mins-ambiant-relax-sounds-10621.mp3");
    music.play();
}

function playMusic5() {
    let music = new Audio("6 mins-music-for-relax-yoga-meditation-7783.mp3");
    music.play();
}


