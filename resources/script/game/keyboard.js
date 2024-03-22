import { Button } from "./button.js";
export class Keyboard {
  listButtons;
  hiddenWord;

  constructor() {
    this.listButtons = [];

    for (let i = 1; i < 27; i++) {
      let btn = new Button("btn" + i);
      this.listButtons.push(btn);
    }

    this.addEventToButton();
  }


  display() {
    this.listButtons.forEach(function (item) {
      console.log(item.id);
    });
  }

  isInWord(word, btn) {
    const char = document.getElementById(btn.id).textContent.trim();
    for (let letter of word) {
      if (char === letter) {
        return true;
      }
    }
    return false;
  }

  checkClickedButton(button){
    button.inWord = this.isInWord(this.hiddenWord, button)
    if (button.inWord){
      button.disableGreen();
    }
    else{
      button.disableRed();
    }
  }

  addEventToButton() {
    for (let button of this.listButtons) {
      let btn = document.getElementById(button.id);
      btn.addEventListener("click", this.checkClickedButton.bind(this, button));
    }
  }


}
