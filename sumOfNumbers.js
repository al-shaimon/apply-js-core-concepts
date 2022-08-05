// 1 + 2 + 3 + 4 + 5 + 6 + 7
function sumOfnumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}

const sum = sumOfnumbers(7);
// let sum = 0;
// for (let i = 1; i <= 7; i++){
//   sum = sum + i;
//   console.log(i, sum);
// }