'use-strict'
import Host from './host'
import Player1 from './player-1'
import Player2 from './player-2'
import Game from './prisoners-dilemma'

const players = [new Player1(0), new Player2(1)]
const game = new Game(players)
const host = new Host(game, 50, players)

host.start();
