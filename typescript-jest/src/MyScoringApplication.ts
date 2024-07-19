import { TennisGame } from "./TennisGame";

export function checkGameScore(player1Score: number, player2Score: number): string {
    const game = new TennisGame('player1', 'player2')

    const highestScore: number = Math.max(player1Score, player2Score);
    for (let i = 0; i < highestScore; i++) {
      if (i < player1Score) {
        game.wonPoint('player1');
      }
      if (i < player2Score) {
        game.wonPoint('player2');
      }
    }
    return game.getScore();
  }
