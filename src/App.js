import React from 'react';
import Home from'./pages/Home';
import i18n from './i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';

function App() {

  document.documentElement.lang = navigator.language

  return  (
    <Home>
    </Home>
  );
}

export default App;
