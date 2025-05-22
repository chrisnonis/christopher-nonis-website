import React from 'react';
import { motion } from 'framer-motion';

const aiTopics = [
  {
    title: 'Natural Language Processing',
    description: 'Exploring the intersection of human language and machine understanding through advanced NLP models and applications.',
    icon: '🗣️',
  },
  {
    title: 'Computer Vision',
    description: 'Developing systems that can interpret and analyze visual information from the world, enabling machines to "see" and understand.',
    icon: '👁️',
  },
  {
    title: 'Reinforcement Learning',
    description: 'Investigating how AI agents can learn optimal behavior through interaction with their environment.',
    icon: '🎯',
  },
  {
    title: 'AI Ethics',
    description: 'Advocating for responsible AI development and addressing ethical considerations in artificial intelligence.',
    icon: '⚖️',
  },
];

const AIInterests = () => {
  return (
    <section id="ai-interests" className="py-20 bg-primary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">AI Interests & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/30 p-6 rounded-xl hover:bg-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{topic.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                    <p className="text-light/70">{topic.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-8 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Future of AI</h3>
            <p className="text-light/80 text-lg mb-6">
              I believe we're at the cusp of a transformative era in artificial intelligence. My focus is on
              developing AI solutions that are not only powerful but also ethical and beneficial to society.
              Through my work and research, I aim to contribute to the responsible advancement of AI technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Discuss AI Collaboration
              </a>
              <a href="#blog" className="btn btn-outline">
                Read My AI Insights
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIInterests; 