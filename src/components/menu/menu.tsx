"use client"

import { useTranslation } from "react-i18next"

export default function Menu(){

    const { t } = useTranslation();

    return(
        <>
            <div className="text-center">
                <div>
                    <p className="font-semibold my-4 text-3xl">{t("Welcome to the KC version of Hangman game !")}</p>
                    <p>🔵​ Version 1.0 🔵​</p>
                </div>
            </div>

            <div className="flex justify-center mt-15">
                <a href="/game">
                    <button 
                    type="button"
                    className="btn-play"
                    >
                    {t("Play")}
                    </button>
                </a>
            </div>

            <div className="flex justify-center mt-15">
                <a href="https://twitter.com/UnknowZbi" target="_blanck"><img className="pp-kc p-1 bg-gray-700" src="./pp_KC.png" alt="Unknowz"/></a>
            </div>

            <p className="text-center font-semibold uppercase text-2xl mt-4">Unknowz</p>
    
        
        
        </>
    )
}