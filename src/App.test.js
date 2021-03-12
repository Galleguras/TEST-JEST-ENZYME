import React from 'react';
import ReactDOM from 'react-dom';
import App, { Todo } from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';

//esta linea es muy importnte para que podamos correr los rest en nuestros componentes
configure({ adapter: new Adapter() });
describe('App', () => {
  describe('Todo', () => {
    it('ejecuta completetodo cuando pincho Complete', () => {
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();
      const index = 4;
      const todo = {
        text: 'Todo 1',
        isCompleted: true,
      };
      const wrapper = shallow(
        <Todo
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          index={index}
          todo={todo}
        />
      );
      wrapper.find('button').at(0).simulate('click');
      expect(completeTodo.mock.calls).toEqual([[4]])
      expect(removeTodo.mock.calls).toEqual([])
    });

    it('ejecuta removeTodo cuando pincho X', () => {
      const completeTodo = jest.fn();
      const removeTodo = jest.fn();
      const index = 5;
      const todo = {
        text: 'Todo 1',
        isCompleted: true,
      };
      const wrapper = shallow(
        <Todo
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          index={index}
          todo={todo}
        />
      );
      wrapper.find('button').at(1).simulate('click');
      expect(removeTodo.mock.calls).toEqual([[5]])
      expect(completeTodo.mock.calls).toEqual([])
    });
  });
});
