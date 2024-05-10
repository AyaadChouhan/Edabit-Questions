function areaOfCountry(country, area) {
  const TheworldsLandmass = 148940000;
  let mass = (area / TheworldsLandmass) * 100;
  let round = mass.toFixed(2);
  return `${country} is ${round}% of total world's Landmass...`;
}
console.log(areaOfCountry("Russia", 17098242));
