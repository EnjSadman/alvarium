import './Sidebar.scss';

export const Sidebar : React.FC = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__heading">Price</h2>
      <div className="sidebar__priceSetters">
        <input
          className="sidebar__priceSetters--input"
          type="number"
          name="minimal_price"
          id="minimal_price"
          value="100"
        />
        <input
          className="sidebar__priceSetters--input"
          type="number"
          name="maximum_price"
          id="maximum_price"
          value="10000"
        />
      </div>
      <div className="sidebar__currency">
      <input
            className="sidebar__currency--input"
            type="radio"
            name="currency"
            value="usd"
            id="usd_currency"
            checked
          />
        <label htmlFor="usd_currency" className="sidebar__currency--label">
          USD  
        </label>
        <input
            className="sidebar__currency--input"
            type="radio"
            name="currency"
            value="uah"
            id="uah_currency"
          />  
        <label htmlFor="uah_currency" className="sidebar__currency--label">
          UAH         
        </label>  
      </div>
      <div className="sidebar__sorting">
        <label htmlFor="">
          <input type="radio" name="sort" id="" checked/>
          price up
        </label>
        <label htmlFor="">
          <input type="radio" name="sort" id="" />
          price down
        </label>
        <label htmlFor="">
          <input type="radio" name="sort" id="" />
          alphabetical
        </label>
      </div>
    </div>
  )
}