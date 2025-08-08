import Navbar from "../components/navbar/navbar";
import Menu from "../components/menu/menu";
import FooterBar from "../components/footerBar/footerBar";
import TranslationButton from "@/components/translation/translationButton";

export default function Home() {
  return (
    <>

      <div>
        <Navbar/>
      </div>

      <div className="flex justify-center my-6">
        <TranslationButton/>
      </div>

      <div className="mt-5 pb-50">
        <Menu/>
      </div>

      <FooterBar fixed={true}/>

    </>
  );
}
