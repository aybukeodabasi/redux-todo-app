// reducer
// *storun nasıl değişeceğine karar verir
// *reducer normal bir fonksiyondur
//* ve iki parametre alır:
// 1.state: store da tutulan verinin son durumu
// 2.action:store un nasıl güncelleneceğini söyleyen obje
// reducerda return edilen veri store un güncel halidir

import { ActionTypes } from "../ActionTypes/TodoTypes";

const initialState = {
  todos: [],
  length: 0,
  isEmpty: false,
  is_dark_theme: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);

      return { ...state, todos: tempTodos };
    case ActionTypes.TODO_DELETE:
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: filteredTodos };

    case ActionTypes.EDIT_TODO:
      const updatedTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, todos: updatedTodos };

    case ActionTypes.SET_TODOS:
      return { ...state, todos: action.payload };

    case ActionTypes.SET_THEME:
      return { ...state, is_dark_theme: !state.is_dark_theme };
    default:
      return state;
  }
};

export default todoReducer;
