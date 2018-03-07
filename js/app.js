/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

const DECK = document.getElementById('deck');
let CARDS = DECK.children;
let arr = Array.prototype.slice.call(CARDS, 0 );

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    shuffleCards(array);
}

function flipCard(e) {
    e.target.classList.toggle('open');
    e.target.classList.toggle('show');
}

function shuffleCards(array) {
    //THIS FOR LOOP COUNTS ALL THE CHILDREN OF DECK AND REMOVES THEM
    for (let i = 0; i < DECK.childElementCount; i+0) {
        DECK.removeChild(DECK.firstChild);
    }
    //THIS FOR LOOP ADDS THE SHUFFLED cards
    for (let i = 0; i < array.length; ++i) {
        DECK.appendChild(arr[i]);
    }
}

function faceAllCardsDown() {

    for (let i = 0; i < DECK.children.length; ++i) {

        DECK.children[i].classList.remove('open');
        DECK.children[i].classList.remove('show');
        DECK.children[i].classList.remove('match');

    }
}

function restart(arr) {
    faceAllCardsDown();
    shuffle(arr);
}

(function(){
//shuffleCards();
/*
*ADDS Evenet Listener on CARD element to detect which cards are being pressed
*/

DECK.addEventListener('click', function(e) {
//function(e) the e inside the function is event to detect what event
	if(e.target.tagName ==='LI') {
        flipCard(e);
	}
});

})();



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
