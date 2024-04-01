/**
 * A class that represents a button
 *
 * @author Unknowz
 */
export class Button {
  /**
   * The id of the button
   */
  id;

  /**
   * A boolean that check if the button is used
   */
  used;

  constructor(id) {
    this.used = false;
    this.id = id;
  }

  /**
   * Disable the button when the character isn't is the hidden word
   */
  disableRed() {
    const element = document.getElementById(this.id);
    element.classList.remove("btn-light");
    element.classList.add("btn-danger");
    this.used = true;
  }

  /**
   * Disable the button when the character is in the hidden word
   */
  disableGreen() {
    const element = document.getElementById(this.id);
    element.classList.remove("btn-light");
    element.classList.add("btn-success");
    this.used = true;
  }

  /**
   * Enable the current button
   */
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
