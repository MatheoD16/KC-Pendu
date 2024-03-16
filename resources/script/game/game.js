import { data } from "../../../data/data.js";
import { Keyboard } from "./keyboard.js";

//const fs= require('fs');
const path = "./data/data.json";

export class Game {
  hiddenWord;
  keyBoard;
  tries;

  constructor() {
    this.hiddenWord = this.RandomHiddenWord();
    this.keyBoard = new Keyboard();
    this.tries = 8;
    this.generateHiddenWordInView();
  }

  RandomHiddenWord() {
    const key = Math.floor(Math.random() * Object.keys(data).length);
    return data[key];
  }

  generateHiddenWordInView() {
    const element = document.getElementById("hidden_word");
    for (const letter of this.hiddenWord) {
      let cell = this.generateCell(letter);
      element.appendChild(cell);
    }
  }

  generateCell(letter) {
    const cell = document.createElement("p");
    cell.textContent = "-";
    cell.setAttribute("class", "p-1");
    return cell;
  }
}
