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
const OPENEL = document.body.getElementsByClassName('open');
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
// Function that shows the face of the card
function flipCard(e) {
    e.target.classList.toggle('open');
    e.target.classList.toggle('show');
}
//
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

function faceCardDown(el) {
    el[0].classList.remove('show');
    el[0].classList.remove('open');
    el[0].classList.remove('show');
    el[0].classList.remove('open');
}

function starRating(moves) {
    const STARS = document.getElementsByClassName('stars')[0];

    if (moves >= 15) {
        STARS.children[0].children[0].classList.remove('fa-star');
        STARS.children[0].children[0].classList.add('fa-star-o');
    }
    else if (moves >= 10) {
        STARS.children[1].children[0].classList.remove('fa-star');
        STARS.children[1].children[0].classList.add('fa-star-o');
    }
    else if (moves >= 5) {
        STARS.children[2].children[0].classList.remove('fa-star');
        STARS.children[2].children[0].classList.add('fa-star-o');
    }

};

function countMoves() {
    let moves = document.getElementsByClassName('moves')[0];
    moves.textContent = Number(moves.textContent) + 1;
    starRating(moves.textContent);
}

function restart(arr) {
    faceAllCardsDown();
    shuffle(arr);
}

function shake(el1, el2) {
    el1.classList.add('shake');
    el2.classList.add('shake');
    setTimeout(function(){
        el1.classList.remove('shake');
        el2.classList.remove('shake');
    }, 2000);
}

function verifyCard() {
        if (OPENEL[0].children[0].classList[1] == OPENEL[1].children[0].classList[1]) {
            OPENEL[0].classList.add('match');
            OPENEL[1].classList.add('match');
            OPENEL[0].classList.remove('show');
            OPENEL[0].classList.remove('open');
            OPENEL[0].classList.remove('show');
            OPENEL[0].classList.remove('open');
        } else {
            shake( OPENEL[0], OPENEL[1] );
            setTimeout(faceCardDown(OPENEL), 2000);
        }
        
}

(function(){
/*
*ADDS Evenet Listener on CARD element to detect which cards are being pressed
*/

DECK.addEventListener('click', function(e) {
//function(e) the e inside the function is event to detect what event

    //Checks if clicked element is a li
	if(e.target.tagName ==='LI') {
        flipCard(e);
	}

});
//THIS ADDEVENTLISTENER LISTENS TO CLICKS MADE IN THE BODY
document.body.addEventListener('click', function(e) {
    //CHECKS IF THE TARGET CLICKED HAS A PARENT WITH A CLASS RESTART
    if (e.target.parentElement.className === 'restart') {
        restart(arr);
    }
    //Checks facing up cards, if greater than 2 and not matched, facedown
    if (OPENEL.length >= 2) {
        setTimeout(verifyCard, 1500);
        setTimeout(countMoves, 1500);
    }
})



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
