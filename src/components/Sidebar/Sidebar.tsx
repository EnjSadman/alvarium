import { useDispatch, useSelector } from 'react-redux';

import {
  setCurrentCurrenceAction,
  setCurrentMaximalPrice,
  setCurrentMinimalPrice,
  setSortedBy,
} from '../../store/actions';

import {
  getCurrentCurrencySelector,
  getMaximalPrice, getMinimalPrice, getSortedBy
} from '../../store/selectors';
import './Sidebar.scss';

export const Sidebar : React.FC = () => {
  const dispatch = useDispatch();
  const currency = useSelector(getCurrentCurrencySelector);
  const minimal = useSelector(getMinimalPrice);
  const maximal = useSelector(getMaximalPrice);
  const sorter = useSelector(getSortedBy);

  return (
    <div className="sidebar">
      <h2 className="sidebar__heading">Price</h2>
      <div className="sidebar__priceSetters">
        <div className="sidebar__priceSetters--container">
        <label htmlFor="minimal_price" className="sidebar__priceSetters--label">min
        
        </label>
        <input
          className="sidebar__priceSetters--input"
          type="number"
          name="minimal_price"
          id="minimal_price"
          value={minimal}
          onChange={(event) => {
            dispatch(setCurrentMinimalPrice(Number(event.target.value)))
          }}
        />
        </div>
        <div className="sidebar__priceSetters--container">
        <label htmlFor="maximum_price" className="sidebar__priceSetters--label">max
        
        </label>
        <input
          className="sidebar__priceSetters--input"
          type="number"
          name="maximum_price"
          id="maximum_price"
          value={maximal}
          onChange={(event) => {
            dispatch(setCurrentMaximalPrice(Number(event.target.value)))
          }}
        />
        </div>        
      </div>
      <div className="sidebar__currency">
      <h2>Currency</h2>
      <input
            className="sidebar__currency--input"
            type="radio"
            name="currency"
            value="usd"
            id="usd_currency"
            checked={currency === 'usd'}
            onChange={(event) => {
              dispatch(setCurrentCurrenceAction(event.target.value))
            }}
          />
        <label htmlFor="usd_currency" className="sidebar__currency--label">USD</label>
        <input
            className="sidebar__currency--input"
            type="radio"
            name="currency"
            value="uah"
            checked={currency === 'uah'}
            id="uah_currency"
            onChange={(event) => {
              dispatch(setCurrentCurrenceAction(event.target.value))
            }}
          />  
        <label htmlFor="uah_currency" className="sidebar__currency--label">UAH</label>  
      </div>
      <div className="sidebar__sorting">
        <h2>Sort</h2>
        <label className="sidebar__sorting--label" htmlFor="">
          <input
            type="radio"
            name="sort"
            value="priceDown"
            checked={sorter === "priceDown"}
            onChange={(event) => {
              dispatch(setSortedBy(event.target.value))
            }}
          />
          price up
        </label>
        <label className="sidebar__sorting--label" htmlFor="">
          <input
            type="radio"
            name="sort"
            value="priceUp"
            checked={sorter === "priceUp"}
            onChange={(event) => {
              dispatch(setSortedBy(event.target.value))
            }}
          />
          price down
        </label>
        <label className="sidebar__sorting--label" htmlFor="">
          <input
            type="radio"
            name="sort"
            value="alphabetical"
            checked={sorter === "alphabetical"}
            onChange={(event) => {
              dispatch(setSortedBy(event.target.value))
            }}
          />
          alphabetical
        </label>
      </div>
    </div>
  )
}