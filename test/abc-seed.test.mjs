import test from 'node:test';
import assert from 'node:assert/strict';
import { isOdd } from '../src/is-odd.mjs';

// Test C seeded fixture: intentionally failing assertion for CI rework flow.
assert.equal(isOdd(-3), true, 'SEEDED_RED_FOR_CI_REWORK');
