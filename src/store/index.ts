import { createStore } from "redux";
import { Action, State } from "../react-app-env";
import { SET_PHONES_ARR } from "./actions";

export const initialState : State = {
  arrayOfPhones: [],
  minimalPrice: null,
  maximalPrice: null,
  currentCurrency: '',
}

const reducer = (state = initialState, action : Action) => {
  switch (action.type) {
    case SET_PHONES_ARR : {
      return {
        ...state,
        arrayOfPhones: [...action.payload],
      }
    }
    default : {
      return state;
    }
  }
}

export const store = createStore(reducer);