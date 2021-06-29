import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import './i18next';
import i18n from 'i18next';

ReactDOM.render(
  
  <BrowserRouter>
  <Suspense fallback={<h1>Loading profile...</h1>}>
    <App />
  </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
  );