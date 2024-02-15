import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/ActionTypes/TodoTypes";
import { editTodo } from "../redux/actions/todoActions";
import axios from "axios";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //objenin yeni halini belirle
    //objenin bütün değerleri olucak
    // text yerine inputtaki yazı gelicek

    const updated = { ...todo, text: e.target[1].value };

    axios
      .put(`http://localhost:5000/todos/${todo.id}`, updated)
      .then(() => dispatch(editTodo(updated)));

    // storu göncelle
    // dispatch({
    //   type: ActionTypes.EDIT_TODO,
    //   payload: updated,
    // });

    close();
  };
  return (
    <div>
      <div className="modal d-block text-black bg-black bg-opacity-50">
        <div className="modal-dialog modal-dialog-centered">
          <form onSubmit={handleSubmit} className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Todo'yu Düzenle
              </h1>
              <button type="button" onClick={close}>
                X
              </button>
            </div>
            <div className="modal-body">
              <label htmlFor="">Yeni İsmi Belirle</label>
              <input
                defaultValue={todo.text}
                type="text"
                className="form-control"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={close}
              >
                Kapat
              </button>
              <button type="submit" className="btn btn-primary">
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
