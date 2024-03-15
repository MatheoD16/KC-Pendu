export class Button {
  #id;
  #used;

  constructor(id) {
    this._used = false;
    this._id = id;
  }

  get id() {
    return this._id;
  }

  get used() {
    return this._used;
  }

  set used(value) {
    this._used = value;
  }
}
