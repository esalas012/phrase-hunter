/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/*
 *Calls startGame() when start button is clicked.
 *Once the start button has been clicked, the document listens
 *for keypresses 
 */

document.querySelector("#btn__reset").addEventListener("click", function(){
	game = new Game();
	game.startGame();

	document.addEventListener("keypress", function(e){
		e.preventDefault();
		const qwerty = document.querySelectorAll("#qwerty button");
		for(let i = 0; i< qwerty.length; i++){
			if(qwerty[i].innerText === e.key){
				game.handleInteraction(qwerty[i]);
			}
		}	
	})	
})

/*
 * If the letter buttons are clicked, the handleInteraction method gets called.
 */
document.querySelector("#qwerty").addEventListener("click", function(e){
	if(e.target.type === "submit"){
		game.handleInteraction(e.target);
	}
})


