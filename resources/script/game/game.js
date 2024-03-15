import { Keyboard } from "./keyboard.js";

export class Game {
  #hiddenWord;
  #keyBoard;

  constructor() {
    this.hiddenWord = "";
    this.keyBoard = new Keyboard();
  }
}
