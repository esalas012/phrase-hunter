/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
 	constructor(phrase){
 		this.phrase = phrase.toLowerCase();
 	}
 	/**
 	 * Display phrase on game board
 	 */
 	addPhraseToDisplay(){
 		const ul = document.querySelector("#phrase ul");
 		for(let i=0; i<this.phrase.length; i++){
 			const li = document.createElement("li");
			if(this.phrase[i] !== ' '){
	 			li.setAttribute("class", "hide letter");
	 			li.classList.add(this.phrase[i]);
	 			li.innerText = this.phrase[i];
 			}
 			else{
 				li.className = "hide space";
 				li.innerText = " ";
 			}
 			ul.appendChild(li);
 		}

 	}
 	/**
 	* Checks if passed letter is in phrase
 	* @param (string) letter - letter to check
 	*/
 	checkLetter(letter){
 		let isLetter = false;
 		for(let i=0; i<this.phrase.length; i++){
 			if(this.phrase[i] === letter){
 				this.showMatchedLetter(this.phrase[i]);
 				isLetter = true;
 			}
 		}
 		return isLetter;
 	}
 	/**
 	* Displays passed letter on screen after a match is found
 	* @param (string) letter - letter to display
 	*/
 	showMatchedLetter(letter){
 		let listItems = document.querySelectorAll("#phrase ul li");
 		listItems.forEach(item => {
 			if(item.innerText === letter){
 				item.classList.remove("hide");
 				item.classList.add("show");
 			}
 		})

 	}
 }