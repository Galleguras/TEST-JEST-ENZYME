import {
  suma,
  resta,
  multiplicacion,
  division,
  getRandomNum,
} from './../utils/numbers';

describe('Probando funciones operaciones matematicas', () => {
  test('Probando la funcion suma', () => {
    expect(suma(5, 5)).toBe(10);
  });
  test('Probando la funcion resta', () => {
    expect(resta(5, 5)).toBe(0);
  });
  test('Probando la funcion multiplicacion', () => {
    expect(multiplicacion(5, 5)).toBe(25);
  });
  test('Probando la funcion division', () => {
    expect(division(5, 5)).toBe(1);
  });
  test('Probando la funcion radom 1', () => {
    expect(getRandomNum(5, 10)).toBeGreaterThan(4);
  });
  test('Probando la funcion random 2', () => {
    expect(getRandomNum(5, 10)).toBeGreaterThanOrEqual(5);
  });
  test('Probando la funcion random 2', () => {
    expect(getRandomNum(1, 4)).toBeLessThanOrEqual(5);
  });
});
