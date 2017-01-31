// Import your classes here to instantiate them and test them out
const Tenant = require('./lib/tenant');
const Apartment = require('./lib/Apartment.js');
const Building = require('./lib/building.js');


let b1 = new Building("208 Leonard St", 3);
console.log(b1.apartments);
let a1 = new Apartment("B", 2, 1);
let a2 = new Apartment("A", 1, 1);
let a3 = new Apartment("A", 1, 1);

// Specifiy the floor and apartment object
b1.add(1, a1)
b1.add(1, a2)
b1.add(2, a3)
