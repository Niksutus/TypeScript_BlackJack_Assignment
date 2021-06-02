import { CardSelectionService } from './services/CardSelectionService';
import { AbstractPlayer } from "./AbstractPlayer";

export class BotPlayer extends AbstractPlayer{
  
  //   constructor(max: number) {
  //     super(max)
  // }

  requestCard():boolean{
    const cardSelectionService = new CardSelectionService();
    return cardSelectionService.decide();
  }
}
