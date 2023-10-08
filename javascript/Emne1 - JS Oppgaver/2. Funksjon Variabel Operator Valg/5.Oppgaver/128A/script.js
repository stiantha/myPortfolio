let level = 1;
let gold = 0;
updateGoldValue();
updateLevelValue();
function goldUp() {
    gold = gold + level;
    updateGoldValue();
}

function levelUp() {
    level += 0.1;
    updateLevelValue();
}

function upgradeOne() {
    if (gold >= 10) {
        gold -= 10;
        level += 1;
        updateGoldValue();
        updateLevelValue();
    }
}

function updateGoldValue() {
    document.getElementById("goldValue").textContent = `${gold.toPrecision(2)}`;
}

function updateLevelValue() {
    document.getElementById("levelValue").textContent = `${level.toFixed(1)}`;
}
