import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Voice2Canvas',
    description: (
      <>
        VoiceCanvas is an innovative application that transforms spoken descriptions into digital art using voice AI and conversational video agents.<br />
        <span className="block mt-2">This app was my entry for the Hackathon 2025 competition.</span>
        <span className="block mt-2">🏆 <strong>Bolt Hackathon 2024 Entry</strong> - <a href="https://hackathon.dev/" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">Visit Hackathon</a></span>
        <a href="https://github.com/chrisnonis/BoltVoice2Canvas" target="_blank" rel="noopener noreferrer" className="underline text-blue-500 block mt-2">GitHub Repo</a>
        <a href="https://voice2canvas.co.uk/" target="_blank" rel="noopener noreferrer" className="underline text-blue-500 block">Live App</a>
      </>
    ),
    displayType: 'image',
    technologies: ['React', 'TypeScript', 'Voice AI', 'Conversational Video Agents'],
    link: 'https://voice2canvas.co.uk/',
    status: 'Completed',
    statusColor: 'bg-blue-600',
    icon: '/assets/voice2canvas.png',
    examples: [
      '/assets/example-monalisa.png',
      '/assets/example-cat.png',
      '/assets/example-spongebob.png'
    ],
    hackathonBadge: undefined,
    hackathonLink: undefined,
  },
  {
    title: 'TaskBuddy AI',
    description: 'An AI-powered task management system that helps users organize and prioritize their work efficiently.',
    displayType: 'text',
    technologies: ['React', 'TypeScript', 'OpenAI', 'Node.js'],
    link: 'https://taskbuddyai.vercel.app/',
    status: 'Active',
    statusColor: 'bg-green-500',
  },
  {
    title: 'Remote-Work-Hub',
    description: 'Maximize Your Remote Work Productivity. Discover the best tools, strategies, and resources to create your ideal digital workspace.',
    displayType: 'text',
    technologies: ['React', 'Vercel', 'Tailwind CSS', 'Node.js'],
    link: 'https://remote-work-hub.vercel.app/',
    status: 'Active',
    statusColor: 'bg-green-500',
  },
  {
    title: 'Vibe Coder Tools',
    description: 'A comprehensive suite of development tools powered by AI.',
    displayType: 'computer',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
    status: 'Concept',
    statusColor: 'bg-purple-500',
  },
  {
    title: 'AI Drop Shipping',
    description: 'AI-powered platform that analyzes market data, social trends, and consumer behavior to identify profitable dropshipping products before they trend. Features competitive analysis and predictive analytics for optimal product selection.',
    displayType: 'computer',
    technologies: ['Machine Learning', 'Data Analytics', 'Shopify API', 'Python'],
    status: 'Concept',
    statusColor: 'bg-purple-500',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden bg-secondary/20">
                  {project.title === 'Voice2Canvas' ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 gap-2">
                      <img src={project.icon} alt="Voice2Canvas Icon" className="w-20 h-20 mb-2" />
                      <div className="flex gap-2 mt-2">
                        {project.examples && project.examples.map((img, i) => (
                          <img key={i} src={img} alt={`Example ${i+1}`} className="w-16 h-16 rounded shadow" />
                        ))}
                      </div>
                    </div>
                  ) : project.displayType === 'text' ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-center text-secondary">{project.title}</h3>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-24 h-24 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className={`px-3 py-1 text-sm text-white rounded-full ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-light/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-secondary/20 text-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary text-sm"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 