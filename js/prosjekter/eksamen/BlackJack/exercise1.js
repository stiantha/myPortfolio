function countBlackJackPoints(cards) {
    let points = 0;

    if (cards == null) {
        return null;
    }

    for (let card of cards) {
        let suitAndRank = card.split(' ');
        let rank = suitAndRank[1];
        // variabel som heter rank

        if (rank == 'Ess') {
            points += 11;
        } else if (rank == 'Konge' || rank == 'Dame' || rank == 'Knekt') {
            points += 10;
        } else {
            points += parseInt(rank);
        }
        // verdier til variablen rank
    }

    return points;
}

Dame, Rank