import React from 'react';

const UIBento = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* UI1 - Large Wide Card */}
        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square md:aspect-[4/2]">
          <img 
            src="/ui1.png" 
            alt="UI Design 1" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">AI & Automation</h3>
              <p className="text-gray-100 text-sm">Automated workflows for your business</p>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <div>
              <h4 className="text-3xl font-bold text-white mb-2">Hazzle Free Hosting</h4>
              <p className="text-gray-100 text-sm">Continuous deployments & integrations</p>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <div>
              <h4 className="text-3xl font-bold text-white mb-2">Custom Softwares</h4>
              <p className="text-gray-100 text-sm">Providing custom dashboard for your business</p>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <div>
              <h4 className="text-3xl font-bold text-white mb-2">Web Mail Configurations</h4>
              <p className="text-gray-100 text-sm">Have full control over your workspace</p>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <div>
              <h4 className="text-3xl font-bold text-white mb-2">Customized UI Design</h4>
              <p className="text-gray-100 text-sm">Modern & sleek UI solution</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIBento;
