export class Button {
  id;
  used;

  constructor(id) {
    this.used = false;
    this.id = id;
    //this.inWord = false;
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

  enable(){
    const element = document.getElementById(this.id);
    if (element.classList.contains("btn-success")){
      element.classList.remove("btn-success");
    }
    else if (element.classList.contains("btn-danger")){
      element.classList.remove("btn-danger");
    }
    element.classList.add("btn-light");
    this.used = false;

  }
}
