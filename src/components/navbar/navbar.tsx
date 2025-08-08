"use client"

import { useTranslation } from "react-i18next"

export default function Navbar(){
  
    const { t } = useTranslation();

    return(
        <>
          <div className="w-full bg-black shadow pt-5 pb-5 flex flex-col sm:flex-row items-center relative">

            <div className="sm:absolute lg:pl-5 md:pl-5 sm:left-0 sm:ml-4 mb-2 sm:mb-0">
              <a href="/">
                <img
                  className="rounded w-16 h-auto"
                  src="./kc-logo.png"
                  alt="KC Logo"
                />
              </a>
            </div>

            <h2 className="text-4xl font-semibold text-white text-center w-full">
              {t("KC Hangman")}
            </h2>
          </div>
      </>
    )

}