import Navbar from "../components/navbar/navbar";
import Menu from "../components/menu/menu";
import FooterBar from "../components/footerBar/footerBar";

export default function Home() {
  return (
    <>

      <div>
        <Navbar/>
      </div>

      <div className="mt-20 pb-50">
        <Menu/>
      </div>

      <FooterBar fixed={true}/>
      
    </>
  );
}
