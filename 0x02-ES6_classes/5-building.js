/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    // Check if the subclass has not implemented the evacuationWarningMessage method
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = value;
  }
}
