const choices = ['Rock', 'Paper', 'Scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const rockbutton = document.getElementById('button1');
const paperbutton = document.getElementById('button2');
const scissorbutton = document.getElementById('button3');
const computerScoreDisplay = document.getElementById('compuScore')
const playerScoreDisplay = document.getElementById('playerScore')
const go = document.getElementById('go')
const winners = document.getElementById('winers')
let botScore = 0
let humanScore = 0

function playGame(player_choice) {
    const computer_choice = choices[Math.floor(Math.random() * 3)]
    let result = '';
    
    if(player_choice === computer_choice){
        result = 'We Tie'
    }
    else{
        switch(player_choice){
            case 'Rock':
                result = (computer_choice == 'Scissors') ? 'Human Win' : 'Compu Win';
                (computer_choice == 'Scissors') ? humanScore += 1 : botScore += 1;
                break

            case 'Scissors':
                result = (computer_choice == 'Paper') ? 'Human Win' : 'Compu Win';
                (computer_choice == 'Paper') ? humanScore += 1 : botScore += 1;
                break
           
            case 'Paper':
                result = (computer_choice == 'Rock') ? 'Human Win' : 'Compu Win';
                (computer_choice == 'Rock') ? humanScore += 1 : botScore += 1;
                break

        }
    }

    playerDisplay.textContent = `Human: ${player_choice}`
    computerDisplay.textContent = `Compu: ${computer_choice}`
    resultDisplay.textContent = `${result}`;
    resultDisplay.classList.remove("greenText", "redText", "blueText");
    
    switch (result) {
        case 'Human Win':
            resultDisplay.classList.add("greenText");
            break;
            
        case 'Compu Win':
            resultDisplay.classList.add("redText");
            break;
    
        case 'We Tie':
            resultDisplay.classList.add("blueText");
            break;
    }
    



    computerScoreDisplay.textContent = `${botScore}`
    playerScoreDisplay.textContent = `${humanScore}`


}

function wewinner(){
    let winner;
    if (botScore == humanScore){
        winner = 'both'
    }
    else if(botScore < humanScore){
        winner = 'human'
    }
    else if(humanScore < botScore){
        winner = 'compu'
    }
    else{
        winner = 'undefined'
    }
    winners.textContent = `winner is: ${winner}`
}



rockbutton.onclick = () => playGame('Rock');
paperbutton.onclick = () => playGame('Paper');
scissorbutton.onclick = () => playGame('Scissors');
go.onclick = () => wewinner()
