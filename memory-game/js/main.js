
let cards = [
{
  	rank: "queen",
  	suit: "hearts",
  	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png" 
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];
function checkForMatch(cardId) {
	let cardFlipped = document.getElementsByTagName('img');
	cardFlipped[cardId].setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) { 
		if (cardsInPlay[0] === cardsInPlay[1]) {
 	alert('You found a match!');
    } else {
 	 alert('Sorry, try again.');
 	}
  } 
};

function flipCard() { 
 let cardId = this.getAttribute('data-id');
 console.log(cardId)
 console.log('User flipped '+ cards[cardId].rank);
 cardsInPlay.push(cards[cardId].rank);
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);
 checkForMatch(cardId);
};


function createBoard () {
	for (let i = 0; i <cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id',i);
		console.log(cardElement);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement)
	}
};
createBoard();

/* function shuffleCard() {
 	let random = document.getElementsByTagName('img');
 	console.log(random);
 	for ( let i = random.length - 1; i>= 0; i--) {
 		let j = Math.floor(Math.random() * (i+1));
 		let randomCard = document.getElementById('game-board').appendChild(random[j]);
 		console.log(randomCard)
 	}
}; */
function shuffleCard() {
	for (let i = cards.length -1; i >= 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let randomCard = cards[i];
		cards[i] = cards[j];
		cards[j] = randomCard;
	}
	return cards;
}
shuffleCard();


document.querySelector('.reset').addEventListener('click', reset);
function reset() {
	window.location.reload();
}
