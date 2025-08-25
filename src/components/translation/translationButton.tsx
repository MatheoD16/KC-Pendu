"use client"

import i18n from "@/i18n";
import Image from "next/image";

export default function TranslationButton(){

    const switchLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    return(
        <>
            
            <button className="mx-1 flag hover:cursor-pointer" onClick={() => switchLanguage('fr')}>
                <Image src={"/france_flag.png"}
                       alt="France flag" 
                       width={50}
                       height={0}
                />
            </button>
            
            <button className="mx-2 flag hover:cursor-pointer" onClick={() => switchLanguage('en')}>
                <Image src={"/uk_flag.jpg"}
                       alt="UK flag"
                       width={50}
                       height={0} 
                />
            </button>
        
        </>
    );
}