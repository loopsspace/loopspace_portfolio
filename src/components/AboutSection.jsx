import React from 'react';
import { Mountain, Map, Globe, Compass, ArrowRight, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden mt-[-20px] md:mt-20" >
      {/* Enhanced decorative elements */}
     

      <div className="container mx-auto px-4 relative z-10 mt-[-70x] md:mt-[-100px]" >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Enhanced Image Section - Left */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-3xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1 max-w-[90%] mx-auto">
              {/* Glowing border effect */}
              
              <div className="relative rounded-3xl p-1">
                {/* Red flare behind image */}
                <img 
                  src="/infinity2.png" 
                  alt="Travel adventure" 
                  className="w-[100%] h-[100%] object-cover aspect-[4/3] lg:aspect-[4/3] rounded-3xl relative z-10"
                />
                
                {/* Floating decorative elements */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-xl animate-float"></div>
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
                
                {/* Gradient overlay for blending */}
                
                {/* Enhanced floating stats */}
                
                
                {/* Floating sparkles */}
                <div className="absolute top-4 right-4 opacity-60">
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section - Right */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-black text-white mb-8 leading-tight">
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
              
              <div className="space-y-6 mb-10">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-full text-sm text-green-400 font-medium">
                    Creative Solutions
                  </span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-full text-sm text-green-400 font-medium">
                    Custom Products
                  </span>
                  </div>
              </div>
              
              <div className="mt-7 flex flex-row flex-wrap items-center gap-3 sm:gap-4">
              
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;