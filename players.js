export class Player{
    constructor(data){
        Object.assign(this, data)
    }
    getScoreBarHtml(){
        let percentage = this.playerScore
        return `
            <div class="score-bar-outer">
                <div class="score-bar-inner ${percentage < 26 ? "danger" : ""}"
                    style="width:${percentage}%;">
                </div>
            </div>
        `
    }
    getPlayerHtml(){
        const {name, playerImg, playerScore, diceCount, currentScore } = this
        const scoreBar = this.getScoreBarHtml()
        return `
        <img src="${playerImg}" alt="player image" class="player-img">
        <div class="name-number">
            <h2 class="name">${name}</h2>
            <h2 class="name">Score: ${playerScore}</h2>
        </div>
        ${scoreBar}
        `
    }

}