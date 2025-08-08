"use client"

import { useEffect, useState } from "react"
import { checkIfWordFound, NB_TRIES, randomHiddenWord, updateCharInWord } from "@/services/game"
import { HiddenWordChar } from "@/types/game";
import Keyboard from "./keyboard";
import { useTranslation } from "react-i18next";

export default function Game(){

    const [hiddenWord, setHiddenWord] = useState<string>("");

    const [hiddenWordChars, setHiddenWordChars] = useState<HiddenWordChar[]>([]);

    const [wordFound, setWordFound] = useState<boolean>(false);

    const [tries, setTries] = useState<number>(NB_TRIES);

    const { t } = useTranslation();

    useEffect(() => {
        getHiddenWord();
    }, [])

    useEffect(() => {
        hiddenWordToTab();
    }, [hiddenWord]);

    useEffect(() => {
        if (checkIfWordFound(hiddenWordChars)){
            setWordFound(true);
        }
    }, [hiddenWordChars]);


    function getHiddenWord(){
        setHiddenWord(randomHiddenWord());
    }


    function hiddenWordToTab(){
        const tab : HiddenWordChar[] = [];
        const hiddenTab = hiddenWord.split("");
        hiddenTab.forEach(char => {
            const obj = {
                "char" : char,
                "found" : false
            }
            tab.push(obj);
        })
        setHiddenWordChars(tab);
    }


    function handleUpdateCharInWord(char : string){
        const nextHiddenWordChars = updateCharInWord(hiddenWordChars, char);
        setHiddenWordChars(nextHiddenWordChars);
    }


    function handleRemoveTry(){
        if (tries > 0){
            setTries(tries - 1);
        }
    }


    function newGame(){
        getHiddenWord();
        setWordFound(false);
        setTries(NB_TRIES);
    }


    const urlImage = "./blue_wall_"+tries+".jpg";

    return(
        <>
            <div className="flex justify-center mt-30 mb-5">
                <img className="game-img p-2 bg-gray-700" src={wordFound ? "./blue_wall_win.jpg" : urlImage}/>
            </div>       

            <div className="flex justify-center my-2">
                <button className="btn-play" onClick={newGame}>{t("Restart")}</button>
            </div>

            <p className="text-center text-2xl my-2">
                {
                    wordFound ? t("Congrats you won !") + "🎉"
                    : tries > 1? t("You have") + " " + tries + " " + t("tries left")
                    : tries === 1 ? t("You have") + " " + tries + " " + t("try left")
                    : t("You lost ! The hidden word was") + " " + hiddenWord
                }
                </p> 

            <div className="flex justify-center my-1">
                {hiddenWordChars.map((char, index) => {
                    return <p key={index} className="p-0.5 text-3xl">{char.found ? char.char : "-"}</p>
                })}
            </div>

            <Keyboard hiddenWord={hiddenWord}
                      onUpdateCharInWord={handleUpdateCharInWord}
                      wordFound={wordFound}
                      onRemoveTry={handleRemoveTry}
                      tries={tries}
            />
        </>
    )
}