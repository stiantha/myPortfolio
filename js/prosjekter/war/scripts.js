var cardDeck = [
  //? Hentet kort fra github, brukte chatgpt for å fortsette i samme mønster
  { id: 1, imagePath: "./deck/2_of_hearts.png", value: 2 },
  { id: 2, imagePath: "./deck/2_of_diamonds.png", value: 2 },
  { id: 3, imagePath: "./deck/2_of_spades.png", value: 2 },
  { id: 4, imagePath: "./deck/2_of_clubs.png", value: 2 },
  { id: 5, imagePath: "./deck/3_of_hearts.png", value: 3 },
  { id: 6, imagePath: "./deck/3_of_diamonds.png", value: 3 },
  { id: 7, imagePath: "./deck/3_of_spades.png", value: 3 },
  { id: 8, imagePath: "./deck/3_of_clubs.png", value: 3 },
  { id: 9, imagePath: "./deck/4_of_hearts.png", value: 4 },
  { id: 10, imagePath: "./deck/4_of_diamonds.png", value: 4 },
  { id: 11, imagePath: "./deck/4_of_spades.png", value: 4 },
  { id: 12, imagePath: "./deck/4_of_clubs.png", value: 4 },
  { id: 13, imagePath: "./deck/5_of_hearts.png", value: 5 },
  { id: 14, imagePath: "./deck/5_of_diamonds.png", value: 5 },
  { id: 15, imagePath: "./deck/5_of_spades.png", value: 5 },
  { id: 16, imagePath: "./deck/5_of_clubs.png", value: 5 },
  { id: 17, imagePath: "./deck/6_of_hearts.png", value: 6 },
  { id: 18, imagePath: "./deck/6_of_diamonds.png", value: 6 },
  { id: 19, imagePath: "./deck/6_of_spades.png", value: 6 },
  { id: 20, imagePath: "./deck/6_of_clubs.png", value: 6 },
  { id: 21, imagePath: "./deck/7_of_hearts.png", value: 7 },
  { id: 22, imagePath: "./deck/7_of_diamonds.png", value: 7 },
  { id: 23, imagePath: "./deck/7_of_spades.png", value: 7 },
  { id: 24, imagePath: "./deck/7_of_clubs.png", value: 7 },
  { id: 25, imagePath: "./deck/8_of_hearts.png", value: 8 },
  { id: 26, imagePath: "./deck/8_of_diamonds.png", value: 8 },
  { id: 27, imagePath: "./deck/8_of_spades.png", value: 8 },
  { id: 28, imagePath: "./deck/8_of_clubs.png", value: 8 },
  { id: 29, imagePath: "./deck/9_of_hearts.png", value: 9 },
  { id: 30, imagePath: "./deck/9_of_diamonds.png", value: 9 },
  { id: 31, imagePath: "./deck/9_of_spades.png", value: 9 },
  { id: 32, imagePath: "./deck/9_of_clubs.png", value: 9 },
  { id: 33, imagePath: "./deck/10_of_hearts.png", value: 10 },
  { id: 34, imagePath: "./deck/10_of_diamonds.png", value: 10 },
  { id: 35, imagePath: "./deck/10_of_spades.png", value: 10 },
  { id: 36, imagePath: "./deck/10_of_clubs.png", value: 10 },
  { id: 37, imagePath: "./deck/jack_of_hearts.png", value: 11 },
  { id: 38, imagePath: "./deck/jack_of_diamonds.png", value: 11 },
  { id: 39, imagePath: "./deck/jack_of_spades.png", value: 11 },
  { id: 40, imagePath: "./deck/jack_of_clubs.png", value: 11 },
  { id: 41, imagePath: "./deck/queen_of_hearts.png", value: 12 },
  { id: 42, imagePath: "./deck/queen_of_diamonds.png", value: 12 },
  { id: 43, imagePath: "./deck/queen_of_spades.png", value: 12 },
  { id: 44, imagePath: "./deck/queen_of_clubs.png", value: 12 },
  { id: 45, imagePath: "./deck/king_of_hearts.png", value: 13 },
  { id: 46, imagePath: "./deck/king_of_diamonds.png", value: 13 },
  { id: 47, imagePath: "./deck/king_of_spades.png", value: 13 },
  { id: 48, imagePath: "./deck/king_of_clubs.png", value: 13 },
  { id: 49, imagePath: "./deck/ace_of_hearts.png", value: 14 },
  { id: 50, imagePath: "./deck/ace_of_diamonds.png", value: 14 },
  { id: 51, imagePath: "./deck/ace_of_spades.png", value: 14 },
  { id: 52, imagePath: "./deck/ace_of_clubs.png", value: 14 },
];

