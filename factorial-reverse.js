function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
}
const number = 6;
const fact = factorial(number);
console.log("factorial of: ", number, fact);

// Quiz
// for(let i = 0; i >= 10; i++)
// console.log(i);

// for (let i = 10; i >= 1; i--)
// console.log(i);

// function print(a, b, c){
//   return a+2;
//   return a*b;
//   return b*c+a;
// }
// console.log(print(1,2,3));
