//when the user hits the refresh button
    //1. the first time the user enters the game, the header text will show as is
    //2. Generate random numbers from 1 - 6
    //3. assign that random number to two emptry seperate variable
    //4. the first time the user hits the refresh button, the header will guide the user to 
    //hit the refresh button.

let refreshBtn = document.querySelector("button.refresh");
let bodyBG = document.querySelector("body");

refreshBtn.addEventListener("click", function(){
    bodyBG.classList.toggle("darkbg");
})

function randomizeDice(){
    let randomNum = Math.floor(Math.random() * 6 + 1);
    console.log(randomNum)
}

randomizeDice();
console.log(refreshBtn);