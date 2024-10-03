/* eslint-disable no-trailing-spaces */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
export default class Currency {
    constructor(code, name) {
      this.code = code;
      this.name = name;
    }
  
    // Getter and setter for code
    get code() {
      return this._code;
    }
  
    set code(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = value;
    }
  
    // Getter and setter for name
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = value;
    }
  
    // Method to display the full currency
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
