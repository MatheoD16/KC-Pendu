import { data } from "../../../data/data.js";
import { Keyboard } from "./keyboard.js";

export class Game {
  hiddenWord;
  keyBoard;
  tries;
  hiddenLetter;

  constructor() {
    this.hiddenWord = this.RandomHiddenWord();
    this.keyBoard = new Keyboard();
    this.tries = 8;
    this.hiddenLetter = [];

    for (let letter of this.hiddenWord){
      this.hiddenLetter.push(false);
    }

    this.generateHiddenWordInView();
    this.addEventToButton();
    this.displayTries();
  }
  //Tries

  displayTries(){
    const img = document.getElementById("image-bw");
    img.src = "/resources/images/blue_wall_"+this.tries+".jpg"
    //TODO Mettre image pour 0 essaies et faire la même pour quand on gagne.

    const element = document.getElementById("game-count");
    if (this.tries <= 0){
      element.textContent = "Vous avec perdu ! La personne à trouver était "+this.hiddenWord
    }
    else {
      element.textContent = "Il vous reste " + this.tries + " tentatives";
    }
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

  checkWordFound(){
    for (let find of this.hiddenLetter){
      if (! find){
        return find
      }
    }
    return true;
  }

  checkClickedButton(button){
    if ((this.tries > 0) && (! this.checkWordFound()) && (! button.used)) {
      const check = this.isInWord(this.hiddenWord, button)
      button.inWord = check[0]
      if (button.inWord) {
        button.disableGreen();
        this.displayChar(button);
      } else {
        this.tries --;
        this.displayTries();
        button.disableRed();
      }
    }
  }

  addEventToButton() {
    for (let button of this.keyBoard.listButtons) {
      let btn = document.getElementById(button.id);
      btn.addEventListener("click", this.checkClickedButton.bind(this, button));
    }
  }


  //HiddenWord

  getCharsIndex(button){
    const letter = document.getElementById(button.id).textContent.trim();
    let chars = [];
    for (let i = 0 ; i < this.hiddenWord.length; i++){
      if (this.hiddenWord[i] === letter){
        chars.push(i);
      }
    }
    return chars;
  }

  displayChar(button){
    const index = this.getCharsIndex(button);
    for (let i of index){
      let field = document.getElementById("char-"+i);
      field.textContent = this.hiddenWord[i];
      this.hiddenLetter[i] = true;
    }
  }


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
