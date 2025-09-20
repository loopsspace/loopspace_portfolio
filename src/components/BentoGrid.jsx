import React from 'react';
import { MdOutlinePermMedia } from "react-icons/md";

const BentoGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                Web Development
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Modern, responsive websites and web applications built with cutting-edge technologies. From concept to deployment, we create digital experiences that engage and convert.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Available Now</span>
              </div>
              <div className="text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                Learn More →
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative">
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
              Business Automation
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              Streamline workflows and boost efficiency
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative">
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
              UI/UX Design
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              User-centered design solutions
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative">
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <MdOutlinePermMedia className="w-6 h-6 text-green-400" />
            </div>
            <h4 className="text-lg font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
              Motion Graphics & Editing
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              Dynamic visual storytelling
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative">
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
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