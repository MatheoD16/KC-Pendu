"use client"

import i18n from "@/i18n";

export default function TranslationButton(){

    const switchLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    return(
        <>
            
            <button className="mx-1 flag hover:cursor-pointer" onClick={() => switchLanguage('fr')}>
                <img src={"./france_flag.png"}/>
            </button>
            
            <button className="mx-2 flag hover:cursor-pointer" onClick={() => switchLanguage('en')}>
                <img src={"./uk_flag.jpg"}/>
            </button>
        
        </>
    );
}