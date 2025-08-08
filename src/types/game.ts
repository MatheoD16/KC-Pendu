
export type HiddenWordChar = {
    char : string,
    found : boolean
}

export type KeyboardBtn = {
    value : string,
    used : boolean,
    inWord : boolean
}

export type KeyboardProps = {
    hiddenWord : string,
    wordFound : boolean,
    tries : number,
    onUpdateCharInWord : (char : string) => void,
    onRemoveTry : () => void
}

export type GameData = { 
    [key: number]: string
 } 