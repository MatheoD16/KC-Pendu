import Game from "@/components/game/game";
import Navbar from "../../components/navbar/navbar";
import FooterBar from "@/components/footerBar/footerBar";
import TranslationButton from "@/components/translation/translationButton";

export default function GamePage(){

    return(
        <>
        
            <div>
                <Navbar/>
            </div>

            <div className="flex justify-center my-6">
                <TranslationButton/>
            </div>

            <div className="flex flex-col min-h-screen">
                <Game/>
            </div>

            <FooterBar fixed={false}/>
            
        </>
    )
}