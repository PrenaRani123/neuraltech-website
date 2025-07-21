import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce AI Assistant',
      category: 'AI Chatbot',
      description: 'Intelligent shopping assistant that helps customers find products, answer questions, and process orders.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      results: 'Increased conversion rate by 35%'
    },
    {
      id: 2,
      title: 'Smart Inventory Management',
      category: 'AI Agents',
      description: 'Automated inventory tracking system that predicts stock levels and optimizes ordering processes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker'],
      results: 'Reduced stockouts by 60%'
    },
    {
      id: 3,
      title: 'Modern E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-featured online store with advanced search, payment processing, and mobile optimization.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'Vercel'],
      results: '50% faster page load times'
    },
    {
      id: 4,
      title: 'Business Intelligence Dashboard',
      category: 'Data Analytics',
      description: 'Comprehensive analytics platform providing real-time insights into business performance and trends.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Tableau', 'Python', 'AWS', 'React'],
      results: 'Improved decision making by 40%'
    },
    {
      id: 5,
      title: 'Customer Support AI',
      category: 'AI Chatbot',
      description: '24/7 customer support chatbot that handles inquiries and escalates complex issues to human agents.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['Dialogflow', 'Node.js', 'Firebase', 'Vue.js'],
      results: 'Reduced response time by 80%'
    },
    {
      id: 6,
      title: 'Mobile Shopping App',
      category: 'App Development',
      description: 'Native mobile application with seamless shopping experience and push notifications.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['React Native', 'Redux', 'Firebase', 'Stripe'],
      results: 'Increased mobile sales by 120%'
    }
  ];

  const categories = ['All', 'AI Chatbot', 'AI Agents', 'Web Development', 'App Development', 'Data Analytics'];

  return (
    <section id="portfolio" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Explore our successful projects that demonstrate our expertise in AI, web development, and data analytics.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white text-secondary-700 hover:bg-primary-600 hover:text-white transition-colors duration-200 border border-secondary-200 hover:border-primary-600"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="flex items-center text-sm text-primary-600 font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {project.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Want to See Your Project Here?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Let's work together to create something amazing. Our team is ready to bring your vision to life.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 