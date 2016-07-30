import Game from './base-classes/game'

const points = {
    TEMPTATION: 5,
    REWARD: 3,
    PUNISHMENT: 2,
    SUCKER: 0,
}

/**
 * Scoring works as follows, where the left score is for player 1 and the right for player 2
 *              p2
 *            coop     def
 * p1  coop | R, R  | S, T |
 *     def  | T, S  | P, P |
 */
const scoringTable = [ 
    [
        // Column 1 
        [ points.REWARD, points.REWARD ], [ points.TEMPTATION, points.SUCKER ],
    ],
    [
        // Column 2
        [ points.SUCKER, points.TEMPTATION ], [ points.PUNISHMENT, points.PUNISHMENT ],
    ],
];

class PrisonersDilemma extends Game {
    constructor (players) {
        super()

        if (players.length !== 2)
            throw new Error('Must have exactly 2 players')
    }

    evaluateRound (playerStates) {
        let player1 = playerStates[0];
        let player2 = playerStates[1];
        
        if (!this._checkAnswer(player1.answer) || !this._checkAnswer(player2.answer))
            throw new Error('Player "answer" property must be either 1 or 0.')

        let result = [
            {
                pointsEarned: scoringTable[player2.answer][player1.answer][0],
            },
            {
                pointsEarned: scoringTable[player2.answer][player1.answer][1],
            },
        ]
        
        return result
    }

    determineWinner (playerStates) {
        let player1 = playerStates[0];
        let player2 = playerStates[1];
        
        let finalScore = `Final scores: ${player1.name}: ${player1.points} & ${player2.name}: ${player2.points}.`
        if (player1.points > player2.points) {
            return finalScore + `\n${player1.name} wins!`
        } else if (player1.points < player2.points) {
            return finalScore + `\n${player2.name} wins!`
        } else {
            return finalScore + '\nIt\'s a draw!'
        }
    }

    /**
     * Int -> Bool
     * Check whether the argument is either 1 or 0.
     */
    _checkAnswer (answer) {
        if (answer !== 0 && answer !== 1)
            return false

        return true
    }
}

export default PrisonersDilemma

