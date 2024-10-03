/* eslint-disable no-underscore-dangle */
import Car from './10-car.js';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this[_range] = range; // Initialize the range property
  }

  // Override cloneCar to return a Car instance
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }

  // Optional: Getter for range if needed
  get range() {
    return this[_range];
  }
}
