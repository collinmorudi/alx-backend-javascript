/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this._range = range; // Initialize the range property directly
  }

  // Override cloneCar to return a Car instance
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
