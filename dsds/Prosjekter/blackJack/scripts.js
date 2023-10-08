document.addEventListener('DOMContentLoaded', function () {
// Model
const suits = ["Heart", "Square", "Clover", "Spade"];
let cards = [];
let shuffledCards = [];

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function cardLoop() {
    for (let cardIndex = 1; cardIndex <= 52; cardIndex++) {
        let suitIndex = Math.floor((cardIndex - 1) / 13);
        let cardNumber = ((cardIndex - 1) % 13) + 1;
        let cardId = `${suits[suitIndex]}-${cardNumber}`;
        cards.push({
            id: cardId,
            suit: suits[suitIndex],
            number: cardNumber,
        });
    }
}

function countBlackJackPoints(cards) {
    let points = 0;
    let aceCount = 0;

    if (cards === null) {
        return null;
    }

    for (let card of cards) {
        let suitAndRank = card.id.split('-');
        let rank = suitAndRank[1];

        if (rank === 'Ace') {
            points += 11;
            aceCount++;
        } else if (rank === 'Konge' || rank === 'Dame' || rank === 'Knekt') {
            points += 10;
        } else {
            points += parseInt(rank);
        }
    }

    while (points > 21 && aceCount > 0) {
        points -= 10;
        aceCount--;
    }

    return points;
}


// View
const appContainer = document.getElementById('terminalResultsCont');

function renderGame() {
    appContainer.innerHTML = '';
    appContainer.innerHTML += "<h1>Blackjack</h1>";

    appContainer.innerHTML += "<h2>Your Hand:</h2>";
    for (let card of playerHand) {
        appContainer.innerHTML += card.id + " ";
    }
    appContainer.innerHTML += "<br>";

    appContainer.innerHTML += "<h2>Dealer's Hand:</h2>";
    for (let card of dealerHand) {
        appContainer.innerHTML += card.id + " ";
    }
    appContainer.innerHTML += "<br>";

    appContainer.innerHTML += "<p>Your Score: " + countBlackJackPoints(playerHand) + "</p>";
    appContainer.innerHTML += "<p>Dealer's Score: " + countBlackJackPoints(dealerHand) + "</p>";
}




// Controller
let playerHand = [];
let dealerHand = [];

function initializeGame() {
    cards = [];
    cardLoop();
    shuffledCards = shuffle(cards);
    playerHand = [];
    dealerHand = [];
}

function deal() {
    initializeGame();
    playerHand = [shuffledCards.pop(), shuffledCards.pop()];
    dealerHand = [shuffledCards.pop(), shuffledCards.pop()];
    renderGame();
    promptUserAction();
}

function hit() {
    playerHand.push(shuffledCards.pop());
    renderGame();
    if (countBlackJackPoints(playerHand) > 21) {
      endGame(false);
    } else {
      promptUserAction();
    }
  }

function stand() {
    while (countBlackJackPoints(dealerHand) < 17) {
      dealerHand.push(shuffledCards.pop());
    }
    renderGame();
    endGame(true);
  }
function reset() {
    initializeGame();
    renderGame();
    promptUserAction();
}

function endGame(playerStands) {
    if (playerStands) {
        while (countBlackJackPoints(dealerHand) < 17) {
            dealerHand.push(shuffledCards.pop());
        }
    }
    renderGame();
    const playerScore = countBlackJackPoints(playerHand);
    const dealerScore = countBlackJackPoints(dealerHand);

    if (playerScore > 21 || (dealerScore <= 21 && dealerScore >= playerScore)) {
        appContainer.innerHTML += "<h2>Dealer Wins!</h2>";
    } else if (dealerScore > 21 || playerScore > dealerScore) {
        appContainer.innerHTML += "<h2>You Win!</h2>";
    } else {
        appContainer.innerHTML += "<h2>It's a Tie!</h2>";
    }
}    
});