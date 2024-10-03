/* eslint-disable no-trailing-spaces */
/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  
  // Custom behavior when cast to a number
  valueOf() {
    return this._size;
  }
  
  // Custom behavior when cast to a string
  toString() {
    return this._location;
  }
}
