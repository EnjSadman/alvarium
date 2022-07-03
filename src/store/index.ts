import { createStore } from "redux";
import { Action, State } from "../react-app-env";
import { SET_CURRENT_CURRENCY, SET_EXPANDED_CARD, SET_PHONES_ARR } from "./actions";

export const initialState : State = {
  arrayOfPhones: [],
  minimalPrice: null,
  maximalPrice: null,
  currentCurrency: 'uah',
  expandedCard: null,
}

const reducer = (state = initialState, action : Action) => {
  switch (action.type) {
    case SET_PHONES_ARR : {
      return {
        ...state,
        arrayOfPhones: [...action.payload],
      }
    }
    
    case SET_EXPANDED_CARD : {
      return {
        ...state,
        expandedCard: action.payload,
      }
    }

    case SET_CURRENT_CURRENCY : {
      return {
        ...state,
        currentCurrency: action.payload,
      }
    }

    default : {
      return state;
    }
  }
}

export const store = createStore(reducer);