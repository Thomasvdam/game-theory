import Player from './base-classes/player'

class Player2 extends Player {
    constructor () {
        super()

        this.name = 'random'
    }

    makeMove (gameState) {
        let answer = Math.round(Math.random())       
        let moveResult = {
            answer,
        }

        return moveResult
    }
}

export default Player2;

