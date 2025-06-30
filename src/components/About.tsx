import { useCursor } from '@/stores/useCursor';
import { Code2, Heart, LayoutTemplate, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

const About: React.FC = () => {
  const { setCursorType } = useCursor();

  const features = [
    {
      icon: Code2,
      title: 'Clean & Scalable Code',
      description:
        'I write code that’s easy to understand, well-structured, and built to grow—ensuring long-term maintainability.',
    },
    {
      icon: LayoutTemplate,
      title: 'Pixel-Perfect UI',
      description:
        'I bring Figma and design files to life with precision, building responsive and accessible interfaces using React and Tailwind CSS.',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description:
        'From backend logic to frontend load speed, I optimize every layer to deliver fast, smooth user experiences.',
    },
    {
      icon: Heart,
      title: 'Driven by Passion',
      description:
        'I love solving real problems with code. My passion for learning and building keeps me growing every day.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-justify text-sm md:text-lg">
              <p className=" text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello, I'm <span className="font-bold">Mashruf Ahmed</span>, and
                I'm a self-driven full-stack web developer with a passion for
                building user-focused, modern web applications. I enjoy working
                in remote, collaborative environments where clarity and
                accountability are key.
              </p>

              <p className=" text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in React, Next.js, Node.js, and MongoDB—crafting
                responsive, scalable solutions with clean design and efficient
                backend logic. I also work with Tailwind CSS and RESTful APIs to
                ensure seamless user experiences.
              </p>

              <p className=" text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond coding, I value continuous learning, problem-solving, and
                writing maintainable code that delivers real impact.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 pt-4 justify-center md:justify-around"
            >
              {[
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Tailwind CSS',
                'Git',
                'REST APIs',
                'Node.js',
                'MongoDB',
                'Express',
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
                onMouseEnter={() => setCursorType('hover')}
                onMouseLeave={() => setCursorType('default')}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
