"use client"

import { checkIfCharInWord, generateKeyboardButtons } from "@/services/game";
import { KeyboardBtn, KeyboardProps } from "@/types/game";
import { useEffect, useState } from "react";


export default function Keyboard({
                                    hiddenWord,
                                    wordFound,
                                    tries,
                                    onUpdateCharInWord = (char : string) => {return},
                                    onRemoveTry = () => {return}
                                } : KeyboardProps){

    const [keyboard, setKeyboard] = useState<KeyboardBtn[][]>([]); 


    useEffect(() => {
        setKeyboard(generateKeyboardButtons())
    }, [hiddenWord]);


    function handleUpdateCharInWord(char : string){
        const isInWord = checkIfCharInWord(hiddenWord, char);
        const nextKeyboard = keyboard.map(elt => {
            return elt;
        });

        nextKeyboard.forEach(row => {
            row.forEach(btn => {
                if (btn.value === char){
                    btn.used = true;
                    btn.inWord = isInWord;
                }
            })
        })
        setKeyboard(nextKeyboard);

        if (isInWord){
            onUpdateCharInWord(char);
        }else{
            onRemoveTry()
        }
    }

    const classBtnGray = "btn-keyboard-gray sm:text-sm";
    const classBtnFalse = "btn-keyboard-false sm:text-sm";
    const classBtnTrue = "btn-keyboard-true sm:text-sm";

    return(
        <>

            {keyboard.map(((btnRow, index) => {
                return <div key={index} className="flex justify-center">
                    {
                        btnRow.map(btn => {
                            return <button 
                            onClick={() => {
                                if (!wordFound && !btn.used && tries > 0){
                                    handleUpdateCharInWord(btn.value)
                                }
                            }} 
                            key={btn.value} 
                            className={ ! btn.used ? classBtnGray : btn.inWord ? classBtnTrue : classBtnFalse}
                            >{btn.value}
                            </button>
                        })
                    }
                </div>
            }))}

        </>
    );
}