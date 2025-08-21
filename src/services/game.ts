import { data, keyboardBtn } from "@/data/data";
import { HiddenWordChar, KeyboardBtn } from "@/types/game";

/**
 * The number of try a player have to play the game. 
 */
export const NB_TRIES : number = 8;

/**
 * Chooses a random word from the data list.
 * 
 * @returns a random word from the data list.
 */
export function randomHiddenWord() : string{
    const key : number = Math.floor(Math.random() * Object.keys(data).length);
    const word : string = data[key];
    return word.toUpperCase();

}

/**
 * Generates an 2D array of button representing the keyboard. Each row represents a row in the keyboard.
 * 
 * @returns a 2D array of keyboard button.
 */
export function generateKeyboardButtons() : KeyboardBtn[][] {
    const tab : KeyboardBtn[][] = [[], [], [], [], [], [], []];

    keyboardBtn.forEach((btn, index) => {
        const obj : KeyboardBtn = {
            value : btn,
            used : false,
            inWord : false
        }

        if (index < 10){
            tab[0].push(obj);
        }else if (index < 20){
            tab[1].push(obj)
        }else{
            tab[2].push(obj)
        }
    });

    for (let i = 0; i < 10; i++){
        const obj : KeyboardBtn = {
            value : i.toString(),
            used : false,
            inWord : false
        }

        if (i === 0){
            tab[6].push(obj)
        }else if (i < 4){
            tab[5].push(obj)
        }else if (i < 7){
            tab[4].push(obj)
        }else{
            tab[3].push(obj)
        }
    }

    return tab;
}

/**
 * Checks if a char is in a word.
 * 
 * @param hiddenWord The word to check.
 * @param char The character to check.
 * @returns a boolean true if the character is include in the word.
 */
export function checkIfCharInWord(hiddenWord : string, char: string) : boolean{
    return hiddenWord.includes(char)
}

/**
 * If the character is in the character list, it changes the found value of all the same character to true. 
 * 
 * @param hiddenWordChars a list of character.
 * @param char the character to check
 * @returns The list of character updated with the correct values of found.
 */
export function updateCharInWord(hiddenWordChars : HiddenWordChar[], char: string) : HiddenWordChar[]{

    const nextHiddenWordChars = hiddenWordChars.map(elt => elt)

    nextHiddenWordChars.forEach(wordChar => {
        if (wordChar.char === char){
            wordChar.found = true
        }
    })
    return nextHiddenWordChars
}

/**
 * Check if all character in the word are found.
 * 
 * @param hiddenWordChars the list of the word's characters 
 * @returns a boolean with a true value if all character are found.
 */
export function checkIfWordFound(hiddenWordChars : HiddenWordChar[]) : boolean{
    if (hiddenWordChars.length === 0){
        return false
    }
    for (const char of hiddenWordChars){
        if (! char.found){
            return false
        }
    }
    return true
}