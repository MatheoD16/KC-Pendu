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

    this.addEventToButton();
  }

  //KeyBoard/Button
  isInWord(word, btn) {
    const char = document.getElementById(btn.id).textContent.trim();
    for (let letter of word) {
      if (char === letter) {
        return [true, letter];
      }
    }
    return [false, null];
  }

  checkClickedButton(button){
    const check = this.isInWord(this.hiddenWord, button)
    button.inWord = check[0]
    if (button.inWord){

      button.disableGreen();
    }
    else{
      button.disableRed();
    }
  }

  addEventToButton() {
    for (let button of this.keyBoard.listButtons) {
      let btn = document.getElementById(button.id);
      btn.addEventListener("click", this.checkClickedButton.bind(this, button));
    }
  }


  //HiddenWord
  RandomHiddenWord() {
    const key = Math.floor(Math.random() * Object.keys(data).length);
    const word = String(data[key])
    return word.toUpperCase();
  }

  generateHiddenWordInView() {
    const element = document.getElementById("hidden_word");
    for (let i = 0; i < this.hiddenWord.length; i++) {
      let letter = this.hiddenWord[i];
      let cell = this.generateCell(letter, i);
      element.appendChild(cell);
    }
  }

  generateCell(letter, index) {
    const cell = document.createElement("p");
    cell.textContent = "-";
    cell.id = "char-"+index;
    cell.setAttribute("class", "p-1");
    return cell;
  }
}
