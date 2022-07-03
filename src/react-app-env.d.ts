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
  minimalPrice: number,
  maximalPrice: number,
  currentCurrency: string,
  expandedCard: null | number,
  sortedBy: string,
}

export interface Action {
  type: string,
  payload: any,
}