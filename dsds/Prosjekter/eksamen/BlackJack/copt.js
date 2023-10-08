function countBlackJackPoints(cards) {
    let points = 0;
    let aceCount = 0;

    if (cards === null) {
        return null;
    }

    for (let card of cards) {
        let suitAndRank = card.split(' ');
        let rank = suitAndRank[1];

        if (rank === 'Ess') {
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


function countBlackJackPoints(cards) {
    let points = 0;

    if (cards === null) {
        return null;
    }

    for (let card of cards) {
        let suitAndRank = card.split(' ');
        let rank = suitAndRank[1];

        if (rank === 'Ess') {
            points += 11;
        } else if (rank === 'Konge' || rank === 'Dame' || rank === 'Knekt') {
            points += 10;
        } else {
            points += parseInt(rank);
        }
    }

    return points;
}