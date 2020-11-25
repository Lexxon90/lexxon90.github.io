import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/app.js";
import { createStore } from 'redux';
import todos from './redusers';

import "./styles/App.css";

const initialState = localStorage.user ? JSON.parse(localStorage.user) : []
// [
//     {id:1, name: 'Василий Васильев', comment: 'Комментарий Василия', time: "утро" },
//     {id:2, name: 'Петр Петров', comment: 'Комментарий Петра', time: "день" },
//     {id:3, name: 'Иван Иванов', comment: 'Комментарий Ивана', time: "вечер" }
// ];

localStorage.user = JSON.stringify(initialState);

const store = createStore(todos, initialState);

ReactDOM.render(
    <App store={store} />, 
    document.querySelector(".contaner")
);
