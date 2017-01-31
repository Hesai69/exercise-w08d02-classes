class Apartment {
  constructor(unit, num_beds, num_baths, tenants) {
    this._unit = unit;
    this._num_beds = num_beds;
    this._num_baths = num_baths;
    this.tenants = [];
    this.tenants.size = 0;
  }
  get price() {
    return '$'+(this._num_beds*1000+this._num_baths*500);
  }
  get isStudio() {
    return this._num_beds===1;
  }
  moveIn(tenant) {
    try {
      if (this.tenants.length!==this._num_beds) {
        this.tenants.push(tenant);
        this.tenants.size = this.tenants.length;
      } else {
        let error = `Full! ${tenant._f_name} ${tenant._l_name} can't move in`;
        throw new UserException(error);
      }
    } catch(e) {
      console.log(e.name, e.message);
    }
    function UserException(message) {
      this.message = message;
      this.name = "Uncaught Error: ";
    }
  }
  isEmpty() {
    return this.tenants.length ? false : true;
  }
  isFull() {
    return this._num_beds===this.tenants.length ? true : false;
  }
}

module.exports = Apartment;
