import React, { useEffect } from "react";
import ListTodos from "./components/ListTodos";
import AddForm from "./components/AddForm";
import { v4 } from "uuid";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodos } from "./redux/actions/todoActions";
import ThemeButton from "./components/ThemeButton";
import { useSelector } from "react-redux";

axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.todoReducer);
  useEffect(() => {
    axios.get("/todos").then((res) => dispatch(setTodos(res.data)));
  }, []);
  return (
    <div className={state.is_dark_theme ? "dark" : "light"}>
      <div className="container  d-flex flex-column gap-5">
        <div className="mt-5 ">
          <ThemeButton></ThemeButton>
        </div>
        <h2 className="text-center my-5">Redux</h2>

        <div>
          <AddForm></AddForm>
          <ListTodos></ListTodos>
        </div>
      </div>
    </div>
  );
};

export default App;