var gamesPlayedPlayer1 = 0;
var gamesWonPlayer1 = 0;
var ties = 0;

var gamesPlayedPlayer2 = 0;
var gamesWonPlayer2 = 0;

var currentCard = 0;
var playerValueTot = 0; // Initialize total player value outside the function
var enemyValueTot = 0;  // Initialize total enemy value outside the function

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        newCard();
      } else if (event.code === "Escape") {
        resetPage();
      }
});

function resetPage() {
    location.reload(); // Reload the page to reset the game
  }

function initializeGame() {
playerValueTot = 0; // Update total player value
enemyValueTot = 0;
}
function newCard() {
  var randomNumberPlayer = Math.floor(Math.random() * cardDeck.length);
  var randomNumberDealer = Math.floor(Math.random() * cardDeck.length);

  var playerValue = cardDeck[randomNumberPlayer].value;
  var enemyValue = cardDeck[randomNumberDealer].value;

  gamesPlayedPlayer1++; // Increment games played for player 1
  gamesPlayedPlayer2++; // Increment games played for player 2


  document.getElementById("cardImage").src = cardDeck[randomNumberPlayer].imagePath;
  document.getElementById("cardImageDealer").src = cardDeck[randomNumberDealer].imagePath;
  document.getElementById("enemyScore").innerHTML = enemyValue;
  document.getElementById("enemyScoreTotal").innerHTML = enemyValueTot; // Update total enemy value
  document.getElementById("playerScore").innerHTML = playerValue;
  document.getElementById("playerScoreTotal").innerHTML = playerValueTot; // Update total player value
  console.log("Player:", playerValue);
  console.log("Enemy:", enemyValue);
  checkValue();

  function checkValue() {
    if (playerValue > enemyValue) {
      cardImage.style.border = "5px solid green";
      cardImageDealer.style.border = "5px solid red";
      playerValueTot += playerValue; // Update total player value
      gamesWonPlayer1++; // Increment games won for player 1
      console.log("Player wins", playerValue, "Total:", playerValueTot);
    } else if (enemyValue > playerValue) {
      cardImageDealer.style.border = "5px solid green";
      cardImage.style.border = "5px solid red";
      enemyValueTot += enemyValue; // Update total enemy value
      gamesWonPlayer2++; // Increment games won for player 2
      console.log("Enemy wins", playerValue, "Total:", enemyValueTot);
    } else if (enemyValue == playerValue) {
      cardImageDealer.style.border = "5px solid yellow";
      cardImage.style.border = "5px solid yellow";
      ties++;
      console.log("Draw");
    }
  
    // Call the function to update win percentages here
    updateWinPercentage();
  }
  
 function updateWinPercentage() {
  var winPercentagePlayer1 = (gamesWonPlayer1 / gamesPlayedPlayer1) * 100;
  var winPercentagePlayer2 = (gamesWonPlayer2 / gamesPlayedPlayer2) * 100;
  var tiesPercentage = (ties / (gamesPlayedPlayer1 + gamesPlayedPlayer2)) * 100;


  document.getElementById("player1WinPercentage").textContent = winPercentagePlayer1.toFixed(2) + "%";
  document.getElementById("player2WinPercentage").textContent = winPercentagePlayer2.toFixed(2) + "%";
  document.getElementById("tiePercentage").textContent = tiesPercentage.toFixed(2) + "%";


}


  }
