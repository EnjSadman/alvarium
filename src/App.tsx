import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { BottomMenu } from './components/BottomMenu/BottomMenu';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { Sidebar } from './components/Sidebar/Sidebar';
import { setPhonesArrayAction } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const data = require('./api/products.json').products;

  useEffect(() => {
    dispatch(setPhonesArrayAction([...data, JSON.parse(localStorage.objToAdd)]))
    console.log(JSON.parse(localStorage.objToAdd));
  })
  return (
    <div className="App">
      <div className="container">
        <div className="App__content">
          <Sidebar />
          <CardsContainer />
        </div>
        <div className="App__menu">
          <BottomMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
