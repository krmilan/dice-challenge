//random dice image for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource1 = "./images/" + randomDiceImage1; // ./images/dice1.png - ./images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // selecting the first image

image1.setAttribute("src", randomImageSource1); // changing attribute to get the random dice image


// random dice image for player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2; 

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//winner declaration using conditionals

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Its a Draw!";
}
