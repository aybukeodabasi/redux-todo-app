import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/actions/themeActions";

const ThemeButton = () => {
  const state = useSelector((store) => store.todoReducer);
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(setTheme());
  };
  return (
    <div>
      <button onClick={handleTheme} className="themeButton">
        {state.is_dark_theme ? "Açık Mod" : "Koyu Mod"}
      </button>
    </div>
  );
};

export default ThemeButton;
