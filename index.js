import { soccerPlayers } from "./data.js";
import { Player } from "./players.js";

const playerLineUp = ['playerOne', 'playerTwo', 'playerThree']
const mainPlayer = new Player(soccerPlayers.mainPlayer)
let player = getOpponent()
let isWaiting = false

document.getElementById('shoot').addEventListener('click', shoot)
document.getElementById('playAgain').addEventListener('click', rePlay)

function getOpponent(){
    const opponent = soccerPlayers[playerLineUp.shift()]
    return opponent ? new Player(opponent) : {}
}

function shoot(){
    if (!isWaiting){
        mainPlayer.getdiceArrayHtml()
        player.getdiceArrayHtml()
        mainPlayer.takeScore(player.currentScore)
        player.takeScore(mainPlayer.currentScore)
        renderPlayer()

        if(mainPlayer.looser){
            endGame()
        }
        else if(player.looser){
            isWaiting = true
            if(playerLineUp.length > 0){
                setTimeout(()=> {
                    player = getOpponent()
                    renderPlayer()
                    isWaiting = false
                }, 1000)
            }
            else{
                endGame()
            }
        }
    }
}

function endGame(){
    isWaiting = true
    const endMessage = mainPlayer.playerScore === 0 && player.playerScore === 0 ?
        "No winners this round" :
        mainPlayer.playerScore > 0 ? "Ronaldo wins again!!!!" :
        "Wow you beat Ronaldo!!"
    
        setTimeout(()=> {
            document.getElementById('container').innerHTML = `
            ${endMessage}
            `
            document.getElementById('playAgain').classList.remove('hidden')
        }, 1000)
}

function addUpTotal(){
    if (mainPlayer.playerScore > player.playerScore)
}

function rePlay(){
    location. reload()
}

function renderPlayer(){
    document.getElementById('main-player-card').innerHTML = mainPlayer.getPlayerHtml()
    document.getElementById('player-card').innerHTML = player.getPlayerHtml()
}
renderPlayer()