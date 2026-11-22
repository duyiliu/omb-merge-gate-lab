export function isOdd(value) {
  if (!Number.isSafeInteger(value)) {
    throw new TypeError('Expected a safe integer');
  }
  return Math.abs(value % 2) === 1;
}
