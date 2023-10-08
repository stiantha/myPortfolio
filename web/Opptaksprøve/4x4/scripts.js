function trykk(tagElement, alt1, alt2, alt3, alt4, alt5) {
    if (document.getElementById(alt1).innerHTML === '') {
        document.getElementById(alt1).innerHTML = tagElement.innerHTML;
        tagElement.innerHTML = '';
    } else if (document.getElementById(alt2).innerHTML === '') {
        document.getElementById(alt2).innerHTML = tagElement.innerHTML;
        tagElement.innerHTML = '';
    } else if (document.getElementById(alt3).innerHTML === '') {
        document.getElementById(alt3).innerHTML = tagElement.innerHTML;
        tagElement.innerHTML = '';
    } else if (alt4 && document.getElementById(alt4).innerHTML === '') {
        document.getElementById(alt4).innerHTML = tagElement.innerHTML;
        tagElement.innerHTML = '';
    } else if (alt5 && document.getElementById(alt5).innerHTML === '') {
        document.getElementById(alt5).innerHTML = tagElement.innerHTML;
        tagElement.innerHTML = '';
    } else {
        shakeGrid();
    }

    // Sjekker at alt er i riktig rekkefølge, dersom dette stemmer kommer det en melding om at spillet er vunnet
    if (
        document.getElementById("r1k1").innerHTML === "1" &&
        document.getElementById("r1k2").innerHTML === "2" &&
        document.getElementById("r1k3").innerHTML === "3" &&
        document.getElementById("r1k4").innerHTML === "4" &&
        document.getElementById("r2k1").innerHTML === "5" &&
        document.getElementById("r2k2").innerHTML === "6" &&
        document.getElementById("r2k3").innerHTML === "7" &&
        document.getElementById("r2k4").innerHTML === "8" &&
        document.getElementById("r3k1").innerHTML === "9" &&
        document.getElementById("r3k2").innerHTML === "10" &&
        document.getElementById("r3k3").innerHTML === "11" &&
        document.getElementById("r3k4").innerHTML === "12" &&
        document.getElementById("r4k1").innerHTML === "13" &&
        document.getElementById("r4k2").innerHTML === "" &&
        document.getElementById("r4k3").innerHTML === "" &&
        document.getElementById("r4k4").innerHTML === ""
    ) {
        document.getElementById('Win').style.opacity = 1;
    }
}

// Rister skjerm ved feil og viser "Kan ikke flyttes" i 2 sekunder
function shakeGrid() {
    var grid = document.getElementsByClassName("grid")[0];
    grid.classList.add("shake");

    // Feilmelding
    var Error = document.getElementById('Error');
    Error.textContent = "Kan ikke flyttes";
    Error.style.opacity = "1";

    setTimeout(function() {
        grid.classList.remove("shake");
        Error.style.opacity = "0";
    }, 2000);
}
