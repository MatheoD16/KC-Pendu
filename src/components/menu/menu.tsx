
export default function Menu(){

    return(
        <>
            <div className="text-center">
                <div>
                    <p className="font-semibold my-4 text-3xl">Bienvenue sur le jeu du pendu version KC !</p>
                    <p>🔵​ Version 1.0 🔵​</p>
                </div>
            </div>

            <div className="flex justify-center mt-15">
                <a href="/game">
                    <button 
                    type="button"
                    className="btn-play"
                    >
                    Jouer
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