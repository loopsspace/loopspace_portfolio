import Header from "../components/Header";      
import GlassmorphismNavbar from "../components/Navbar";
import BentoGrid from "../components/BentoGrid";
import UIBento from "../components/UIBento";
import AboutSection from "../components/AboutSection";
         

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">   
        <GlassmorphismNavbar />
            <Header />
            <UIBento />
            <AboutSection />
            <BentoGrid />
            
            </div>
        
    );
}
export default Home;