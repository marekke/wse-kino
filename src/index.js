import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import AdminLayout from "./components/admin/AdminLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from "./redux";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const STATE_NAME = 'KINO_DB';

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem(STATE_NAME);
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem(STATE_NAME, serialisedState);
  } catch (e) {
    console.warn(e);
  }
}


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/admin/*" element={<AdminLayout/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
