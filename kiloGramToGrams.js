function kiloGramToGrams(kiloGram) {
  const grams = kiloGram * 1000;
  return grams;
}
const totalKiloGrams = 5;
const totalGrams = kiloGramToGrams(totalKiloGrams);
console.log(totalGrams);