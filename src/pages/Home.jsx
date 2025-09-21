import Header from "../components/Header";      
import GlassmorphismNavbar from "../components/Navbar";
import BentoGrid from "../components/BentoGrid";
import UIBento from "../components/UIBento";
import About from "../components/About";
import TeamShowcase from "../components/TeamShowcase";
import Enquiry from "../components/Enquiry";
import Footer from "../components/Footer";
         

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">   
        <GlassmorphismNavbar />
            <Header />
            <UIBento />
            <About />
            <BentoGrid />
            <Enquiry />
            <TeamShowcase />
            
            <Footer />
            
            </div>
        
    );
}
export default Home;