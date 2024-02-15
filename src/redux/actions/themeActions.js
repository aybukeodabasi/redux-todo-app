import { ActionTypes } from "../ActionTypes/TodoTypes";

export const setTheme = (payload) => ({
  type: ActionTypes.SET_THEME,
  payload: payload,
});
