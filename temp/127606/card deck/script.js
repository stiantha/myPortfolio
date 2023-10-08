let suits = ['Spar', 'Hjerter', 'Kløver', 'Ruter'];
let cardNames = ['Ess', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Knekt', 'Dame', 'Konge']
let html = '';
for(let cardIndex = 0; cardIndex < 52; cardIndex++){
    let suit = Math.floor(cardIndex / 13);
    let cardNameIndex = cardIndex % 13;
    html += /*HTML*/`
        <li>
            <img src="${cardNames[cardNameIndex]}of${suits[suit]}.jpg"/>
            index: ${cardIndex}
        </li>            
    `;
}
document.body.innerHTML = html;