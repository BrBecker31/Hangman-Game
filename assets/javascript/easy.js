// <!-- Bryan Becker
// Week 3 Homework for U of A Bootcamp -->

// Arrays holding hangman words to be guessed
var cities = ["phoenix", "tucson", "sedona", "yuma", "tombstone", "prescott"];



// Variables to grab a random city from the array
var randomPick = cities[Math.floor(Math.random() * cities.length)];



// created an empty array to add all the letters in the word
var answerArray = [];
// for loop cycles through the length of the random word selected and adds underscores to represent the lenght of the word in the answerArray
for(i = 0; i < randomPick.length; i++){
	answerArray[i] = "_";
}


// remainingLetters will keep track of how many letters are left to be guessed
var remainingLetters = randomPick.length;



// while loop will keep running as long as remainingLetters is more then 0
//Once user guesses all correct letters loop will stop
while(remainingLetters > 0){

// alert will be usedfor showing player there progress
// answerArray.join() takes item from array and turns it into a string
alert(answerArray.join(" "));

// guess will store the users response
var guess = prompt("Guess a letter, or click cancel to stop playing.");

// loop will make sure the user only typed a single character and that the user doesnt want to quit
if(guess === null){
	break;
}else if (guess.length !== 1){
	alert("Please only enter a single letter.")
}else {
	//loop will run through the random word and see if the user selected a correct letter
	for(j=0;j < randomPick.length;j++){
		// checks to see if the current letter were looking at matches user guess
		if(randomPick[j] === guess){
			// if it is this updates the answer array with the current guess
			answerArray[j] = guess;
			// this decreases remainingLetters by 1
			remainingLetters--;
		}
	}
}

// end of game loop
}



alert(answerArray.join(""));
alert("Good Job! The answer was " + randomPick);