function returnWinner(playerScore, computerScore, player, computer) {
    if (player == computer) {
        return [playerScore, computerScore, "It's a draw!"]
    } else if (player == 0) {
        if (computer == 1) {
            return [playerScore, ++computerScore, 'Computer wins!']
        } else if (computer == 2) {
            return [++playerScore, computerScore, 'Player wins!']
        }
    } else if (player == 1) {
        if (computer == 0) {
            return [++playerScore, computerScore, 'Player wins!']
        } else if (computer == 2) {
            return [playerScore, ++computerScore, 'Computer wins!']
        }
    } else if (player == 2) {
        if (computer == 0) {
            return [playerScore, ++computerScore, 'Computer wins!']
        } else if (computer == 1) {
            return [++playerScore, computerScore, 'Player wins!']
        }
    }
}

// Choices: 0 = rock, 1 = paper, 2 = scissors
choices = ['rock', 'paper', 'scissors']
const resultContainer = document.getElementById('result-container')
const overlay = document.getElementById('overlay')
const resultParagraph = document.getElementById('result-paragraph')
const score = document.getElementById('score')

let playerScore = 0
let computerScore = 0

function play(choice) {
    const playerChoice = parseInt(choice.value)
    const computerChoice = Math.floor(Math.random() * 3)
    let results = returnWinner(playerScore, computerScore, playerChoice, computerChoice)
    playerScore = results[0]
    computerScore = results[1]
    winner = results[2]

    res = [`The player chose ${choices[playerChoice]}`, `The computer chose ${choices[computerChoice]}`, `<br><span id='winner'>${winner}</span>`]
    resultParagraph.innerHTML = res.join('<br>')
    score.innerHTML = `Player <span id='winner'>${playerScore} - ${computerScore}</span> Computer`

    overlay.classList.toggle('active')
    resultContainer.classList.toggle('active')
}

document.getElementById('close-button').onclick = function() {
    overlay.classList.toggle('active')
    resultContainer.classList.toggle('active')
}
