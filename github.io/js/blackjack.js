/* ------------------------------------------------------------------------------------------------------ */
/* -----------------------------------------------MODEL-------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------ */
const suits = ["Heart", "Square", "Clover", "Spade"];
let cards = [];
let shuffledCards = [];
let playerHand = [];
let dealerHand = [];
let isGameInProgress = false;

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
/* ------------------------------------------------------------------------------------------------------ */
/* -----------------------------------------------VIEW--------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------ */
const appContainer = document.getElementById('terminalResultsCont'); // Reference to the terminal container

function addTextToResults(text) {
    const resultElement = document.createElement('p');
    resultElement.innerHTML = text;
    appContainer.appendChild(resultElement);
}
function renderGame() {
    appContainer.innerHTML = '';
    addTextToResults("<h1>Blackjack</h1>");
    addTextToResults("<h2>Your Hand:</h2>");
    for (let card of playerHand) {
        addTextToResults(card.id + " ");
    }
    addTextToResults("<h2>Dealer's Hand:</h2>");
    if (isGameInProgress) {
        addTextToResults(dealerHand[0].id + " ??? ");
    } else {
        for (let card of dealerHand) {
            addTextToResults(card.id + " ");
        }
    }
    addTextToResults("<p>Your Score: " + countBlackJackPoints(playerHand) + "</p>");
    addTextToResults("<p>Dealer's Score: " + (isGameInProgress ? "???" : countBlackJackPoints(dealerHand)) + "</p>");
}

/* ------------------------------------------------------------------------------------------------------ */
/* --------------------------------------------CONTROLLER------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------------ */
function initializeGame() {
    cards = [];
    cardLoop();
    shuffledCards = shuffle(cards);
    playerHand = [];
    dealerHand = [];
}

function deal() {
    if (isGameInProgress) {
        addTextToResults("Finish the current game before starting a new one.");
        return;
    }

    initializeGame();
    playerHand = [shuffledCards.pop(), shuffledCards.pop()];
    dealerHand = [shuffledCards.pop(), shuffledCards.pop()];
    isGameInProgress = true;
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
/* ------------------------------------------------------------------------------------------------------ */
/* -------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------------------------------------ */