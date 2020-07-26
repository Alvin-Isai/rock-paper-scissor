let userScore = 0;
let chimpScore = 0;
const userScore_span = document.getElementById('user-score');
const chimpScore_span = document.getElementById('chimp-score');
const result_div = document.querySelector('.result > p');
const chimp_div = document.querySelector('.chimp');


const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        playRound(selectionName);
    })
})



function computerPlay() {
    let selections = ["Rock", "Paper", "Scissor"]
    return selections[Math.floor(Math.random() * selections.length)];
    
}

function playRound(playerSelection) {
    const computerSelection = computerPlay()
    replaceImage(computerSelection)
    setTimeout(returnImage, 2000)
    switch (playerSelection + computerSelection) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(playerSelection, computerSelection)
            break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            lose(computerSelection, playerSelection)
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw()
            break;
    }
}
    
 
function win(playerSelection, computerSelection) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = playerSelection + " beats " + computerSelection + ", You Win!"
}

function lose(computerSelection, playerSelection) {
    chimpScore++;
    chimpScore_span.innerHTML = chimpScore;
    result_div.innerHTML = computerSelection + " beats " + playerSelection + ", You Lose!"
}

function draw() {
    result_div.innerHTML = "Its draw!"
}

function replaceImage(computerSelection) {
    if (computerSelection == 'Rock') {
        chimp_div.src='images/rock.png'
    }
    else if (computerSelection == 'Paper') {
        chimp_div.src='images/paper.png'
    }
    else {
        chimp_div.src='images/scissor.png'
    }
}

function returnImage() {
    chimp_div.src='images/chimp.jpg'
}



