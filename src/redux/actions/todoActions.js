import { ActionTypes } from "../ActionTypes/TodoTypes";

// bu objeyi tanımla
// {
//     type:ActionTypes.EDIT_TODO,
//     payload:updated,
// }

// aksiyon oluşturan bir fonksiyon oluşturma

export const addTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload: payload,
});

export const editTodo = (payload) => ({
  type: ActionTypes.EDIT_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: ActionTypes.TODO_DELETE,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET_TODOS,
  payload,
});
