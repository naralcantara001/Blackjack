let player = {
    name: "Nar",
    chips: 145
}
let messageEl = document.querySelector('.message-el')
let sumEl = document.querySelector('.sum-el')
let cardEl = document.querySelector('.card-el')
let playerEl = document.querySelector('.player-el')
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

playerEl.textContent = player.name + ": $" + player.chips

// get random cards
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if ( randomNumber === 1 ){
        return 11
    } else if ( randomNumber> 10 ){
        return 10
    } else {
        return randomNumber
    }
}
// start game
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// render the gaem
function renderGame(){
    cardEl.textContent = "Cards : "
    for (i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got a blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game. Start a new game?"
        isAlive = false
    }
    messageEl.textContent = message
}

// new card
function newCard(){
    if( isAlive === true &&  hasBlackJack === false){
        let card = getRandomCard()
            sum += card 
            cards.push(card)
            console.log(cards)
            renderGame()
    }
}

