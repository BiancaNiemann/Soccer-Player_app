function getDiceArray(diceCount){
    return new Array(diceCount).fill(0).map(() =>{
    return Math.floor(Math.random()*6)+1
    })
}

const getPercentage = (remainingScore, maximumScore) => (100 * remainingScore)/maximumScore

function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill(0).map(() =>{
        return `<div class="placeholder-dice"></div>`
    }).join('')
}

export{getDiceArray, getPercentage, getDicePlaceholderHtml}