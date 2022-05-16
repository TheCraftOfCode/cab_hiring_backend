function generateAnSixDigitRandomOtp() {
  return Math.floor(100000 + Math.random() * 900000);
}

function generateARandomTwoDigit() {
  return Math.floor(Math.random() * 90 + 10);
}
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

module.exports = {
  generateAnSixDigitRandomOtp,
  generateARandomTwoDigit,
  getRandomArbitrary,
};
