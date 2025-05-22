import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space-grotesk">
              Christopher Nonis
              <span className="block text-secondary mt-2">
                AI Enthusiast & Tech Innovator
              </span>
            </h1>
            <p className="text-xl text-light/80 mb-8 font-inter">
              Semi-retired professional exploring the frontiers of AI, web development, and startup innovation
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-x-4"
            >
              <a href="#projects" className="btn btn-primary">
                Explore My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 blur-3xl animate-pulse" />
              <div className="relative z-10 w-full h-full rounded-full border-2 border-secondary/30 overflow-hidden animate-float">
                {/* Add your profile image here */}
                <div className="w-full h-full bg-gradient-to-br from-secondary to-accent opacity-90" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 