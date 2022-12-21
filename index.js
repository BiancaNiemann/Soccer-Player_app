import { soccerPlayers } from "./data.js";
import { Player } from "./players.js";

const mainPlayer = new Player(soccerPlayers.mainPlayer)
const player = new Player(soccerPlayers.playerThree)


function renderPlayer(){
    document.getElementById('main-player-card').innerHTML = mainPlayer.getPlayerHtml()
    document.getElementById('player-card').innerHTML = player.getPlayerHtml()
}
renderPlayer()