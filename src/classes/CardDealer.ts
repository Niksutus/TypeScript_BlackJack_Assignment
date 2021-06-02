import { AbstractPlayer } from "./AbstractPlayer";
import { Card } from "./Card";

export class CardDealer {
    private deck: Card[] = [];

    constructor(counter: Number){
        let i = 1;
        while(i < 10) {
            this.addCards(4, i);
            i++
        }

        this.addCards(4, 'A');
        this.addCards(4, 'J');
        this.addCards(4, 'Q');
        this.addCards(4, 'K');
    }

    addCards(counter: number, num: number | string): Card[]{
        let cards: Card[] = [];

        for(let i = 0; i < 4; i++){
            cards.push(new Card(num));
        }
        return cards;
    }

    dealTo(player: AbstractPlayer) {
        const card = this.deck.shift();
        player.receiveCard(card);
    }
}