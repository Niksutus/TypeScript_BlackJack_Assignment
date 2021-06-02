import { PlayerBehavior } from "../interfaces/PlayerBehavior";
import { Card } from "./Card";

export abstract class AbstractPlayer implements PlayerBehavior {
  protected holdings: Card[] = [];
  private max: number;

  abstract requestCard(): boolean;

  constructor(max: number) {
    this.max = max;
  }

  receiveCard(card: Card | undefined) {
    if (this.holdings.length < this.max && card !== undefined) {
      this.holdings.push(card);
    }
  }

  reviewCards(): Card[] {
    return this.holdings;
  }

  getSum(): number {
    return this.holdings
      .map((card: Card) => card.name)
      .reduce((acc, next) => {
        if(['J','Q','K'].indexOf(next) > -1){
          next = 10;
        } else if (next ==='A'){
          next = 11;
        } 
      });
  }

  announceCards(): void {
      console.log(`My result is ${this.getSum()}`, this.reviewCards())
  }
}
