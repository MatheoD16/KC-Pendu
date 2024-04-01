import { data } from "../../../data/data.js";
import { Keyboard } from "./keyboard.js";

/**
 * A class representing the game
 *
 * @author Unknowz
 */
export class Game {
  /**
   * The hidden word
   */
  hiddenWord;

  /**
   * The keyboard instance of {@link Keyboard} that contains all the buttons
   */
  keyBoard;

  /**
   * The tries remaining before a loose
   */
  tries;

  /**
   * An array that contains a boolean for each letter of hiddenWord
   */
  hiddenLetter;

  constructor() {
    this.hiddenWord = this.RandomHiddenWord();
    this.keyBoard = new Keyboard();
    this.tries = 8;
    this.hiddenLetter = [];

    // Set all boolean of hiddenLetter to false
    for (let letter of this.hiddenWord) {
      this.hiddenLetter.push(false);
    }

    // Set all parameters for the game
    this.generateHiddenWordInView();
    this.addEventToButton();
    this.displayTries();

    //Add an event to restart button
    const element = document.getElementById("btn-restart");
    element.addEventListener("click", this.reload.bind(this));
  }

  //Reload

  /**
   * When reload button is clicked this function start a new game
   */
  reload() {
    this.keyBoard.enableKeyboard();
    this.clearWord();

    this.hiddenWord = this.RandomHiddenWord();
    this.tries = 8;
    this.hiddenLetter = [];

    for (let letter of this.hiddenWord) {
      this.hiddenLetter.push(false);
    }

    this.generateHiddenWordInView();
    this.displayTries();
  }

  /**
   * Clear all characters for the hidden word in the view
   */
  clearWord() {
    const element = document.getElementById("hidden_word");
    for (let i = 0; i < this.hiddenWord.length; i++) {
      let child = document.getElementById("char-" + i);
      element.removeChild(child);
    }
  }

  //Tries

  /**
   * Display the remaining tries before the end of the game
   */
  displayTries() {
    const img = document.getElementById("image-bw");
    const element = document.getElementById("game-count");

    if (this.checkWordFound()) {
      img.src = "../images/blue_wall_win.jpg";
      element.textContent = "Bravo vous avez gagné !";
    } else {
      img.src = "../images/blue_wall_" + this.tries + ".jpg";

      if (this.tries <= 0) {
        element.textContent =
          "Vous avez perdu ! La personne à trouver était " + this.hiddenWord;
      } else {
        element.textContent = "Il vous reste " + this.tries + " tentatives";
      }
    }
  }

  //KeyBoard/Button

  /**
   * Check if the character is in the word
   *
   * @param word A word
   * @param btn The button clicked
   * @returns {boolean[]|(boolean|*)[]}
   */
  isInWord(word, btn) {
    const char = document.getElementById(btn.id).textContent.trim();
    for (let letter of word) {
      if (char === letter) {
        return [true, letter];
      }
    }
    return [false, null];
  }

  /**
   * Check if all the characters of the hidden word are found
   * @returns {*|boolean}
   */
  checkWordFound() {
    for (let find of this.hiddenLetter) {
      if (!find) {
        return find;
      }
    }
    return true;
  }

  /**
   * Check if the current button clicked has already been used
   * @param button
   */
  checkClickedButton(button) {
    if (this.tries > 0 && !this.checkWordFound() && !button.used) {
      const check = this.isInWord(this.hiddenWord, button);
      button.inWord = check[0];
      if (button.inWord) {
        button.disableGreen();
        this.displayChar(button);
      } else {
        this.tries--;
        button.disableRed();
      }
    }
    this.displayTries();
  }

  /**
   * Add an event for each button of the keyboard
   */
  addEventToButton() {
    for (let button of this.keyBoard.listButtons) {
      let btn = document.getElementById(button.id);
      btn.addEventListener("click", this.checkClickedButton.bind(this, button));
    }
  }

  //HiddenWord

  /**
   * Return an array with the index of each character of the hidden word
   *
   * @param button
   * @returns {*[]} An array of index
   */
  getCharsIndex(button) {
    const letter = document.getElementById(button.id).textContent.trim();
    let chars = [];
    for (let i = 0; i < this.hiddenWord.length; i++) {
      if (this.hiddenWord[i] === letter) {
        chars.push(i);
      }
    }
    return chars;
  }

  /**
   * Display the character found in the view
   * @param button
   */
  displayChar(button) {
    const index = this.getCharsIndex(button);
    for (let i of index) {
      let field = document.getElementById("char-" + i);
      field.textContent = this.hiddenWord[i];
      this.hiddenLetter[i] = true;
    }
  }

  /**
   * Return a random word from the dataBase
   * @returns {string}
   * @constructor
   */
  RandomHiddenWord() {
    const key = Math.floor(Math.random() * Object.keys(data).length);
    const word = String(data[key]);
    return word.toUpperCase();
  }

  /**
   * Generate a "-" character in the view for each character of hiddenWord
   */
  generateHiddenWordInView() {
    const element = document.getElementById("hidden_word");
    for (let i = 0; i < this.hiddenWord.length; i++) {
      let letter = this.hiddenWord[i];
      let cell = this.generateCell(letter, i);
      element.appendChild(cell);
    }
  }

  /**
   * Return a {@link HTMLParagraphElement} with the character "-"
   * @param letter
   * @param index
   * @returns {HTMLParagraphElement}
   */
  generateCell(letter, index) {
    const cell = document.createElement("p");
    cell.textContent = "-";
    cell.id = "char-" + index;
    cell.setAttribute("class", "p-1");
    return cell;
  }
}
