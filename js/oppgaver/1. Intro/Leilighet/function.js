document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
      enter();
    } else if (event.key === "ArrowLeft") {
      left();
    } else if (event.key === "ArrowDown") {
      down();
    } else if (event.key === "ArrowRight") {
      right();
    }
  });


function enter() {
    if (document.getElementById("up")) {
      document.getElementById("pos").innerHTML = "Du er i gangen";
      currentRoom = 'gang';
      updateButtonVisibility();
    }
  }
  

function exit() {
    document.getElementById("pos").innerHTML = "Du er utenfor";
}


function gang() {
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("right").style.visibility = "visible";
    document.getElementById("down").style.visibility = "visible";
    document.getElementById("up").style.visibility = "hidden";
  }
  
    
  
  
  function updateButtonVisibility() {
    const upButton = document.getElementById("up");
    const leftButton = document.getElementById("left");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
  
    if (currentRoom === 'gang') {
      upButton.style.visibility = "hidden";
      leftButton.style.visibility = "visible";
      downButton.style.visibility = "visible";
      rightButton.style.visibility = "visible";
    } else {
      upButton.style.visibility = "visible";
      leftButton.style.visibility = "hidden";
      downButton.style.visibility = "hidden";
      rightButton.style.visibility = "hidden";
    }
  }
  