class Building {
  constructor(address, numFloors) {
    this._address = address;
    this._num_floors = numFloors;
    this._apartments = {};
  }
  get apartments() {
    return this._apartments;
  }
  add(flr, apt) {
    this._apartments.${flr} = [].push(apt);
  }
}

module.exports = Building
