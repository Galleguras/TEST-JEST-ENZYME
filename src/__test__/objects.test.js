import { createStore } from '../utils/objects';

const store = createStore();
store.addItem({ id: 11, class: 'ffd', cdd: 'ggg' });
describe('Test a objetos', () => {

  test('Agregar un item en store', () => {
 
    expect(store.getStore()[0]).toEqual({ id: 11, class: 'ffd', cdd: 'ggg' });

});
/*   test('Buscar iten por id', () => {


    expect(store.getById(11)).toEqual({ id: 11, class: 'ffd', cdd: 'ggg' });
  }); */
/*   test('Buscar iten por id', () => {
 
    expect(store.getById(11)).toMatchObject({ id: 11 });
  }); */
/*   test('Buscar iten por id', () => {
  
    expect(store.getById(11)).toHaveProperty({ id: 11 });
  }); */
});
