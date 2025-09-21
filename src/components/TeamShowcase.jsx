import React, { useState } from 'react';
import { FaCode, FaPalette } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const TeamShowcase = () => {
  const [activeTab, setActiveTab] = useState('developers');

  const developers = [
    { name: 'Mr Ebad', role: 'Backend Developer', avatar: '/user.png' },
    { name: 'Mr Risheb', role: 'Full Stack Developer', avatar: '/user.png' },
    { name: 'Mr Abner', role: 'Backend Developer', avatar: '/user.png' },
    { name: 'Mr Shubham', role: 'Full Stack Developer', avatar: '/user.png' }
  ];

  const designers = [
    { name: 'Mr Shijaz', role: 'UI/UX Designer', avatar: '/user.png' },
    { name: 'Ms Roberta', role: 'Graphic Designer', avatar: '/user.png' }
  ];

  const currentTeam = activeTab === 'developers' ? developers : designers;

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2 flex gap-2 relative">
         
          <motion.div
            className="absolute bg-green-500/20 border border-green-500/30 rounded-xl"
            layoutId="activeTab"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
          
          <motion.button
            onClick={() => setActiveTab('developers')}
            className={`relative z-10 px-6 py-3 rounded-xl font-medium flex items-center gap-2 ${
              activeTab === 'developers'
                ? 'text-green-300'
                : 'text-gray-400 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              animate={{ rotate: activeTab === 'developers' ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaCode className="w-4 h-4" />
            </motion.div>
            Developers
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab('designers')}
            className={`relative z-10 px-6 py-3 rounded-xl font-medium flex items-center gap-2 ${
              activeTab === 'designers'
                ? 'text-green-300'
                : 'text-gray-400 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              animate={{ rotate: activeTab === 'designers' ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaPalette className="w-4 h-4" />
            </motion.div>
            Designers
          </motion.button>
        </div>
      </div>

      {/* Team Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, staggerChildren: 0.1 }}
        >
          {currentTeam.map((member, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/20 border border-gray-700/50 rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Background glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10 text-center">
                {/* Avatar */}
                <div className="relative mb-3 sm:mb-4 md:mb-6">
                  <motion.div 
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-700/50 group-hover:border-green-500/50 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>

                {/* Member Info */}
                <motion.h3 
                  className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-green-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.role}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

     
    </section>
  );
};

export default TeamShowcase;
