var predefinedColors = [
    '#1abc9c', // Teal
    '#16a085', // Dark Teal
    '#2ecc71', // Green
    '#27ae60'  // Dark Green
];

function getRandomColor() {
    var randomIndex = Math.floor(Math.random() * predefinedColors.length);
    return predefinedColors[randomIndex];
}

var squares = document.querySelectorAll('.square');
squares.forEach(function(square) {
    square.style.backgroundColor = getRandomColor();
});