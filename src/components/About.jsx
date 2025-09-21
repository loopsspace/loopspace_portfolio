import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Sparkles, Code, Palette } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Creative Solutions",
            description: "Innovative approaches to complex problems"
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Custom Products",
            description: "Tailored solutions for your unique needs"
        }
    ];

    return (
        <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden mb-[-20%] md:mb-[0px]">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 via-transparent to-blue-900/5"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
            
            <div className="container max-w-7xl mx-auto">
                <motion.div 
                    className="flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-2"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Left Side - Image */}
                    <motion.div 
                        className="flex-1 flex justify-center md:justify-start"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative group mt-[-20px] md:mt-[-20px] mb-[-20px] md:mb-[-20px]">
                            {/* Floating background elements */}
                           
                            {/* Main image container */}
                            <div className="relative z-10 flex justify-center mt-[-65px] mb-[-60px] lg:mr-[-30%]">
                                <img 
                                    src="/infinity2.png" 
                                    alt="About LoopSpace" 
                                    className="w-[90%] h-[90%] md:w-full md:h-full max-w-md transform group-hover:scale-105 transition-transform duration-700"
                                    style={{
                                        filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div 
                        className="flex-1 text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Badge */}
                        <motion.div 
                            className="inline-block mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <span className="text-sm font-medium text-white bg-green-400/10 px-4 py-2 rounded-full backdrop-blur-sm border border-green-500/20 flex items-center gap-2 w-fit">
                                <Sparkles className="w-4 h-4 text-green-400" />
                                About us
                            </span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h2 
                            className="text-left text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent"
                            style={{ fontFamily: 'LEMONMILK, sans-serif' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            We Craft Unforgettable<br />
                            Product Experiences
                        </motion.h2>

                        {/* Description */}
                        <motion.p 
                            className="text-left text-gray-300 text-lg leading-tight mb-8 max-w-4xl"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            We've been transforming all the entrepreneur dreams into reality from scratch. Our team of passionate developers and experts create products that go beyond the ordinary.
                        </motion.p>

                        {/* Features */}
                        <motion.div 
                            className="mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-full text-sm text-white font-medium">
                                    Creative Solutions
                                </span>
                                <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-full text-sm text-white font-medium">
                                    Custom Products
                                </span>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        
                    </motion.div>
                </motion.div>
            </div>

            <style>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 0.8; }
                }
                @keyframes pulse-medium {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
                .animate-pulse-medium {
                    animation: pulse-medium 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default About;
