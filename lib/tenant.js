class Tenant {
  constructor(f_name, l_name, born_on, gender) {
    this._f_name = f_name;
    this._l_name = l_name;
    this.gender = gender;
    this.born_on = born_on;
  }
  get f_name() {
    return this._f_name;
  }
  get full_name() {
    if (this._nickname) {
      return `${this._f_name} ${this._nickname} ${this._l_name}`;
    } else {
      return `${this._f_name} ${this._l_name}`;
    }
  }
  set nickname(name) {
    this._nickname = `'${name}'`;
  }
  set name(name) {
    this._f_name = name.split(' ')[0];
    this._l_name = name.split(' ')[1];
  }
  set occupation(job) {
    this._occupation = job;
  }
}

module.exports = Tenant;
