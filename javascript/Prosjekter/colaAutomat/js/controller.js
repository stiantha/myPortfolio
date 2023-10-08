function getExactChange(change) {
  const changeArray = [0, 0, 0, 0];
  if (change >= 20) {
    const num20Coins = Math.floor(change / 20);
    changeArray[3] = num20Coins;
    change -= num20Coins * 20;
  }
  if (change >= 10) {
    const num10Coins = Math.floor(change / 10);
    changeArray[2] = num10Coins;
    change -= num10Coins * 10;
  }
  if (change >= 5) {
    const num5Coins = Math.floor(change / 5);
    changeArray[1] = num5Coins;
    change -= num5Coins * 5;
  }
  if (change >= 1) {
    changeArray[0] = change;
  }
    return changeArray;      
}

function buyCoke() {
  if (isCokeInDelivery == true) {
    secMessage = "Det ligger allerede en brus klar!";
  } else {
    const totalValueInserted =
      coinsInserted[3] * 20 +
      coinsInserted[2] * 10 +
      coinsInserted[1] * 5 +
      coinsInserted[0] * 1;
    if (totalValueInserted >= 25) {
      const change = totalValueInserted - 25;
      const changeArray = getExactChange(change);
      if (changeArray) {
        for (let i = 0; i < coinsInserted.length; i++) {
          coinsInserted[i] -= changeArray[i];
          coinsReturned[i] += changeArray[i];
        }
        cokesInStore--;
        coinsInserted = [0, 0, 0, 0];
        isCokeInDelivery = true;
        secMessage = "Hent brusen!";
      } 
    }  else {
      secMessage = "Ikke nok penger satt inn";
    }
  }
  updateView();
}


function insertCoin(value){ // Onclick coins
  const index = 
      value == 1 ? 0 : 
      value == 5 ? 1 : 
      value == 10 ? 2 : 
      value == 20 ? 3 : 
      null;
  coinsInserted[index]++;
  coinsUser[index]--;
  updateView();
}

function returnCoins() { // Angre
  for (let i = 0; i < coinsInserted.length; i++) {
      coinsReturned[i] += coinsInserted[i];
  }
  coinsInserted = [0, 0, 0, 0];
  secMessage = "Pengene er blitt sendt tilbake" 
  updateView();
}

function takeCoke(){ // Onclick
  isCokeInDelivery = false;
  firstMessage = "Takk for kjøpet🚀🙉✌✨"
  updateView();
  terjeFeirer();
}

function takeCoins(){ // Ta Myntene
  for (let i = 0; i < coinsReturned.length; i++) {
      coinsUser[i] += coinsReturned[i];
  }
  coinsReturned = [0, 0, 0, 0];
  secMessage = "Du har tatt tilbake kronene"
  updateView()
}
