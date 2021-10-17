//The starting point of the React Project

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; //npm install react-router-dom

import './index.css';
import App from './App'; //js file extension can be omitted in react

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);


