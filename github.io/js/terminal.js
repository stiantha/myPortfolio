document.addEventListener("DOMContentLoaded", function () {
    let isGameInProgress = false;
    const terminalInput = document.getElementById("terminalTextInput");
    const resultsElement = document.getElementById("terminalResultsCont");

    terminalInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkWord();
        }
    });

    terminalInput.focus();

    function clearInput() {
        terminalInput.value = "";
    }

    function addTextToResults(text) {
        resultsElement.innerHTML = "<p>" + text + "</p>";
        scrollToBottomOfResults();
    }

    function scrollToBottomOfResults() {
        resultsElement.scrollTop = resultsElement.scrollHeight;
    }

    function postHelpList() {
        const helpKeyWords = [
            "- Open + website",
            "- Google + keyword",
            "- YouTube + keyword",
            "- Wiki + keyword",
            "- Time",
            "- Date",
        ].join("<br>");
        addTextToResults(helpKeyWords);
    }

    function getTimeAndDate(postTimeDay) {
        const timeAndDate = new Date();
        const timeHours = String(timeAndDate.getHours()).padStart(2, "0");
        const timeMinutes = String(timeAndDate.getMinutes()).padStart(2, "0");
        const dateDay = timeAndDate.getDate();
        const dateMonth = timeAndDate.getMonth() + 1;
        const dateYear = timeAndDate.getFullYear();
        const currentTime = timeHours + ":" + timeMinutes;
        const currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

        if (postTimeDay === "time") {
            addTextToResults(currentTime);
        }
        if (postTimeDay === "date") {
            addTextToResults(currentDate);
        }
    }

    function openLinkInNewWindow(linkToOpen) {
        window.open(linkToOpen, "_blank");
        clearInput();
    }

    function textReplies(textInputValueLowerCase) {
        switch (textInputValueLowerCase) {
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
                addTextToResults("Thank you! I love you too!");
                break;

            case "hello":
            case "hi":
            case "hola":
                clearInput();
                addTextToResults("Hello! How are you?");
                break;

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
            case "vm":
                colaAutomatView();
                break;

            default:
                clearInput();
                addTextToResults("'" + textInputValueLowerCase + "'" + "<BR> is not recognized as an internal or external command, <br> operable program or batch file.");
                break;
        }
    }

    function checkWord() {
        const textInputValue = terminalInput.value.trim();
        const textInputValueLowerCase = textInputValue.toLowerCase();

        if (textInputValue !== "") {
            if (textInputValueLowerCase === "blackjack") {
                initializeBlackjack();
            } else if (textInputValueLowerCase.startsWith("open ")) {
                openLinkInNewWindow("http://" + textInputValueLowerCase.substr(5));
            } else if (textInputValueLowerCase.startsWith("youtube ")) {
                openLinkInNewWindow("https://www.youtube.com/results?search_query=" + textInputValueLowerCase.substr(8));
            } else if (textInputValueLowerCase.startsWith("google ")) {
                openLinkInNewWindow("https://www.google.com/search?q=" + textInputValueLowerCase.substr(7));
            } else if (textInputValueLowerCase.startsWith("wiki ")) {
                openLinkInNewWindow("https://wikipedia.org/w/index.php?search=" + textInputValueLowerCase.substr(5));
            } else {
                textReplies(textInputValueLowerCase);
            }
            clearInput();
        }
    }

    function initializeBlackjack() {
        console.log("Initializing Blackjack...");
        addTextToResults("Initializing Blackjack...");
        initializeGame()
        
    }

    terminalInput.addEventListener("input", function () {
        if (this.value.length > 0) {
            this.parentElement.classList.add("has-input");
        } else {
            this.parentElement.classList.remove("has-input");
        }
    });
    
});
