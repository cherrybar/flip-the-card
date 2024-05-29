export enum CardType {
  Spades = "spades",
  Diamonds = "diamonds",
  Clubs = "clubs",
  Hearts = "hearts",
}

export enum CardValue {
  Six = "six",
  Seven = "seven",
  Eight = "eight",
  Nine = "nine",
  Ten = "ten",
  Jack = "jack",
  Queen = "queen",
  King = "king",
  Ace = "ace",
}

export interface ICard {
  id: number;
  isFlipped: boolean;
  type: CardType;
  value: CardValue;
}
