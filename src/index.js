import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SmoothScroll from 'smoothscroll-for-websites'
import {BrowserRouter} from "react-router-dom";

SmoothScroll({
    stepSize: 100,
    animationTime: 1000
});
let setDefaultLanguage = () => {
    if (localStorage.language === undefined)
        localStorage.language = "en"
};

setDefaultLanguage();

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
