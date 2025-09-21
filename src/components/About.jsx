import React from 'react';

const About = () => {
    return (
        <section className=" flex items-center justify-center px-4 md:px-8 mt-[-5%]  relative z-10 overflow-hidden bg-transparent  md:mt-[5%]">
            {/* Background elements */}
            

            {/* Grid pattern overlay */}
            

            <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-left justify-between gap-12 md:gap-24 lg:gap-24 relative z-20">
                {/* Image - Left Side */}
                <div className="flex-1 flex justify-center items-center order-1 md:order-1 relative">
                    <div className="relative"
                         style={{
                             width: 'clamp(300px, 40vw, 500px)',
                             height: 'clamp(300px, 40vw, 500px)'
                         }}>
                        {/* Green flare behind image */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-green-500/20 via-green-400/10 to-transparent rounded-full blur-2xl"></div>
                        
                        {/* Main image */}
                        <div className="relative z-30 w-full h-full flex items-center justify-center">
                            <img 
                                src="/infinity2.png" 
                                alt="Future Technology" 
                                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
                                style={{
                                    filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4))'
                                }}
                            />
                        </div>

                        
                         </div>
                         
                </div>

                {/* Text Content - Right Side */}
                <div className="flex-1 text-left md:text-left order-2 md:order-2">
                    
                    
                <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-white mb-8 mt-[-5%] leading-tight pt-4">
                We Craft{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-300 to-green-400">
                    Unforgettable
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </span>
                <br />Product Experiences
              </h2>
                    
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                 We've been transforming all the entrepreneur dreams into reality from scratch. Our team of passionate developers and experts create products that go beyond the ordinary.
              </p>
                    <div className="mb-6 inline-block">
                        <span className="text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2">
                        Creative Solutions
                        </span>
                        
                    </div>
                    <div className="mb-6 inline-block ml-4">
                        <span className="text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2">
                        Custom Products
                        </span>
                        
                    </div>
                    
                    

                </div>
                
            </div>

           

            <style jsx>{`
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

export default About;