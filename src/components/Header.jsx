import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section id="header" className=" flex items-center justify-center px-4 md:px-8 mb-[10%] mt-[30%] relative z-10 overflow-hidden bg-transparent  md:mt-40">
            {/* Background elements */}
            

            {/* Grid pattern overlay */}
            

            <motion.div 
                className="container max-w-7xl mx-auto flex flex-col md:flex-row items-left justify-between gap-12 md:gap-24 lg:gap-24 relative z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Text Content - Left Side */}
                <motion.div 
                    className="flex-1 text-left md:text-left order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div 
                        className="mb-6 inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className="text-xs font-medium text-white bg-green-400/10 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2">
                            Innovation is Here
                        </span>
                    </motion.div>
                    
                    <motion.h1 
                        className="mb-6 leading-tight bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-white tracking-tight"
                        style={{
                            fontFamily: 'LEMONMILK, sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            lineHeight: '1.1'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        YOU ARE IN THE<img src="/infinity.svg" alt="Frame Icon" className="inline-block w-20 h-20 md:w-36 md:h-36 align-middle mx-1 mt-[-10px]" />SPACE
                    </motion.h1>
                    
                    <motion.p 
                        className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 font-normal mb-10 text-lg"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Experience innovation like never before. Join us on a journey that transforms ideas into reality with cutting-edge technology.
                    </motion.p>
                    
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <motion.button 
                            onClick={() => scrollToSection('enquiry')}
                            className="group relative overflow-hidden bg-gradient-to-br from-green-800/40 to-green-700/10 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-green-400/50 text-white font-medium rounded-xl py-4 px-8 transition-all duration-300 hover:from-green-800 hover:to-green-950 hover:shadow-2xl hover:shadow-green-900/30 hover:-translate-y-0.5"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                        </motion.button>
                        
                        <motion.button 
                            onClick={() => scrollToSection('about')}
                            className="group relative overflow-hidden bg-transparent text-white border border-gray-700 font-medium rounded-xl py-4 px-8 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Learn More</span>
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>
                    </motion.div>

                </motion.div>

                {/* Image - Right Side */}
                <motion.div 
                    className="flex-1 flex justify-center items-center order-1 md:order-2 relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div 
                        className="relative"
                        style={{
                            width: 'clamp(300px, 40vw, 500px)',
                            height: 'clamp(300px, 40vw, 500px)'
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Floating container */}
                        
                        {/* Main image */}
                        <div className="relative z-30 w-full h-full flex items-center justify-center">
                            <motion.img 
                                src="/hero30.png" 
                                alt="Future Technology" 
                                className="w-full h-full object-contain"
                                style={{
                                    filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4))'
                                }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.7 }}
                            />
                        </div>

                        
                         </motion.div>
                         
                </motion.div>
                
            </motion.div>

           

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(5deg); }
                }
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(10px) rotate(-5deg); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 0.8; }
                }
                @keyframes pulse-medium {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-reverse {
                    animation: float-reverse 8s ease-in-out infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
                .animate-pulse-medium {
                    animation: pulse-medium 6s ease-in-out infinite;
                }
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
            
        </section>
        
    )
}

export default Header;