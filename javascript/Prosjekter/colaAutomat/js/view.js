firstMessage = "Velkommen"
secMessage = "Trykk på mynter for å legge til penger"
function updateLedDisplay(message) {
  const ledDisplay = document.getElementById("led-display");
  ledDisplay.innerHTML = message;
}

function updateView() {
  
  document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="container">
      <div class="container_cokes">
        ${repeatImgDivHtml("coke", "coke", cokesInStore)}
      </div>
      <div class="panel">
        <output id="led-display">
          > ${valueFromCoinCounts(coinsInserted)} kroner saldo
          <br>
          > ${valueFromCoinCounts(coinsReturned)} kroner tilbake
          <br>
          >>> ${firstMessage} <<<
          <br>
          > ${secMessage} <
          <br>
          
        </output>
        <button onclick="buyCoke()">Kjøp 25 NOK</button>
        <button onclick="returnCoins()">Angre</button>
        <div class="coinsIntake">
          ${getCoinsHtml(coinsInserted)}
        </div>
        <div class="coinsReturn">
          ${getCoinsHtml(coinsReturned)}
          
        </div>
        <div class="innmat">
          <button onclick="window.location.reload()">Reset</button>
          <button onclick="takeCoins()">Ta Myntene</button>
          ${getCoinsHtml(coinsUser)}
          
        </div>
        
      </div>
      <div class="delivery">
        <div onclick="takeCoke()">
          ${repeatImgDivHtml(
            "rotate",
            "coke",
            isCokeInDelivery ? 1 : 0
          )}
        </div>
      </div>
    </div>
    
    
  `;
  
}



function getCoinsHtml(coinCounts) {
  return /*HTML*/ `
        <div class="coins">
            <div onclick="insertCoin(1)">${repeatImgDivHtml(
              "coin",
              "1kr",
              coinCounts[0]
            )}</div>
            <div onclick="insertCoin(5)">${repeatImgDivHtml(
              "coin",
              "5kr",
              coinCounts[1]
            )}</div>
            <div onclick="insertCoin(10)">${repeatImgDivHtml(
              "coin",
              "10kr",
              coinCounts[2]
            )}</div>
            <div onclick="insertCoin(20)">${repeatImgDivHtml(
              "coin",
              "20kr",
              coinCounts[3]
            )}</div>            
        </div>
    `;
}

function repeatImgDivHtml(cssClass, image, count) {
  return /*HTML*/ `<div class="${cssClass}"><img src="img/${image}.png"/></div>`.repeat(
    count
  );
}

function terjeFeirer(){
  document.getElementById("app").innerHTML += /*HTML*/ `
  <div class="terje"></div>
  `

}