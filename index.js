let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let homeScore = 0
let guestScore = 0

function add1home() {
   homeScore += 1
   homeScoreEl.textContent = homeScore
}


function add2home() {
   homeScore += 2
   homeScoreEl.textContent = homeScore
}

function add3home() {
   homeScore += 3
   homeScoreEl.textContent = homeScore
}

function add1guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add3guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function newgame() {
    guestScore = 0
    homeScore = 0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
}