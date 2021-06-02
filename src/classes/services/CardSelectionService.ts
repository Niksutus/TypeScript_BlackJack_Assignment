export class CardSelectionService {
    private getOneOrZero(): number {
        return Math.floor(Math.random() * 100) %2;
    }

    decide() {
        return Boolean(this.getOneOrZero);
    } 
}