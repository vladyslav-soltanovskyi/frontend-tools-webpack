import { sum, mult } from "../calculator";

it('check function sum: 4 + 2 = 6', () => {
  const result = sum(4, 2);
  expect(result).toEqual(6);
});

it('check function sum: 3 + 1 = 4', () => {
  const result = sum(3, 1);
  expect(result).toEqual(4);
});

it('check function mult: 5 * 8 = 40', () => {
  const result = mult(5, 8);
  expect(result).toEqual(40);
});

it('check function mult: 9 * 3 = 27', () => {
  const result = mult(9, 3);
  expect(result).toEqual(27);
});