import React from 'react';
import Home from'./pages/Home';
import i18n from './i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import NotoSansKR from './fonts/noto-sans-kr-v13-latin-regular.woff'

function App() {
  if (navigator.language === 'en-US'||'en'){
      document.documentElement.style.fontFamily = 'roboto'
  }
  else if(navigator.language === "ko"||"ko-KR")
  {
    document.documentElement.style.fontFamily = 'Noto Sans KR'
  }
  else if(navigator.language ==='en-us'){
    document.documentElement.style.fontFamily = 'roboto'
  }
  else if (navigator.language ==='ko-kr'){
    document.documentElement.style.fontFamily = 'Noto Sans KR'
  };

  document.documentElement.lang = navigator.language
  return  (
    <Home>
    </Home>
  );
}

export default App;
