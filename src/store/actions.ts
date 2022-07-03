import { Action, Phone } from "../react-app-env"

export const SET_PHONES_ARR = 'SET_PHONES_ARR';
export const SET_EXPANDED_CARD = 'SET_EXPANDED_CARD';
export const SET_CURRENT_CURRENCY = 'SET_CURRENT_CURRENCY';

export const setPhonesArrayAction = (payload : Phone[]) : Action => ({
  type: SET_PHONES_ARR,
  payload,
});

export const setExpandedCardAction = (payload : number) : Action => ({
  type: SET_EXPANDED_CARD,
  payload,
});

export const setCurrentCurrenceAction = (payload : string) : Action => ({
  type: SET_CURRENT_CURRENCY,
  payload,
});