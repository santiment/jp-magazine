import React from "react";
import {IntlProvider} from "react-intl";

import messages_jp from "./../translations/jp.json";
import messages_en from "./../translations/en.json";

const messages = {
    'en': messages_en,
    'ja': messages_jp,
};


const DEFAULT_LANG = 'en'
let currentLanguage
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  currentLanguage = window.navigator.language.split(/[-_]/)[0];
}

const language = localStorage.getItem('lang')
    || (messages[currentLanguage] ? currentLanguage : DEFAULT_LANG)

if(!localStorage.getItem('lang')){
    localStorage.setItem('lang', language)
}

const LangWrapper = ({children}) => {
    return <IntlProvider locale={language} messages={messages[language]}>
        {children}
    </IntlProvider>
}

export default LangWrapper
