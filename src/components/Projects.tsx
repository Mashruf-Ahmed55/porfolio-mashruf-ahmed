import { useCursor } from '@/stores/useCursor';
import { ExternalLink, Eye, Github } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

const Projects: React.FC = () => {
  const { setCursorType } = useCursor();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution built with MERN stack, featuring user authentication, payment integration, and admin dashboard.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image:
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media management with data visualization and scheduling features.',
      image:
        'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'React', 'D3.js', 'Firebase'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blog platform with markdown support, comment system, and SEO optimization.',
      image:
        'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description:
        'A stunning portfolio website with 3D animations, smooth transitions, and modern design.',
      image:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex space-x-4"
                    >
                      <a
                        href={project.live}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Eye className="h-6 w-6" />
                      </a>
                      <a
                        href={project.github}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`space-y-6 ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      onMouseEnter={() => setCursorType('hover')}
                      onMouseLeave={() => setCursorType('default')}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </motion.a>

                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all"
                    onMouseEnter={() => setCursorType('hover')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
