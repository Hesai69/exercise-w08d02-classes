class SuperArray extends Array {
  constructor() {
    super();
  }
  pop() {
    console.log('holy papop');
    super.pop();
  }
  push(number) {
    if (this.includes(number)) return false;
    else super.push(number);
  }
}

const list = new SuperArray();
list.push(1);
list.push(1);
list.push(1);
list.push(1);

console.log(list.length);
