import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from './src/components/Router/ReactRouter';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ReactRouter />
  </BrowserRouter>,
  document.getElementById('root')
);

