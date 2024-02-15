import React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "../redux/ActionTypes/TodoTypes";
import { addTodo } from "../redux/actions/todoActions";
import axios from "axios";

const AddForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date(),
    };

    // veri tabanına ekle
    axios.post("/todos", newTodo).then(() => dispatch(addTodo(newTodo)));

    // todoyu store a ekleme
    // dispatch({
    //   type: ActionTypes.ADD_TODO,
    //   payload: newTodo,
    // });

    //kolay yol
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex gap-2 justify-content-center mx-5"
    >
      <input className="form-control" type="text" />
      <button className=" addButton btn btn-lg btn-outline-light">Ekle</button>
    </form>
  );
};

export default AddForm;
