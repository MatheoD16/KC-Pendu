import { Button } from "./button.js";
export class Keyboard {
  listButtons;

  constructor() {
    this.listButtons = [];

    for (let i = 1; i < 27; i++) {
      let btn = new Button("btn" + i);
      this.listButtons.push(btn);
    }

  }


  display() {
    this.listButtons.forEach(function (item) {
      console.log(item.id);
    });
  }

  // isInWord(word, btn) {
  //   const char = document.getElementById(btn.id).textContent.trim();
  //   for (let letter of word) {
  //     if (char === letter) {
  //       return [true, letter];
  //     }
  //   }
  //   return [false, null];
  // }

  // checkClickedButton(button){
  //   const check = this.isInWord(this.hiddenWord, button)
  //   button.inWord = check[0]
  //   if (button.inWord){
  //
  //     button.disableGreen();
  //   }
  //   else{
  //     button.disableRed();
  //   }
  // }

  // addEventToButton() {
  //   for (let button of this.listButtons) {
  //     let btn = document.getElementById(button.id);
  //     btn.addEventListener("click", this.checkClickedButton.bind(this, button));
  //   }
  // }


}
