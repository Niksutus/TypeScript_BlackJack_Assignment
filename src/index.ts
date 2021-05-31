import { RealPlayer } from './classes/RealPlayer';
import { BotPlayer } from "./classes/BotPlayer";
import { CardDealer } from './classes/CardDealer';


const players = [
    new BotPlayer(5),
    new BotPlayer(5),
    new RealPlayer(5)
]

const dealer = new CardDealer(52);

players.forEach(player => {
    let counter = 3;
    while (Boolean(counter--)) {
        dealer.dealTo(player);
    }
})

players.forEach(player => {
    while(player.requestCard()) {
        dealer.dealTo(player);
    }
})

players.forEach(player => {
    console.log(player.reviewCards())
})