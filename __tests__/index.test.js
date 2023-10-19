// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import Validator from '../index.js';

test('task1', () => {
  const validator = new Validator();
  const schema = validator.number();

  assert.equal(schema.isValid(null), false); // false
  assert.equal(schema.isValid(''), false); // false
  assert.equal(schema.isValid(true), false); // false
  assert.equal(schema.isValid(123), true); // true
  assert.equal(schema.isValid(0), true); // true
});

test('task2', () => {
  const validator = new Validator();
  const schema1 = validator.number().even();
  const schema2 = validator.number().odd();

  assert.equal(schema1.isValid(''), false);
  assert.equal(schema1.isValid(2), true);
  assert.equal(schema2.isValid(2), false);
  assert.equal(schema2.isValid(3), true);
});

test('task3', () => {
  const validator = new Validator();
  const schema = validator.array();

  assert.equal(schema.isValid('Hello!'), false);
  assert.equal(schema.isValid(123), false);
  assert.equal(schema.isValid([]), true);
  assert.equal(schema.isValid([1, 23, 4]), true);
});

test('task4', () => {
  const validator = new Validator();
  const schema1 = validator.array().length(4);
  const schema2 = validator.array().length(12312312455434);

  assert.equal(schema1.isValid(null), false);
  assert.equal(schema1.isValid([]), false);
  assert.equal(schema1.isValid([1, 2, 3, 4]), true);
  assert.equal(schema2.isValid([]), false);
  assert.equal(schema2.isValid([1, 23, 4, 5]), false);
});

test('task5', () => {
  const validator = new Validator();
  const schema1 = validator.object().shape({
    id: validator.number().odd(),
    basket: validator.array().length(3),
  });
  const schema2 = validator.object().shape({
    id: validator.number().even(),
    basket: validator.array().length(1231233),
  });
  const schema3 = validator.object().shape({
    id: validator.number().even(),
    basket: validator.array().length(2),
    payment: validator.array().length(2),
  });

  assert.equal(schema1.isValid({ id: 11, basket: ['potatos', 'tomatos', 'oranges'] }), true);
  assert.equal(schema1.isValid({ id: 12, basket: ['potatos', 'tomatos', 'oranges'] }), false);
  assert.equal(schema1.isValid({}), false);
  assert.equal(schema2.isValid({ id: 11, basket: [] }), false);
  assert.equal(schema2.isValid([1, 23, 4, 5]), false);
  assert.equal(schema2.isValid(2), false);
  assert.equal(schema3.isValid({ id: 16, basket: ['apple', 'cucumber'], payment: ['10 dollars', '10 cents'] }), true);
  assert.equal(schema3.isValid({ id: 17, basket: ['apple', 'cucumber'], payment: ['10 dollars', '10 cents'] }), false);
  assert.equal(schema3.isValid({ id: 16, basket: ['apple'], payment: ['10 dollars', '10 cents'] }), false);
  assert.equal(schema3.isValid({ id: 16, payment: ['10 dollars', '10 cents'] }), false);
});
