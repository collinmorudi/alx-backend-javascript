/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Store brand in a private attribute
    this._motor = motor; // Store motor in a private attribute
    this._color = color; // Store color in a private attribute
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color); // Create a new instance of the same class
  }
}
