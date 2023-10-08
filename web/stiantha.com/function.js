
document.addEventListener('DOMContentLoaded', function() {
 
  document.getElementsByTagName('form')[0].onsubmit = function(evt) {
    evt.preventDefault(); // Preventing the form from submitting
    checkWord(); // Do your magic and check the entered word/sentence
  }
 
  // Get the focus to the text input to enter a word right away.
  document.getElementById('terminalTextInput').focus();
 
  // Getting the text from the input
  var textInputValue = document.getElementById('terminalTextInput').value.trim();
 
  //Getting the text from the results div
  var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;
 
  // Clear text input
  var clearInput = function(){
    document.getElementById('terminalTextInput').value = "";
  }
 
  // Scroll to the bottom of the results div
  var scrollToBottomOfResults = function(){
    var terminalResultsDiv = document.getElementById('terminalReslutsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }
 
  // Scroll to the bottom of the results
  scrollToBottomOfResults();
 
  // Add text to the results div
  var addTextToResults = function(textToAdd){
    document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  }
 
  // Getting the list of keywords for help & posting it to the screen
  var postHelpList = function(){
    // Array of all the help keywords
    var helpKeyWords = [
      "- Open + website",
      "- Google + keyword",
      "- YouTube + keyword",
      "- Wiki + keyword",
      "- Time",
      "- Date",
    ].join('<br>');
    addTextToResults(helpKeyWords);
  }
 
  // Getting the time and date and post it depending on what you request for
  var getTimeAndDate = function(postTimeDay){
    var timeAndDate = new Date();
    var timeHours = timeAndDate.getHours();
    var timeMinutes = timeAndDate.getMinutes();
    var dateDay = timeAndDate.getDate();
    console.log(dateDay);
    var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
    var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.
 
    if (timeHours < 10){ // if 1 number display 0 before it.
      timeHours = "0" + timeHours;
    }
 
    if (timeMinutes < 10){ // if 1 number display 0 before it.
      timeMinutes = "0" + timeMinutes;
    }
 
    var currentTime = timeHours + ":" + timeMinutes;
    var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
 
    if (postTimeDay == "time"){
      addTextToResults(currentTime);
    }
    if (postTimeDay == "date"){
      addTextToResults(currentDate);
    }
  }
 
  // Opening links in a new window
  var openLinkInNewWindow = function(linkToOpen){
    window.open(linkToOpen, '_blank');
    clearInput();
  }
 
  // Having a specific text reply to specific strings
  var textReplies = function() {
    switch(textInputValueLowerCase){
      // replies
      case "code":
        case "src":
          case "source":
            case "source code":
        clearInput();
        addTextToResults("source code is not currently available");
        break;
 
      case "i love you":
      case "love you":
      case "love":
        clearInput();
        addTextToResults("Thank you! I do too!");
        break;
 
 
      case "hello":
      case "hi":
      case "hola":
        clearInput();
        addTextToResults("Hello! How are you?");
        break;
 
      // replies 
 
      case "youtube":
        clearInput();
        addTextToResults("Type youtube + something to search for.");
        break;
 
      case "google":
        clearInput();
        addTextToResults("Type google + something to search for.");
        break;
 
        case "wiki":
        case "wikipedia":
          clearInput();
          addTextToResults("Type wiki + something to search for.");
          break;  
 
      case "time":
        clearInput();
        getTimeAndDate("time");
        break;
 
      case "date":
        clearInput();
        getTimeAndDate("date");
        break;
 
      case "help":
      case "?":
        clearInput();
        postHelpList();
        break;
 
      default:
      clearInput();
      addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
      break;
    }
  }
 
// Main function to check the entered text and assign it to the correct function
  var checkWord = function() {
    textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
    textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string
 
    if (textInputValue != ""){ //checking if text was entered
      addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
      if (textInputValueLowerCase.substr(0,5) == "open ") { //if the first 5 characters = open + space
        openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,8) == "youtube ") {
        openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
        addTextToResults("<i>I've searched on YouTube for " + "<b>" + textInputValue.substr(8) + "</b>" + " it should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,7) == "google ") {
        openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
        addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,5) == "wiki "){
        openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>I've searched on Wikipedia for " + "<b>" + textInputValue.substr(5) + "</b>" + " it should be opened now.</i>");
      
      
      } else{
        textReplies();
      }
    }
  };
 
});

// Get the text input element
const inputElement = document.getElementById('terminalTextInput-nav');

// Add event listener for input
inputElement.addEventListener('keydown', function(event) {
  // Check if Enter key is pressed
  if (event.key === 'Enter') {
    // Get the input value
    const inputValue = inputElement.value.toLowerCase().trim();

    // Navigate based on the input value
    if (inputValue === 'home') {
      window.location.href = '#home';
    
    } else if (inputValue === 'terminal') {
      window.location.href = '#projects';
    
    } else if (inputValue === 'projects') {
      window.location.href = '#projects';
    
    }  else if (inputValue === 'about') {
      window.location.href = '#about';
    
    }  else if (inputValue === 'contact') {
      window.location.href = '#contact';
    
    }  else if (inputValue === 'snakes') {
      window.location.href = '/spill/snake/index.html';
    
    }  else if (inputValue === 'snake') {
      window.location.href = '/spill/snake/index.html';
    
    }  else if (inputValue === 'tictac') {
      window.location.href = '/spill/tictac/index.html';
    
    }  else if (inputValue === 'været') {
      window.location.href = '#footer';
    }
      else if (inputValue === 'gfx') {
      window.location.href = '/gfx/index.html';
    }
  
    else {
      clearInput();
    }

     
  

    // Clear the input value
    inputElement.value = '';
  }
});

// Helper function to clear the input value
function clearInput() {
  inputElement.value = '';
}

// Helper function to add text to the results area
function addTextToResults(text) {
  const resultsElement = document.getElementById('results');
  resultsElement.innerHTML += text;
}

$('.input-field').on('input', function() {
  
  if ( $(this).val().length > 0 ) {
    
    $(this).parent('.input').addClass('has-input');
    
  } else {
    
    $(this).parent('.input').removeClass('has-input');
    
  }

});