//TEST CADENAS DE CARACTERES

import { saluda, saluda2, getId,despide } from '../utils/strings';

const saludo = saluda('Gerardo')
const saludo2 = saluda2('Gerardo')
const id = getId()
const despido = despide()

describe('Pruebas de strings', () => {
  test('Probando la funcion saluda', () => {
    //el test pasa porque  toMatch evalua si existen los caracteres dentro de nuestro texto
    expect(saludo).toMatch('Hola soy');
  });
  /* 
  //el test no pasa porque  toMatch evalua si existen los caracteres dentro de nuestro texto
  test('Probando la funcion saluda',() => {
    expect(saludo('Gerardo')).toMatch('Hola asoy')
  }) */

  test('Probando la funcion saluda2', () => {
    //el test pasa porque  toMatch evalua si existen los caracteres dentro de nuestro texto
    expect(saludo2).toMatch(/\d/);
  });

  test('Probando la funcion getId', () => {
    //el test pasa porque  toMatch evalua si existen los caracteres dentro de nuestro texto
    expect(id).toMatch(/\d{2}-\d{3}/);
  });
  test('Probando la funcion despido', () => {
    //el test pasa porque  toMatch evalua si no existen los caracteres dentro de nuestro texto
    expect(despido).not.toMatch('Bye no');
  });
});
