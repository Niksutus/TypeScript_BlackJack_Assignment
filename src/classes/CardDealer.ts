import { AbstractPlayer } from "./AbstractPlayer";
import { Card } from "./Card";

export class CardDealer {
    private deck: Card[] = [];

    constructor(counter: Number){
        let i = 0;
        while(i < counter) {
            this.deck.push(new Card());
            i++;
        }
    }

    dealTo(player: AbstractPlayer) {
        const card = this.deck.shift();
        player.receiveCard(card);
    }
}