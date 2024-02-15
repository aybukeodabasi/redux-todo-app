import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const ListTodos = () => {
  const state = useSelector((store) => store.todoReducer);

  return (
    <div className="mx-5">
      {state.todos.length === 0 ? (
        <h5>Herhangi bir yapılacak eklenmedi</h5>
      ) : (
        state.todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo}></TodoCard>
        ))
      )}
    </div>
  );
};

export default ListTodos;
