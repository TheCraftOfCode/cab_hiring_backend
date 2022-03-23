export default function generateAnSixDigitRandomOtp() {
  return Math.floor(100000 + Math.random() * 900000);
}
