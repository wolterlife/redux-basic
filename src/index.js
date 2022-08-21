import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Counter from "./components/Сounter/Counter";
import TodoList from "./components/TodoList/TodoList";
import Trello from "./components/Trello/Trello";
import {Provider} from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/todo" element={<TodoList/>}/>
        <Route path="/trello" element={<Trello/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);
