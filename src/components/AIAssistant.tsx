import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const predefinedResponses = {
  greeting: "Hello! I'm an AI assistant that can tell you about Chris's work, skills, and interests. Feel free to ask about:\n- His AI and machine learning projects\n- Web development experience\n- Technical skills and expertise\n- Current projects and interests\n- Background and experience",
  
  skills: `Chris has extensive expertise in several areas:

Technical Skills:
• AI/ML: Deep learning, NLP, Computer Vision
• Web Dev: React, TypeScript, Node.js, Next.js
• Cloud: AWS, GCP, Azure, Docker
• Languages: Python, JavaScript/TypeScript, Java

Core Competencies:
• Full-stack Development
• System Architecture
• AI Model Development
• Technical Leadership
• Innovation Strategy

He's particularly passionate about:
1. Building AI-powered developer tools
2. Creating intuitive user experiences
3. Cloud-native architectures
4. Open source contribution`,

  experience: `Chris's professional journey includes:

Recent Focus:
• Developing AI-powered development tools
• Building innovative web applications
• Contributing to open-source projects
• Mentoring and technical leadership

Key Achievements:
• Led development of multiple successful AI products
• Architected scalable cloud solutions
• Pioneered ML-driven development workflows
• Built high-performance engineering teams

Current Projects:
• TaskBuddy AI: Smart task management
• AI Code Assistant: Intelligent coding companion
• Vibe Coder: Developer productivity suite`,

  projects: `Chris is currently working on several exciting projects:

1. TaskBuddy AI (Active)
   • AI-powered task management system
   • Natural language task processing
   • Smart prioritization and scheduling
   • Integration with popular tools

2. AI Code Assistant (In Development)
   • Real-time coding suggestions
   • Code quality analysis
   • Automated documentation
   • Context-aware completions

3. Vibe Coder Tools (Concept)
   • Suite of AI-powered development tools
   • Workflow optimization
   • Code generation and refactoring
   • Team collaboration features`,

  interests: `Chris is particularly interested in:

AI & Machine Learning:
• Large Language Models
• AI-assisted Development
• Computer Vision
• Natural Language Processing

Technology Innovation:
• Developer Tools
• Cloud Architecture
• Web3 Technologies
• Edge Computing

Personal Interests:
• Open Source Contributing
• Tech Mentorship
• Innovation Strategy
• Startup Ecosystems`,

  default: "I can tell you about Chris's technical skills, work experience, current projects, or specific interests in AI and technology. What would you like to know more about?"
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 0 && hasInteracted) {
      scrollToBottom();
    }
  }, [messages, hasInteracted]);

  const generateResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    // Multiple keyword matching for more natural responses
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
      return predefinedResponses.greeting;
    } 
    
    if (lowercaseInput.includes('skill') || lowercaseInput.includes('know') || lowercaseInput.includes('expert') || lowercaseInput.includes('tech')) {
      return predefinedResponses.skills;
    } 
    
    if (lowercaseInput.includes('experience') || lowercaseInput.includes('background') || lowercaseInput.includes('work') || lowercaseInput.includes('career')) {
      return predefinedResponses.experience;
    } 
    
    if (lowercaseInput.includes('project') || lowercaseInput.includes('build') || lowercaseInput.includes('develop') || lowercaseInput.includes('create')) {
      return predefinedResponses.projects;
    }
    
    if (lowercaseInput.includes('interest') || lowercaseInput.includes('passion') || lowercaseInput.includes('focus') || lowercaseInput.includes('like')) {
      return predefinedResponses.interests;
    }

    // If no specific match, look for AI/ML related questions
    if (lowercaseInput.includes('ai') || lowercaseInput.includes('ml') || lowercaseInput.includes('machine learning') || lowercaseInput.includes('artificial intelligence')) {
      return `${predefinedResponses.skills}\n\nWould you like to know more about his specific AI projects or interests?`;
    }

    return predefinedResponses.default;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (!hasInteracted) {
      setHasInteracted(true);
      setMessages([
        {
          type: 'assistant',
          content: predefinedResponses.greeting,
          timestamp: new Date(),
        }
      ]);
    }

    const userMessage: Message = {
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const aiResponse: Message = {
        type: 'assistant',
        content: generateResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <section id="ai-chat" className="py-20 bg-primary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Assistant</h2>
          <p className="text-light/80 text-lg mb-8">
            Chat with my AI assistant to learn more about my background, projects, and interests in technology and AI.
          </p>
          
          <div className="max-w-3xl mx-auto bg-primary/95 backdrop-blur-lg rounded-xl shadow-xl border border-secondary/20">
            <div className="flex justify-between items-center p-4 border-b border-secondary/20">
              <h3 className="text-lg font-bold text-secondary">Chat with AI Assistant</h3>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {!hasInteracted && (
                <div className="text-center text-light/50 mt-8">
                  Ask me anything about Chris's work, skills, or interests in AI and technology...
                </div>
              )}
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.type === 'user'
                        ? 'bg-secondary text-white rounded-br-none'
                        : 'bg-secondary/20 text-light rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-secondary/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about skills, projects, experience..."
                  className="flex-1 bg-primary/50 text-light placeholder-light/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAssistant; 