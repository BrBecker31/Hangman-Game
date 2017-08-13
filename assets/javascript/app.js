// Global variables
// ==================================================================================
// Arrays holding hangman words to be guessed
var cities = ["phoenix", "tucson", "sedona", "yuma", "tombstone", "prescott","payson","kingman", "strawberry", "flagstaff", "snowflake", "quartzsite"];

// Array for holding the random word
var randomWord = "";

// Array for holding each letter from the random city picked
var lettersinWord = [];

var numberBlanks = 0;

// Array for holding guessed abd unguessed words (y _ _ a)
var blanksAndSuccesses = [];

var wrongLetters = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

// functions
// ==================================================================================

function startGame() {
	// Variables to grab a random city from the array
	randomWord = cities[Math.floor(Math.random() * cities.length)];
	//splits random city into individual characters and puts it into an Array
	lettersinWord = randomWord.split("");
	numberBlanks = lettersinWord.length;

	//Reset for each game
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// Put blanksAndSuccesses with the right number of blanks
	for(var i = 0; i < numberBlanks; i++){
		blanksAndSuccesses.push("_");  
	}

	// Change html (join(" ") = takes away the default commas in between the _, _ _)
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numberGuess").innerHTML = guessesLeft;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;


	console.log(lettersinWord);
	console.log(numberBlanks);
	console.log(blanksAndSuccesses);
}



function checkLetters(letter){
	//check to see if letter is in word
	var isLetterInWord = false;

	for(var i = 0; i <numberBlanks; i++){
		if(randomWord[i] == letter){
			isLetterInWord = true;
		}
	}

	//Check where in the word the letter exists, then populate out blanksandsuccesses array
	if (isLetterInWord) {
		for(var i= 0; i < numberBlanks; i++){
		if (randomWord[i] == letter) {
			blanksAndSuccesses[i] = letter;
			}
		}
		//Letter wasnt found
	} else {
		wrongLetters.push(letter);
		guessesLeft--;
	}
	
}

function roundComplete (){
	//Update the HTML to reflect stats	
	document.getElementById("numberGuess").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");
	//Check if user won
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		wins++;
		alert("You Won!");
		//update win counter in HTML
		document.getElementById("wins").innerHTML = wins;
		startGame();
		//Check if user lost
	}else if(guessesLeft == 0){
		losses++;
		alert("You Lost!");

		//update HTML
		document.getElementById("losses"). innerHTML = losses;
		startGame();
	}
	

}
// Main
// ==================================================================================

// Starts the code for the first time
startGame();

//Keyclicks
document.onkeyup = function(event) {
	//string.fromcharcode(65); = Takes the unicode number from the keyup event and turn it into a character(A)
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	//check letter guessed against letters in randomWord
	checkLetters(letterGuessed);
	roundComplete();



	console.log(letterGuessed);
}