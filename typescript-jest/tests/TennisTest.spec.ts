import * as fs from 'fs';
import * as path from 'path';
import { checkScore } from '../src/MyScoringApplication';

function getAllScores(): Array<[number, number, string]> {
  const testCases = path.resolve(__dirname, 'scores.json');
  const scoreData = fs.readFileSync(testCases).toString();
  const scores = JSON.parse(scoreData);
  return JSON.parse(JSON.stringify(scores));
}

const scores: Array<[number, number, string]> = getAllScores();

describe('TennisGame', () => {
  scores.forEach(([player1Score, player2Score, expectedScore]) => {
    it(`scores ${player1Score}:${player2Score} as ${expectedScore}`, () => {
      expect(checkScore(player1Score, player2Score)).toEqual(expectedScore);
    });
  });

});
