import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications.',
    date: '2024-05-15',
    readTime: '5 min read',
    category: 'AI & Web Dev',
  },
  {
    title: 'Building Ethical AI Systems',
    excerpt: 'A deep dive into the principles and practices of developing AI systems with ethics at their core.',
    date: '2024-05-10',
    readTime: '7 min read',
    category: 'AI Ethics',
  },
  {
    title: 'Startup Innovation in the AI Era',
    excerpt: 'How startups can leverage AI technologies to create innovative solutions and disrupt industries.',
    date: '2024-05-05',
    readTime: '6 min read',
    category: 'Startups',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-sm bg-secondary/20 text-secondary rounded-full">
                      {post.category}
                    </span>
                    <span className="text-light/50 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-light/70 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-light/50 text-sm">{post.date}</span>
                    <button className="text-secondary hover:text-secondary/80 transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a href="#" className="btn btn-primary">
              View All Posts
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 