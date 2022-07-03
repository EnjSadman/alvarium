import { State } from "../react-app-env";

export const getPhonesArraySelector = (state : State) => state.arrayOfPhones;

export const getExpandedCardSelector = (state : State) => state.expandedCard;

export const getCurrentCurrencySelector = (state : State) => state.currentCurrency;

export const getMinimalPrice = (state : State) => state.minimalPrice;

export const getMaximalPrice = (state : State) => state.maximalPrice;

export const getSortedBy = (state : State) => state.sortedBy;