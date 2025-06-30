import {
  IconType as IconTypeReactSimpleIcons,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPassport,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import { Mail, MapPin, Phone } from 'lucide-react';
import { IconType } from 'react-icons/lib';
interface Skill {
  Icon: IconTypeReactSimpleIcons | string;
  level: number;
  color?: string;
  name: string;
  type?: string;
}

interface ContactInfo {
  Icon: IconType;
  label: string;
  value?: string;
}
export const skills: Skill[] = [
  { Icon: SiHtml5, name: 'HTML5', level: 95, color: '#E34F26' },
  { Icon: SiCss, name: 'CSS3', level: 91, color: '#663399' },
  { Icon: SiTailwindcss, name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
  { Icon: SiJavascript, name: 'JavaScript', level: 95, color: '#F7DF1E' },
  { Icon: SiTypescript, name: 'TypeScript', level: 90, color: '#3178C6' },
  { Icon: SiReact, name: 'React', level: 95, color: '#61DAFB' },
  { Icon: SiNextdotjs, name: 'Next.js', level: 85, color: '#000000' },
  { Icon: SiNodedotjs, name: 'Node.js', level: 88, color: '#5FA04E' },
  { Icon: SiExpress, name: 'Express.js', level: 65, color: '#000000' },
  { Icon: SiMongoose, name: 'Mongoose', level: 25, color: '#880000' },
  { Icon: SiPrisma, name: 'Prisma', level: 87, color: '#fff' },
  { Icon: SiMongodb, name: 'MongoDB', level: 82, color: '#47A248' },
  { Icon: SiPostgresql, name: 'PostgreSQL', level: 78, color: '#336791' },
  { Icon: SiPassport, name: 'Passport.js', level: 76, color: '#34E27A' },
  { Icon: SiJsonwebtokens, name: 'JWT', level: 75, color: '#000000' },
  {
    Icon: '/authjs.webp',
    name: 'Auth js',
    level: 55,
    color: 'grayscale hover:grayscale-0 contrast-40 hover:contrast-100',
    type: 'image',
  },
  { Icon: SiGit, name: 'Git', level: 45, color: '#F05032' },
  { Icon: SiGithub, name: 'GitHub', level: 87, color: '#fff' },
];

export const contactInfo: ContactInfo[] = [
  {
    Icon: MapPin,
    label: 'Location',
    value: '6300, Rajshahi, Bangladesh',
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+880 131 056 8975',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'mashrufahmed95@gmail.com',
  },
];
