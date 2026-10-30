const startBtn = document.querySelector('.start-btn');
const popunInfo=document.querySelector('.popup-info');
const exitBtn=document.querySelector('.exit-btn');
const main=document.querySelector('.main');
const continueBtn=document.querySelector('.continue-btn');
const quizSection=document.querySelector('.quiz-section');
startBtn

startBtn.onclick=()=>{
    popunInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.oneclick=()=>{
    popunInfo.classList.remove('.active');
    main.classList.remove('.active');
}


continueBtn.oneclick=()=>{
    quizSection.classList.add('.active');
    popunInfo.classList.remove('.active');
    main.classList.remove('.active');
}