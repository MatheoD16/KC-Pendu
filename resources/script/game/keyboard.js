import { Button } from "./button.js";
import {keyBoardBtn} from "../../../data/data.js";
export class Keyboard {
  listButtons;
  listNumeric;

  constructor() {
    this.listButtons = [];
    this.listNumeric = [];

    this.generateKeyboard();
    this.generateKeyboardList();

    this.generateNumeric();
    this.generateNumericList();
  }

  generateKeyboardList(){
    for (let i = 1; i < 27; i++) {
      let btn = new Button("btn" + i);
      this.listButtons.push(btn);
    }
  }

  generateNumericList(){
    for (let i = 0; i <10; i++){
      let btn = new Button("btn-num-"+i);
      this.listButtons.push(btn);
    }
  }

  generateKeyboard(){
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

  generateNumeric(){
    let row1 = document.createElement("div");
    row1.id = "row-num-1";
    let row2 = document.createElement("div");
    row2.id = "row-num-2";
    let row3 = document.createElement("div");
    row3.id = "row-num-3";
    let row4 = document.createElement("div");
    row4.id = "row-num-4";

    for (let i = 0; i <10; i++){
      let btn = document.createElement("button");
      btn.textContent = ""+i;
      btn.setAttribute("class", "btn btn-medium border-black btn-light")
      btn.id = "btn-num-"+i;

      if (i ===0){
        row4.appendChild(btn);
      }
      else if (i < 4){
        row1.appendChild(btn);
      }
      else if (i < 7){
        row2.appendChild(btn);
      }
      else{
        row3.appendChild(btn);
      }
    }

    const element = document.getElementById("numeric");
    element.appendChild(row1);
    element.appendChild(row2);
    element.appendChild(row3);
    element.appendChild(row4);

  }

  enableKeyboard(){
    for (let btn of this.listButtons){
      btn.enable();
    }
  }

}
