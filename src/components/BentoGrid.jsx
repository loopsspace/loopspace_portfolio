import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaFigma, FaMobileAlt, } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";

const BentoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="services" className="w-full max-w-6xl mx-auto p-6 mb-[4%] md:mb-[4%]">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Row 1 */}
        <motion.div 
          className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <motion.div 
                className="md:w-16 md:h-16 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center md:mb-6 mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <IoCodeSlashSharp className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="md:text-2xl text-lg font-bold text-white md:mb-4 mb-2 group-hover:text-green-300 transition-colors">
                Web Development
              </h3>
              <p className="text-gray-300 md:text-base text-sm leading-tight">
                Sleek code based web apps.
              </p>
            </div>
            
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full flex flex-col justify-center items-left text-left">
            <motion.div 
              className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </motion.div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              Business Automation
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              Streamline workflows and boost efficiency
            </p>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full flex flex-col justify-center items-left text-left">
            <motion.div 
              className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            >
              <FaFigma className="w-6 h-6 text-white" />
            </motion.div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              UI/UX Design
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              User-centered design solutions
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full flex flex-col justify-center items-left text-left">
            <motion.div 
              className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            >
              <MdOutlineDashboardCustomize className="w-6 h-6 text-white" />
            </motion.div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
             Custom Software & ERP
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              Dedicated workflow managemenat systems for your clients and backend
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/20 border border-green-500/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/50 transition-all duration-300 group relative"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full flex flex-col justify-center items-left text-left">
            <motion.div 
              className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            >
              <FaMobileAlt className="w-6 h-6 text-white" />
            </motion.div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              App Development
            </h4>
            <p className="text-gray-300 text-sm leading-tight">
              Custom mobile app development
            </p>
          </div>
        </motion.div>

        
      </motion.div>
    </div>
  );
};

export default BentoGrid;