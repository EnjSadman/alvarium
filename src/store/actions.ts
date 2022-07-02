import { Action, Phone } from "../react-app-env"

export const SET_PHONES_ARR = 'SET_PHONES_ARR';

export const setPhonesArrayAction = (payload : Phone[]) : Action => ({
  type: SET_PHONES_ARR,
  payload,
});