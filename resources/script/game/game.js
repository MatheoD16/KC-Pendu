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
    this.keyBoard.hiddenWord = this.hiddenWord;
    this.generateHiddenWordInView();
  }

  // //Todo J'ai fais de la D avec le méthodes pour disable dans keyboard (pas possible d'y accéder il faut les changer de fichier)
  // checkClickedButton() {
  //   this.keyBoard.listButtons.forEach(function (item) {
  //     let btn = document.getElementById(item.id);
  //     btn.addEventListener("click", function () {
  //       const inWord = isInWord(this.hiddenWord, item);
  //     });
  //   });
  // }

  RandomHiddenWord() {
    const key = Math.floor(Math.random() * Object.keys(data).length);
    const word = String(data[key])
    return word.toUpperCase();
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
