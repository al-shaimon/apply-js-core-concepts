// const myInch = 72;
// const myFeet = myInch / 12;
// console.log(myFeet);

// const dadaInch = 60;
// const dadaFeet = dadaInch / 12;
// console.log('Dada feet: ', dadaFeet);

function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const myInch = 72;
const myFeet = inchToFeet(myInch);
console.log('My height in feet:', myFeet);