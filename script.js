
        function computerPlay() {
            let selections = ["rock", "paper", "scissor"]
            return selections[Math.floor(Math.random()*selections.length)];
        }
        
        function playRound(playerSelection, computerSelection) {
            let choice = playerSelection.toLowerCase()
            if (choice == "rock" && computerSelection == "scissor") {
                return "You Win! Rock beats Scissors" 
            }
            else if (choice == "paper" && computerSelection == "rock") {
                return "You Win! Paper beats Rock"
            }
            else if (choice == "scissor" && computerSelection == "paper") {
                return "You Win! Scissors beats Paper"
            }
            
            
            else if (computerSelection == "scissor" && choice == "paper") {
                return "You Lose! Scissors beats Paper"
            }
            else if (computerSelection == "rock" && choice == "scissor") {
                return "You Lose! Rock beats Scissors"
            }
            else if (computerSelection == "paper" && choice == "rock") {
                return "You Lose! Paper beats Rock"
            }

            
            else if (computerSelection == choice) {
                return "Its a tie!"
            }
        }
    
        
    console.log(game())