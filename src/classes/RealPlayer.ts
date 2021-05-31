import { AbstractPlayer } from "./AbstractPlayer";

export class RealPlayer extends AbstractPlayer{
  
    constructor(max: number) {
      super(max)
  }

  requestCard():boolean{
    return true;
  }
}