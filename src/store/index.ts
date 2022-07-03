import { createStore } from "redux";
import { Action, State } from "../react-app-env";
import {
  SET_CURRENT_CURRENCY,
  SET_CURRENT_MAXIMAL,
  SET_CURRENT_MINIMAL,
  SET_EXPANDED_CARD,
  SET_PHONES_ARR,
  SET_SORTED_BY
} from "./actions";

export const initialState : State = {
  arrayOfPhones: [],
  minimalPrice: 0,
  maximalPrice: 50000,
  currentCurrency: 'uah',
  expandedCard: null,
  sortedBy: 'priceDown',
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

    case SET_CURRENT_MINIMAL : {
      return {
        ...state,
        minimalPrice: action.payload,
      }
    }

    case SET_CURRENT_MAXIMAL : {
      return {
        ...state,
        maximalPrice: action.payload,
      }
    }

    case SET_SORTED_BY : {
      return {
        ...state,
        sortedBy: action.payload,
      }
    }

    default : {
      return state;
    }
  }
}

export const store = createStore(reducer);