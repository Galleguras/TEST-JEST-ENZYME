import { createStore } from '../utils/arrays';

describe('Haciendo pruebas a listas /Arrays', () => {
  test('Probando agregar una nueva fruta', () => {
    const store = createStore();
    store.addFruit('fresa');
    expect(store.getFruits()).toStrictEqual(['fresa']);
  });
  test('Probando agregar dos nuevas fruta', () => {
    const store = createStore();
    store.addFruit('fresa');
    store.addFruit('uva');
    expect(store.getFruits()).toStrictEqual(['fresa', 'uva']);
  });
  test('Probandosi contiene fruta especifica', () => {
    const store = createStore();
    store.addFruit('fresa');
    store.addFruit('uva');
    expect(store.getFruits()).toContain('uva');
  });
  test('Probandosi longitud especifica', () => {
    const store = createStore();
    store.addFruit('fresa');
    store.addFruit('uva');
    expect(store.getFruits()).toHaveLength(2);
  });
  
  test('Probandosi contiene fruta especifica', () => {
    const store = createStore();
    store.addFruit({ name: 'fresa', price: 2 });

    expect(store.getFruits()).toContainEqual({ name: 'fresa', price: 2 });
  });

});
