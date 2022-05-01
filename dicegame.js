//when the user hits the refresh button
    //1. the first time the user enters the game, the header text will show as is
    //2. Generate random numbers from 1 - 6
    //3. assign that random number to two emptry seperate variable
    //4. the first time the user hits the refresh button, the header will guide the user to 
    //hit the refresh button.

let refreshBtn = document.querySelector("button.refresh");
let bodyBG = document.querySelector("body");
let playerOneDice = document.getElementById("player-one-dice");
let playerTwoDice = document.getElementById("player-two-dice");
let playerOneResult = document.getElementById("player-one-result");
let playerTwoResult = document.getElementById("player-two-result");

window.addEventListener("load", function(){
    alert("This page has been loaded.")
})


var imgArr = ["./images/dice-1.png","./images/dice-2.png","./images/dice-3.png","./images/dice-4.png","./images/dice-5.png","./images/dice-6.png"]
refreshBtn.addEventListener("click", function(){
    let randomNum1 = Math.floor(Math.random() * 6);
    let randomNum2 = Math.floor(Math.random() * 6);
    playerOneDice.src = imgArr[randomNum1];
    playerOneResult.textContent = randomNum1+1;
    playerTwoDice.src = imgArr[randomNum2]
    playerTwoResult.textContent = randomNum2+1;
})
