import { skills } from '@/data';
import { useCursor } from '@/stores/useCursor';
import { IconType } from '@icons-pack/react-simple-icons';
import { motion } from 'motion/react';
import React from 'react';
import { Button } from './ui/moving-border';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

interface Skill {
  Icon: IconType | string;
  level: number;
  color?: string;
  name: string;
  type?: string; // Added type to handle image skills
}
const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Expertise
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const SkillCard = ({ skill }: { skill: Skill }) => {
  const { setCursorType } = useCursor();
  const [mouseHovered, setMouseHovered] = React.useState(false);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onMouseEnter={() => {
            setMouseHovered(true);
            setCursorType('hover');
          }}
          onMouseLeave={() => {
            setMouseHovered(false);
            setCursorType('default');
          }}
          className="flex items-center justify-center p-6 rounded-[1.75rem] bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800 transition-all duration-300"
        >
          {typeof skill.Icon === 'string' ? (
            <img
              src={skill.Icon}
              alt={skill.name}
              className={`w-10 h-10 ${skill.type === 'image' && skill.color}`}
            />
          ) : (
            <skill.Icon
              size={40}
              color={mouseHovered ? skill.color : '#6b7280'}
            />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="bg-transparent text-sm ">
        <h1 style={{ color: skill.color }}>{skill.name}</h1>
      </TooltipContent>
    </Tooltip>
  );
};
