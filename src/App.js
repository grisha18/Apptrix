import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import loginReducer from './reducers/LoginReducer';


const store = createStore(loginReducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
