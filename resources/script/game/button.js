export class Button {
  id;
  used;
  inWord;

  constructor(id) {
    this.used = false;
    this.id = id;
    this.inWord = false;
  }

  disableRed() {
    const element = document.getElementById(this.id);
    element.classList.remove("btn-light");
    element.classList.add("btn-danger");
    this.used = true;
  }

  disableGreen() {
    const element = document.getElementById(this.id);
    element.classList.remove("btn-light");
    element.classList.add("btn-success");
    this.used = true;
  }
}
