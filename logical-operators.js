// Logical operator
const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision); //false
console.log(hasDriversLicence || hasGoodVision); //true

if(hasDriversLicence && hasGoodVision) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive...');
}
// > Sarah is able to drive
