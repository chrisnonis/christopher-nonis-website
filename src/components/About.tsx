import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'AI & Machine Learning', level: 90 },
  { name: 'Web Development', level: 85 },
  { name: 'React & TypeScript', level: 88 },
  { name: 'Cloud Architecture', level: 82 },
  { name: 'UI/UX Design', level: 75 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-light/80 text-lg mb-6">
                As a semi-retired professional, I've dedicated my career to pushing the boundaries of technology
                and innovation. My journey has led me through various roles in tech, where I've developed a
                deep passion for artificial intelligence and its potential to transform our world.
              </p>
              <p className="text-light/80 text-lg mb-6">
                Today, I focus on exploring cutting-edge AI applications, developing innovative web solutions,
                and mentoring the next generation of tech enthusiasts. My approach combines technical expertise
                with a creative mindset, always seeking new ways to solve complex problems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-light/90">{skill.name}</span>
                      <span className="text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-primary/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 