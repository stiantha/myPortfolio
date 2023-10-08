let level = 1;
let gold = 0;

function goldUp() {
    gold++;
    updateGoldValue();
}

function levelUp() {
    level += 0.1;
    updateLevelValue();
}

function updateGoldValue() {
    document.getElementById("goldValue").textContent = `Gold: ${gold}`;
}

function updateLevelValue() {
    document.getElementById("levelValue").textContent = `Level: ${level.toFixed(1)}`;
}
