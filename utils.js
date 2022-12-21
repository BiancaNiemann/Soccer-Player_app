function getDiceArray(diceCount){
    return new Array(diceCount).fill(0).map(num =>{
    return Math.floor(Math.random()*6)+1
    })
}

export{getDiceArray}