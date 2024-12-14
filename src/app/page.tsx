import GreenHeader from "@/app/components/header";
import Footer from "./components/footer";
import Caraousal from "./components/caraousal";
import Navbar from "./components/nav";

export default function Home(){
    return(
        <div>
            <Footer/>
            <GreenHeader/>
            <Caraousal/>
            <Navbar/>
        </div>
    )
}