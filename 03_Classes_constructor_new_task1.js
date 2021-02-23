class Vector {
  constructor(coords) {
    this.coords = coords;
    console.log(this.toString());
  }

  check(other) {
    if (this.coords.length !== other.coords.length) {
      throw new Error('Two vectors with different lengths' +
        `(${this.coords.length} !== ${other.coords.length})`);
    }
  }

  add(other) {
    this.check(other);

    let coords = 
      other.coords.reduce((acc, coord, index) => [
        ...acc,
        this.coords[index] + coord
      ], []);
      
    return new Vector(coords);
  }

  subtract(other) {
    this.check(other);

    let coords = 
      other.coords.reduce((acc, coord, index) => [
        ...acc,
        this.coords[index] - coord
      ], []);

    return new Vector(coords);
  }

  dot(other) {
    this.check(other);
    
    return other.coords.reduce((acc, coord, index) => 
      acc + this.coords[index] * coord, 0);
  }

  norm() {
    const sum = this.coords.reduce((acc, coord) => 
      acc + coord ** 2, 0);
    return Math.sqrt(sum);
  }

  toString() {
    return `(${this.coords.join(',')})`;
  }

  eq(other) {
    return this.toString() === other.toString();
  }
}

var	a	=	new	Vector([1,	2,	3]);
var	a2	=	new	Vector([1,	2,	3]);
var	b	=	new	Vector([3,	4,	5]);
var	c	=	new	Vector([5,	6,	7,	8]);

console.log(`a.add(b) ${a.add(b).toString()} == (4,6,8)?`);
console.log(`a.subtract(b) ${a.subtract(b).toString()} == (-2,-2,-2)?`);
console.log(`a.dot(b) ${a.dot(b)} == 1*3 + 2*4 + 3*5 = 26?`);
console.log(`a.norm() ${a.norm()} == sqrt(1^2 + 2^2 + 3^2) = sqrt(14) = ${Math.sqrt(14)}?`);

console.log(`a ${a.toString()} == (1,2,3)?`);
console.log(`a.eq(a) ${a.eq(a)} == true?`);
console.log(`a.eq(a2) ${a.eq(a2)} == true?`);
console.log(`a.eq(b) ${a.eq(b)} == false?`);
console.log(`a.add(c) ${a.add(c)} throws?`);
