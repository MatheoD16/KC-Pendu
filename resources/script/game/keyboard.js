import { Button } from "./button.js";
import {keyBoardBtn} from "../../../data/data.js";
export class Keyboard {
  listButtons;

  constructor() {
    this.listButtons = [];

    this.genererButton();
    for (let i = 1; i < 27; i++) {
      let btn = new Button("btn" + i);
      this.listButtons.push(btn);
    }

  }

  genererButton(){
    let line1 = document.createElement("div");
    line1.id = "first_row";
    let line2 = document.createElement("div");
    line2.id = "second_row";
    let line3 = document.createElement("div");
    line3.id = "third_row";

    for (let i = 0; i < 26; i++){
      let btn = document.createElement("button");
      btn.textContent = keyBoardBtn[i];
      btn.setAttribute("class", "btn btn-medium border-black btn-light")
      btn.id = "btn"+(i+1);

      if (i < 10){
        line1.appendChild(btn);
      }
      else if (i < 20){
        line2.appendChild(btn);
      }
      else{
        line3.appendChild(btn);
      }
    }

    const element = document.getElementById("keyboard");
    element.appendChild(line1);
    element.appendChild(line2);
    element.appendChild(line3);
  }

}
