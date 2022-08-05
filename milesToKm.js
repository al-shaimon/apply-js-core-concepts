function milesToKilometers(miles){
  const kiloMeters = miles / 1.60934;
  return kiloMeters;
}
const totalMiles = 1200;
const totalKiloMeters = milesToKilometers(totalMiles);
console.log(totalKiloMeters.toFixed(2));