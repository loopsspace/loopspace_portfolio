import Header from "../components/Header";      
import GlassmorphismNavbar from "../components/Navbar";
import BentoGrid from "../components/BentoGrid";
import UIBento from "../components/UIBento";
import AboutSection from "../components/AboutSection";
import TeamShowcase from "../components/TeamShowcase";
import Footer from "../components/Footer";
         

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">   
        <GlassmorphismNavbar />
            <Header />
            <UIBento />
            <AboutSection />
            <BentoGrid />
            <TeamShowcase />
            <Footer />
            
            </div>
        
    );
}
export default Home;