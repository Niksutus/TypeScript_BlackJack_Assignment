import { Card } from './../classes/Card';

export interface PlayerBehavior {
    requestCard: () => boolean,

    receiveCard: (card: Card) => void
}
