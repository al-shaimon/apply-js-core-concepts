/**
 * কোনো বছরকে যদি **৪ দিয়ে ভাগ করলে ভাগশেষ শূন্য** হয়। তাহলে সেই বছরটি একটি **leap year** হবে।

  যেমনঃ ১৯৫২ % ৪ = ০, এটি একটি leap year

  আবার, ২০২২ % ৪ = ২, এটি leap year না।
 */

// function isLeapYear(year) {
//   const remainder = year % 4;
//   if (remainder === 0) {
//     return true;
//   }
//   return false;
// }
// const isMyYearLeapYear = isLeapYear(2002);
// console.log('My year:', isMyYearLeapYear);

// const isHerYearLeapYear = isLeapYear(2004);
// console.log('Her Year:', isHerYearLeapYear);

/**
 * এছাড়া **leap year** এর আরো কয়েকটি শর্ত রয়েছে। সেগুলো হল,

  1. বছরটি **১০০ দ্বারা ভাগ করলে ভাগশেষ শূন্য হওয়া যাবে না**।
  2. বছরটি **৪০০ দ্বারা ভাগ করলে ভাগশেষ শূন্য হবে**।
 */

function leapYearCheck(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  return false;
} 

const isMyYearLeapYear = leapYearCheck(2002);
console.log('My year',isMyYearLeapYear);
const isHerYearLeapYear = leapYearCheck(2004);
console.log('Her year',isHerYearLeapYear);