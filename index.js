let array = ['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];
let randomNumber1 = Math.floor(Math.random() * array.length);
let randomNumber2 = Math.floor(Math.random() * array.length);
let newDice1 = array[randomNumber1] + '.png';
let newDice2 = array[randomNumber2] + '.png';
let player1 = document.querySelector('.img1').src = 'images/' + newDice1;
let player2 = document.querySelector('.img2').src = 'images/' + newDice2;

if (player1 > player2) {
    document.querySelector('h1').innerHTML = "🏆Player 1 Wins!";
    document.querySelector('h1').style.textAlign = "left";
    
} else if (player1 < player2) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!🏆";
    document.querySelector('h1').style.textAlign = "right";
} else {
    document.querySelector('h1').innerHTML = "D r a w!";
    document.querySelector('h1').style.textAlign = "center";
}
