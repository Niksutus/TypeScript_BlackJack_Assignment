import { AbstractPlayer } from "./AbstractPlayer";

export class BotPlayer extends AbstractPlayer{
  
    constructor(max: number) {
      super(max)
  }

  requestCard():boolean{
    return true;
  }
}
