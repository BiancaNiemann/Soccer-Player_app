import { getDiceArray, getPercentage, getDicePlaceholderHtml } from "./utils.js"

export class Player{
    constructor(data){
        Object.assign(this, data)

        this.maxScore = this.playerScore

        this.diceArray = getDicePlaceholderHtml(this.diceCount)
    }
    
    getdiceArrayHtml(){
        this.currentScore = getDiceArray(this.diceCount)
        this.diceArray = this.currentScore.map((num)=>{
            return `<div class="dice-box">${num}</div>`
        }).join('')
    }

    takeScore(shootScoreArray){
        const totalShootScore = shootScoreArray.reduce((a,b)=> a + b)
        console.log(totalShootScore)
        this.playerScore = this.playerScore - totalShootScore
        console.log(this.playerScore)
        if(this.playerScore <= 0) {
            this.looser = true;
            this.playerScore = 0
        }
    }

    getScoreBarHtml(){
        const percentage = getPercentage(this.playerScore, this.maxScore)
        return `
            <div class="score-bar-outer">
                <div class="score-bar-inner ${percentage < 26 ? "danger" : ""}"
                    style="width:${percentage}%;">
                </div>
            </div>
        `
    }

    getPlayerHtml(){
        const {name, playerImg, playerScore, diceArray, diceCount, totalWins } = this
        const scoreBar = this.getScoreBarHtml()
        return `
        <div class='score-bar' id="score-bar">Total Wins: ${totalWins}</div>
        <img src="${playerImg}" alt="player image" class="player-img">
        <div class="name-number">
            <h2 class="name">${name}</h2>
            <h2 class="name">Score:<strong> ${playerScore}</strong></h2>
        </div>
        ${scoreBar}
        <div class="dice">${diceArray}</div>
        `
    }

}