const getValue = (exp) => {
  switch (exp) {
    case 'definido':
      return {};
    case 'indefinido':
      return undefined;
    case 'verdadero':
      return true;
    case 'falso':
      return false;
    default:
      return null;
  }
};
describe('Testear valores null undefined y booleanos', () => {
  test('Si es undefined', () => {
    expect(getValue('definido')).toBeDefined();
  })
  /* test('Si es null', () => {
    expect(getValue('indefinido')).toBeNull();
  })
 */  test('Si es true', () => {
    expect(getValue('verdadero')).toBeTruthy();
  })
  test('Si es false', () => {
    expect(getValue('falso')).toBeFalsy();
  })
});
