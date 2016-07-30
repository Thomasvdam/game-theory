class Host {
    constructor(game, rounds, players) {
        this.totalRounds = rounds 
        this.game = game
        this.players = [];

        for (let i = 0; i < players.length; i++) {
            this.players.push({
                id: i,
                name: players[i].name,
                points: 0,
                answers: [],
                method: players[i].makeMove,
            });
        }
    }

    start () {
        for (let i = 0; i < this.totalRounds; i ++) {
            let playerCopies = this._createPlayerCopies()

            let roundState = [];
            for (let i = 0; i < this.players.length; i++) {
                roundState.push(this.players[i].method(playerCopies))
            }

            let roundResult = this.game.evaluateRound(roundState)

            for (let i = 0; i < this.players.length; i++) {
                let player = this.players[i]
                player.points += roundResult[i].pointsEarned
                player.answers.push(roundState[i].moveMade)
            }
        }

        let finalResult = this.game.determineWinner(this.players)
        console.log(finalResult)
    }

    _createPlayerCopies () {
        let playerCopies = [];
        for (let i = 0; i < this.players.length; i++) {
            playerCopies.push(this._copyPlayer(this.players[i]))
        }

        return playerCopies
    }

    _copyPlayer (player) {
        let playerCopy = {};

        for (let key in player) {
            // Do not copy the method key
            if (!player.hasOwnProperty(key) || key === 'method')
                continue
    
            if (player[key] instanceof Array) {
                playerCopy[key] = player[key].slice()
            } else if (player[key] instanceof Object) {
                throw new Error('Unable to copy player properties that are Objects.')
            } else {
                playerCopy[key] = player[key]
            }
        }
    }
}

export default Host;

