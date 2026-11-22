import test from 'node:test';
import assert from 'node:assert/strict';
import { isOdd } from '../src/is-odd.mjs';

test('positive odd integers', () => {
  assert.equal(isOdd(1), true);
  assert.equal(isOdd(3), true);
  assert.equal(isOdd(101), true);
});

test('negative odd integers', () => {
  assert.equal(isOdd(-1), true);
  assert.equal(isOdd(-3), true);
  assert.equal(isOdd(-101), true);
});

test('zero is even', () => {
  assert.equal(isOdd(0), false);
});

test('even integers', () => {
  assert.equal(isOdd(2), false);
  assert.equal(isOdd(-4), false);
  assert.equal(isOdd(100), false);
});

test('MAX_SAFE_INTEGER is odd', () => {
  assert.equal(isOdd(Number.MAX_SAFE_INTEGER), true);
});

test('MIN_SAFE_INTEGER is odd', () => {
  assert.equal(isOdd(Number.MIN_SAFE_INTEGER), true);
});

test('fractions throw TypeError', () => {
  assert.throws(() => isOdd(1.5), TypeError);
  assert.throws(() => isOdd(-0.5), TypeError);
});

test('NaN throws TypeError', () => {
  assert.throws(() => isOdd(NaN), TypeError);
});

test('numeric strings throw TypeError', () => {
  assert.throws(() => isOdd('3'), TypeError);
});

test('unsafe integers throw TypeError', () => {
  assert.throws(() => isOdd(Number.MAX_SAFE_INTEGER + 2), TypeError);
  assert.throws(() => isOdd(Number.MIN_SAFE_INTEGER - 2), TypeError);
});
