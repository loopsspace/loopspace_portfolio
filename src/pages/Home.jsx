import Header from "../components/Header";      
import GlassmorphismNavbar from "../components/Navbar";
import BentoGrid from "../components/BentoGrid";
import About from "../components/About";
import UIBento from "../components/UIBento";
         

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">   
        <GlassmorphismNavbar />
            <Header />
            <UIBento />
            <About />
            <BentoGrid />
            
            </div>
        
    );
}
export default Home;