

const colors = [
    'rgb(60, 250, 90)',
    'rgb(60, 230, 40)',
    'rgb(60, 250, 110)',
];

const colorText1 = document.getElementById("colorText1");
const colorText2 = document.getElementById("colorText2");
const colorText3 = document.getElementById("colorText3");

function changeColor(element) {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    
    element.style.color = newColor;
}

setInterval(() => {
    changeColor(colorText1);
    changeColor(colorText2);
    changeColor(colorText3);
}, 1000);