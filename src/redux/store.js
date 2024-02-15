//store olusturma
//1.redux kütüphanesinden "createStore" methodu import edilir
//2.store içerisinde tutulan verilerle kategorize edilir
//ve her bir kategori için reducer oluşturulur
//3.oluşturulan reducerslar "combineReducers" methodu ile birleştirilir.
//4.store'a oluşturulan birleşmiş reducerlar tanıtılır
//5.oluşturulan store projeye tanıtılır.

import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

const store = createStore(rootReducer);

export default store;
