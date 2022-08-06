import React from "react";
import './index.css';
import './normilize.css'
import imgRedux from './img/redux.png'
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p className="topText">Привет! Тут собраны компоненты созданные с использованием Redux</p>
      <nav className="menu">
        <Link to="/counter" className={'menuButton'}>
          <p className={'menuText'}>
            Счётчик
          </p>
        </Link>
        <Link to="/todo" className={'menuButton'}>
          <p className={'menuText'}>
            Todo
          </p>
        </Link>
        <Link to="/trello" className={'menuButton'}>
          <p className={'menuText'}>
            Трелло
          </p>
        </Link>
        <img className={'menuImg'} src={imgRedux} alt={'ReduxPhoto'}/>
      </nav>

    </div>
  );
}

export default App;
