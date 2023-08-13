/*
const homeScore = document.getElementById("home-score")
const homeOne = document.getElementById("h-1")
const homeTwo = document.getElementById("h-2")
const homeThree = document.getElementById("h-3")

let count = 0

homeOne.addEventListener("click", function() {
    count ++
    homeScore.textContent = count
})
homeTwo.addEventListener("click", function() {
    count += 2
    homeScore.textContent = count
})
homeThree.addEventListener("click", function() {
    count += 3
    homeScore.textContent = count
})

const guestScore = document.getElementById("guest-score")
const guestOne = document.getElementById("g-1")
const guestTwo = document.getElementById("g-2")
const guestThree = document.getElementById("g-3")

let gCount = 0

guestOne.addEventListener("click", function() {
    gCount ++
    guestScore.textContent = gCount
})
guestTwo.addEventListener("click", function() {
    gCount += 2
    guestScore.textContent = gCount
})
guestThree.addEventListener("click", function() {
    gCount += 3
    guestScore.textContent = gCount
})
*/


// Updated JS using : 
// 1 - Object-Oriented Approach
// 2 - Constructor and Event Listeners
// 3 - updateScore Method
// 4 - Creating Team Instances

const homeScore = document.getElementById("home-score")
const homeOne = document.getElementById("h-1")
const homeTwo = document.getElementById("h-2")
const homeThree = document.getElementById("h-3")

const guestScore = document.getElementById("guest-score")
const guestOne = document.getElementById("g-1")
const guestTwo = document.getElementById("g-2")
const guestThree = document.getElementById("g-3")

class Team {
    constructor(id, oneBtn, twoBtn, threeBtn, scoreElem) {
        this.score = 0;
        this.scoreElem = scoreElem;

        oneBtn.addEventListener("click", () => this.updateScore(1));
        twoBtn.addEventListener("click", () => this.updateScore(2));
        threeBtn.addEventListener("click", () => this.updateScore(3));
    }

    updateScore(points) {
        this.score += points;
        this.scoreElem.textContent = this.score;
    }
}

const homeTeam = new Team("home", homeOne, homeTwo, homeThree, homeScore);
const guestTeam = new Team("guest", guestOne, guestTwo, guestThree, guestScore);
