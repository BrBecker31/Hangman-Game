// <!-- Bryan Becker
// Week 3 Homework for U of A Bootcamp -->

// Arrays holding hangman words to be guessed
var cities = ["phoenix", "tucson", "sedona", "yuma", "tombstone", "prescott","payson","kingman", "strawberry", "flagstaff", "snowflake", "quartzsite"];


// Variables to grab a random city from the array
var city = cities[Math.floor(Math.random() * cities.length)];


//Array for holding the answer
var answerArray = [];
for(var i=0; i < city.length; i++){
	answerArray[i] = "_";
}
			
// Variable to keep track of letters that remain to be tracked
var remainingLetters = city.length;



// Game Loop
function game(){
	
	
while(remainingLetters > 0){
	// show the player their progress
	var el = document.getElementById("test");
	el.innerHTML = answerArray.join(" ");
	// Get guess from user. Getting guess from keyup instead of prompt
	var guess = prompt("Guess a letter, or click cancel to stop.");
	
	if(guess === null){
	//exit the game loop
	break;
	}else if (guess.length !== 1) {
		alert("Please enter a single letter.");
	} else {
		//Update the game state with the guess
		for( var j=0; j < city.length; j++ ){
			if(city[j] === guess){
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
	}

	//end of game
}
	
	el.innerHTML = answerArray.join(" ");
alert("Good Job! The answer was " + city + ".");
}
	
