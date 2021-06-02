import { AbstractPlayer } from "./AbstractPlayer";

export class RealPlayer extends AbstractPlayer {
  // constructor(max: number) {
  //   super(max);
  // }

  requestCard(): boolean {
    return confirm(`Your sum is currently ${this.getSum()}. Would you like to request an other card?`);
  }
}
