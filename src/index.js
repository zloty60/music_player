import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RootView from "./layout/RootView";
import * as serviceWorker from "./serviceWorker";
import { Normalize } from "styled-normalize";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalStyle from "./theme/GlobalStyle";
import rootReducer from "./redux/reducers/index";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Normalize />
    <GlobalStyle />
    <RootView />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
