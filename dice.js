//jshint esversion:6

let randomNumber1 = Math.floor((Math.random() * 6) + 1);  //Selects a random #.
let diceImg1 = "images/dice" + randomNumber1 + ".png";  //Creates image src text using the random #.
document.querySelector("img.img1").src = diceImg1;  //Updates image src with new path.

let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let diceImg2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").src = diceImg2;

function resultsText() {  //Creates new h1 text.
  if (randomNumber1 > randomNumber2) {
    var winner = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2){
    var winner = "Player 2 Wins!";
  } else if (randomNumber1 == randomNumber2) {
    var winner = "Draw!";
  }
  return (winner);
}

document.querySelector("h1").innerText = resultsText();  //Updates h1 with new text.
