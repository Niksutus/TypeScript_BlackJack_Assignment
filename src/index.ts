import { RealPlayer } from "./classes/RealPlayer";
import { BotPlayer } from "./classes/BotPlayer";
import { CardDealer } from "./classes/CardDealer";

const players = [new BotPlayer(5), new BotPlayer(5), new RealPlayer(5)];

const dealer = new CardDealer(52);

players.forEach((player) => {
  let counter = 2;
  while (Boolean(counter--)) {
    dealer.dealTo(player);
  }
});

players.forEach((player) => {
  while (player.requestCard()) {
    dealer.dealTo(player);
  }
});

const winningScore = players
  .map((player) => (player.getSum() <= 21 ? player.getSum() : 0))
  .sort((a, b) => b - a)[0];

console.log("Winning score is ", winningScore);

players.forEach((player) => {
  player.announceCards();
});
