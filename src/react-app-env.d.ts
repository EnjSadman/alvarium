/// <reference types="react-scripts" />

export interface Phone {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
}

export interface State {
  arrayOfPhones : Phone[],
  minimalPrice: number | null,
  maximalPrice: number | null,
  currentCurrency: string,
  expandedCard: null | number,
}

export interface Action {
  type: string,
  payload: any,
}