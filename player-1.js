import Player from './base-classes/player'

class Player1 extends Player {
    constructor () {
        super()

        this.name = 'greedy'
    }

    makeMove (gameState) {
        let moveResult = {
            answer: 0,
        }
            
        return moveResult
    }
}

export default Player1;
