import React from 'react';

const UIBento = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* UI1 - Large Wide Card */}
        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden md:aspect-[4/2]">
          <img 
            src="/ui1.png" 
            alt="UI Design 1" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Modern Dashboard</h3>
              <p className="text-gray-200 text-sm">Clean, intuitive interface design</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Featured</span>
              </div>
              <div className="text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                View Details →
              </div>
            </div>
          </div>
        </div>

        {/* UI2 - Square Card (Mobile App) */}
        <div className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/30 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square">
          <img 
            src="/ui2.png" 
            alt="UI Design 2" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div>
              <h4 className="text-sm font-bold text-white">Mobile App</h4>
              <p className="text-gray-200 text-xs">User-friendly design</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 text-xs">In Progress</span>
            </div>
          </div>
        </div>

        {/* UI3 - Square Card (Web Portal) */}
        <div className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/30 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square">
          <img 
            src="/ui3.png" 
            alt="UI Design 3" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div>
              <h4 className="text-sm font-bold text-white">Web Portal</h4>
              <p className="text-gray-200 text-xs">Professional layout</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 text-xs">Completed</span>
            </div>
          </div>
        </div>

        {/* UI4 - Square Card (E-commerce) */}
        <div className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/30 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square">
          <img 
            src="/ui4.png" 
            alt="UI Design 4" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div>
              <h4 className="text-sm font-bold text-white">E-commerce Platform</h4>
              <p className="text-gray-200 text-xs">Advanced UI System</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs">Live Project</span>
            </div>
          </div>
        </div>

        {/* UI6 - Square Card (Creative Design) */}
        <div className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/30 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square">
          <img 
            src="/ui6.png" 
            alt="UI Design 6" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <div>
              <h4 className="text-sm font-bold text-white">Creative Design</h4>
              <p className="text-gray-200 text-xs">Innovative UI solution</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 text-xs">New Project</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIBento;
