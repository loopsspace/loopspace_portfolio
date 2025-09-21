import React from 'react';
import { MdOutlinePermMedia } from "react-icons/md";
import { FaFigma, FaMobileAlt, } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";

const BentoGrid = () => {
  return (
    <div id="services" className="w-full max-w-6xl mx-auto p-6 mb-[4%] md:mb-[4%]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="md:w-16 md:h-16 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center md:mb-6 mb-4 group-hover:scale-110 transition-transform duration-300">
              <IoCodeSlashSharp className="w-6 h-6 text-white" />
              </div>
              <h3 className="md:text-2xl text-lg font-bold text-white md:mb-4 mb-2 group-hover:text-green-300 transition-colors">
                Web Development
              </h3>
              <p className="text-gray-300 md:text-base text-sm leading-tight">
                Sleek code based web apps.
              </p>
            </div>
            
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative">
          <div className="h-full flex flex-col justify-center items-left text-left">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              Business Automation
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              Streamline workflows and boost efficiency
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative">
          <div className="h-full flex flex-col justify-center items-left text-left">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <FaFigma className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              UI/UX Design
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              User-centered design solutions
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative">
          <div className="h-full flex flex-col justify-center items-left text-left">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <MdOutlinePermMedia className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              Motion Graphics & Editing
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              Dynamic visual storytelling
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative">
          <div className="h-full flex flex-col justify-center items-left text-left">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <FaMobileAlt className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              App Development
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              Custom mobile app development
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default BentoGrid;