import React from 'react';
import { motion } from 'framer-motion';

const UIBento = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* UI1 - Large Wide Card */}
        <motion.div 
          className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/10 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square md:aspect-[4/2]"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src="/ui100.jpg" 
            alt="UI Design 1" 
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-white mb-3">AI & Automation</h3>
              <p className="text-gray-100 text-sm">Automated workflows for your business</p>
            </motion.div>
            
          </div>
        </motion.div>

        {/* UI2 - Square Card (Mobile App) */}
        <motion.div 
          className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/10 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src="/ui17.jpg" 
            alt="UI Design 2" 
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-3xl font-bold text-white mb-2">Hazzle Free Hosting</h4>
              <p className="text-gray-100 text-sm">Continuous deployments & integrations</p>
            </motion.div>
            
          </div>
        </motion.div>

        {/* UI3 - Square Card (Web Portal) */}
        <motion.div 
          className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/10 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src="/ui37.svg" 
            alt="UI Design 3" 
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-3xl font-bold text-white mb-2">Custom Softwares</h4>
              <p className="text-gray-100 text-sm">Dedicated dashboard for your business</p>
            </motion.div>
            
          </div>
        </motion.div>

        {/* UI4 - Square Card (E-commerce) */}
        <motion.div 
          className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/10 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src="/ui12.jpg" 
            alt="UI Design 4" 
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-3xl font-bold text-white mb-2">Web Mail Configurations</h4>
              <p className="text-gray-100 text-sm">Have full control over your workspace</p>
            </motion.div>
            
          </div>
        </motion.div>

        {/* UI6 - Square Card (Creative Design) */}
        <motion.div 
          className="bg-gradient-to-br from-green-800/20 to-green-700/10 border border-green-500/10 rounded-2xl backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group relative overflow-hidden aspect-square"
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src="/ui15.jpg" 
            alt="UI Design 6" 
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-3xl font-bold text-white mb-2">Custom UI Design</h4>
              <p className="text-gray-100 text-sm">Modern & sleek UI solution</p>
            </motion.div>
            
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UIBento;
