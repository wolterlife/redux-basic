import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Counter from "./components/Сounter/Counter";
import Todo from "./components/Todo/Todo";
import Trello from "./components/Trello/Trello";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/trello" element={<Trello/>}/>
    </Routes>
  </BrowserRouter>
);
