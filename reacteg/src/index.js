import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Word from './Hello';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
import App from './App';
import Input from './component/inputboxvalidation';
import Numbers from './component/decrement';
import Inputbox from './component/inputboxvalidation';
ReactDOM.render(<Inputbox />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
