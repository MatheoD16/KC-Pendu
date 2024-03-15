import { Button } from "./button.js";
export class Keyboard {
  #listButtons;

  constructor() {
    this.listButtons = [];

    for (let i = 1; i < 27; i++) {
      let btn = new Button("btn" + i);
      this.listButtons.push(btn);
    }
  }

  display() {
    this.listButtons.forEach(function (item) {
      console.log(item._id);
    });
  }
}
