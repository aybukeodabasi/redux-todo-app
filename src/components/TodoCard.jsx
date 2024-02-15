import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { ActionTypes } from "../redux/ActionTypes/TodoTypes";
import { deleteTodo, editTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  //storedan todo yu kaldır
  const handleDelete = () => {
    //reducer a haber ver
    // dispatch({
    //   type: ActionTypes.TODO_DELETE,
    //   payload: todo.id,
    // });

    axios.delete(`/todos/${todo.id}`).then(() => {
      dispatch(deleteTodo(todo.id));
    });
  };

  const handleUpdate = () => {
    // todu nun güncel halini belirleme
    const updated = { ...todo, is_done: !todo.is_done };

    axios
      .put(`http://localhost:5000/todos/${todo.id}`, updated)
      .then(() => dispatch(editTodo(updated)));
    // dispatch({
    //   type: ActionTypes.EDIT_TODO,
    //   payload: updated,
    // });
  };

  return (
    <>
      <div className="border shadow shadow-lg p-4 my-5">
        <h5>{todo.text}</h5>
        <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
        <p>{new Date(todo.created_at).toLocaleDateString()}</p>
        <button onClick={() => setIsOpen(true)} className="btn btn-primary">
          Düzenle
        </button>
        <button onClick={handleUpdate} className="btn btn-success mx-4">
          {todo.is_done ? "Geri Al" : "Tamamla"}
        </button>
        <button onClick={handleDelete} className="btn btn-danger ">
          Sil
        </button>
      </div>
      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)}></Modal>}
    </>
  );
};

export default TodoCard;
