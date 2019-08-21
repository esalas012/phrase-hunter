/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
 	constructor(){
 		this.missed = 0;
 		this.phrases = this.createPhrases(); //Array of five phrase objects to use with the game.(just letters and spaces);
 		this.activePhrase = null;
 		this.gameover = false;
 	}

 	/**
 	*Creates phrases for use in game
 	*@return {array} An array of phrases that could be used in the game
 	*/
 	createPhrases(){
 		return [
 			'Success is no accident',
 			'Impossible is for the unwilling',
 			'All limitations are self imposed',
 			'Aspire to inspire',
 			'Failure is not an option',
 			'Strive for greatness'
 		]	
 	}
	/**
	* Selects random phrase from phrases property
	* @return {Object} Phrase object chosen to be used
	*/
 	getRandomPhrase(){
 		let random = Math.floor(Math.random() * this.phrases.length);
 		return this.phrases[random];
 	}
 	/**
 	* Begins game by selecting a random phrase and displaying it to user
 	*/
 	startGame(){
 		document.querySelector("#overlay").style.display = "none";
 		let randomPhrase = this.getRandomPhrase();
 		this.activePhrase = new Phrase(randomPhrase);
 		this.activePhrase.addPhraseToDisplay();
 	}
 	/**
 	 * Handles onscreen  keyboard button clicks
 	 * @param (HTMLButtonElement) button - The clicked button element
 	 */
 	handleInteraction(button){
 		if(!this.gameover){
 			if(!(this.activePhrase.checkLetter(button.innerText))){
 				if(button.disabled){
 					return;
 				}
 				button.disabled = true;
 				button.classList.add("wrong");
				this.removeLife();
 			}
 			else{
 				if(button.disabled){
 					return;
 				}
 				button.disabled = true;
 				button.classList.add("chosen");
 				this.checkForWin();
 			}
 		}
 	}
 	/**
 	* Increases the value of the missed property
 	* Removes a life from the scoreboard
 	* Checks if player has remaining lives na end game if player is out
 	*/
 	removeLife(){
 		let scoreboard = document.querySelector('img[src="images/liveHeart.png"]');
 		scoreboard.setAttribute("src", "images/lostHeart.png");
 		this.missed++;
 		if(this.missed === 5){
 			this.gameOver(false);
 		}
 	}
 	/**
	*Checks for winning move 
	*@return {boolean} True if game has been won, false if game wasn't won
 	*/
	checkForWin(){
 		const listItems = document.querySelectorAll(".letter");
 		let counter = 0;
 		listItems.forEach(item =>{
 			if(item.classList.contains("show")){
 				counter++;
 			}
 			else{
 				counter--;
 			}
 		})
 		if(counter === listItems.length){
 			this.gameOver(true);
 			return true;
 		}
 		else{
 			return false;
 		}
 	}
 	/*
 	*Displays game over message
 	* @param {boolean} gameWon - Whether or not the user won the game.
 	*/
 	gameOver(boolean){
 		const overlay = document.querySelector("#overlay");
 		if(boolean){
 			overlay.style.display = "";
 			document.querySelector("#overlay h1").innerText = "Great Job!!! You Won!!!";
 			overlay.classList.remove("start");
 			overlay.classList.remove("lose");
 			overlay.classList.add("win");
 			this.reset();
 			this.gameover = true;
 		}
 		else{
	 		overlay.style.display = "";
	 		document.querySelector("#overlay h1").innerText = "You Lost. Better Luck Next Time!";
	 		overlay.classList.remove("start");
	 		overlay.classList.add("lose");
	 		this.reset();
	 		this.gameover = true;
 		}
 	}

 	reset(){
 		const list =document.querySelector("#phrase ul");
 		const listItems = document.querySelectorAll("#phrase ul li");
 		listItems.forEach(item => list.removeChild(item));
 		const buttons = document.querySelectorAll("#qwerty button");
 		buttons.forEach(item => {
 			item.className = "key";
 			item.disabled = false;
 		})
 		const scoreboard = document.querySelectorAll("#scoreboard img");
 		scoreboard.forEach(item => item.src = "images/liveHeart.png");
 	}

 }