import React from 'react';
import Home from'./pages/Home';
import i18n from './i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import NotoSansKR from './fonts/noto-sans-kr-v13-latin-regular.woff'

function App() {




  if (navigator.language === 'en-US'){
      document.documentElement.style.fontFamily = 'arial'
  }
  else if(navigator.language === "ko"||"ko-KR")
  {
    document.documentElement.style.fontFamily = 'Noto Sans KR'
  };
  
  const uA = navigator.userAgent;
  const vendor = navigator.vendor;
  if (/Safari/i.test(uA) && /Apple Computer/.test(vendor) && !/Mobi|Android/i.test(uA)) {
    document.documentElement.style.fontFamily = 'Apple'
  }

  document.documentElement.lang = navigator.language
  return  (
    <Home>
    </Home>
  );
}

export default App;
