import React from 'react';
import ReactDOM from 'react-dom';
//connects React Package to Document Object Model of Page
import './index.css';
import Card from './Components/Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './Containers/App';
import {robots} from './robotsdb';
import './Containers/App.css';
ReactDOM.render(<App /> , document.getElementById('root'));
                


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
