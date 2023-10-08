//todo JavaScript String Methods Cheatsheet

//* charAt()
// Returns the character at the specified index in a string
const str = "Hello, world!";
const index = 7;
const character = str.charAt(index); // character = "w"

//* charCodeAt()
// Returns the Unicode value of the character at the specified index
const unicodeValue = str.charCodeAt(index); // unicodeValue = 119

//* String.fromCharCode()
// Returns a string created from a sequence of Unicode values
const unicodeValue1 = 72;
const unicodeValue2 = 101;
const createdString = String.fromCharCode(unicodeValue1, unicodeValue2); // createdString = "He"

//? includes()
// Checks if a string contains a specified substring
const substring = "world";
const containsSubstring = str.includes(substring); // containsSubstring = true

//? indexOf()
// Returns the first index at which a substring is found in a string
const indexOfSubstring = str.indexOf(substring); // indexOfSubstring = 7

//? lastIndexOf()
// Returns the last index at which a substring is found in a string
const lastIndexOfSubstring = str.lastIndexOf(substring); // lastIndexOfSubstring = 7

//? length()
// Returns the number of characters in a string
const strLength = str.length; // strLength = 13

//? repeat()
// Returns a new string with a specified number of copies of the original string
const repeatedString = str.repeat(3); // repeatedString = "Hello, world!Hello, world!Hello, world!"

//? replace()
// Returns a new string with some or all matches of a pattern replaced by a replacement
const replacedString = str.replace("world", "universe"); // replacedString = "Hello, universe!"

//? replaceAll() (Requires ES2021+)
// Returns a new string with all matches of a pattern replaced by a replacement
const replacedAllString = str.replaceAll("l", "L"); // replacedAllString = "HeLLo, worLd!"

//* startsWith()
// Checks if a string starts with a specified substring
const startsWithHello = str.startsWith("Hello"); // startsWithHello = true

//* endsWith()
// Checks if a string ends with a specified substring
const endsWithWorld = str.endsWith("world!"); // endsWithWorld = true

//* substr()
// Returns a portion of a string starting from a specified index
const subString = str.substr(7, 5); // subString = "world"

//* substring()
// Returns a portion of a string between two specified indices
const subStringBetween = str.substring(7, 12); // subStringBetween = "world"

//* toLowerCase()
// Converts a string to lowercase
const lowerCaseString = str.toLowerCase(); // lowerCaseString = "hello, world!"

//* toUpperCase()
// Converts a string to uppercase
const upperCaseString = str.toUpperCase(); // upperCaseString = "HELLO, WORLD!"

//! trim()
// Removes whitespace from both ends of a string
const trimmedString = str.trim(); // trimmedString = "Hello, world!"

//! trimEnd() (Requires ES2021+)
// Removes whitespace from the end of a string
const trimmedEndString = str.trimEnd(); // trimmedEndString = "Hello, world!"

//! trimStart() (Requires ES2021+)
// Removes whitespace from the start of a string
const trimmedStartString = str.trimStart(); // trimmedStartString = "Hello, world!"




//! https://htmlcheatsheet.com/js/ - JavaScript Cheat Sheet