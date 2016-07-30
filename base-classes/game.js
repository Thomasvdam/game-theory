class Game {
    constructor () {

    }

    evaluateRound (playerStates) {
        throw new Error(`${this.name} did not implement 'evaluateRound'.`)
    }
}

export default Game;
