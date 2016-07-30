class Player {
    constructor (number) {
        this.number = number
    }

    makeMove (gameState) {
        throw new Error(`${this.name} did not implement makeMove`)
    }
}

export default Player;

