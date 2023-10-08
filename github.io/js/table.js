
filterSelection("all")

function filterSelection(input) {
  // Declare variables
  let table, tr, i;
  table = document.getElementById("filterTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the pressed button
  for (i = 1; i < tr.length; i++) { // Start from 1 to ignore header row
    if (tr[i].classList.contains(input) || input == "all") tr[i].style.display = "";
    else tr[i].style.display = "none";
  }
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = btnContainer.getElementsByClassName("active");
    current[0].classList.toggle("active");
    this.classList.toggle("active");
  });
}
