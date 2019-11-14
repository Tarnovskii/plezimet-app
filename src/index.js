import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax/cjs";

import SmoothScroll from 'smoothscroll-for-websites'

SmoothScroll({
    stepSize: 200,
    animationTime: 1000
});


ReactDOM.render(
    <BrowserRouter>
        <ParallaxProvider>
            <App/>
        </ParallaxProvider>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
