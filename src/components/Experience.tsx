import { useCursor } from '@/stores/useCursor';
import {
  Award,
  Briefcase,
  Calendar,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

const Experience: React.FC = () => {
  const { setCursorType } = useCursor();

  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Developer (MERN Stack)',
      company: 'Maple BPO',
      location: 'Rajshahi 6207, Bangladesh',
      period: 'March 2025 - June 2025',
      description:
        'Collaborated with a cross-functional team to build a scalable dashboard application using the MERN stack. Focused on API integration, frontend components, and backend data management.',
      achievements: [
        'Integrated external APIs and stored data efficiently using Node.js and MongoDB',
        'Built responsive and reusable UI components with React and Tailwind CSS',
        'Contributed to a faster deployment workflow by assisting in Git-based version control and team collaboration',
      ],
    },
  ];

  const education = [
    {
      type: 'education',
      title: 'Bachelor of Business Studies in Accounting (Ongoing)',
      company: 'National University, Bangladesh',
      location: 'Rajshahi, Bangladesh',
      period: '2024 - Present',
      description:
        'Currently pursuing Honors in Accounting under the National University of Bangladesh. Completed 1st year with strong interest in finance and analytical skills.',
      achievements: [
        'Successfully completed 1st year coursework',
        'Actively improving skills in web development alongside academic studies',
        'Maintaining academic progress while working as a full-stack developer',
      ],
    },
  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    const yearA = parseInt(
      a.period.split(' - ')[1] === 'Present' ? '2024' : a.period.split(' - ')[1]
    );
    const yearB = parseInt(
      b.period.split(' - ')[1] === 'Present' ? '2024' : b.period.split(' - ')[1]
    );
    return yearB - yearA;
  });

  return (
    <section
      id="experience"
      className="py-20 relative w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-purple-600" />

          <div className="space-y-12">
            {allItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.company}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10" />

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0
                      ? 'md:mr-auto md:pr-8'
                      : 'md:ml-auto md:pl-8'
                  }`}
                  onMouseEnter={() => setCursorType('hover')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                        {item.type === 'work' ? (
                          <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {item.achievements.map(
                        (achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: achievementIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            <Award className="h-3 w-3 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                            {achievement}
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
      </div>
    </section>
  );
};

export default Experience;
