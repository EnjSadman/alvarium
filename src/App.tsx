import React from 'react';
import './App.scss';
import { BottomMenu } from './components/BottomMenu/BottomMenu';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
 import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <Sidebar />
        <CardsContainer />
      </div>
      <div className="App__menu">
        <BottomMenu />
      </div>
    </div>
  );
}

export default App;
