import { NavItem } from '@/types/nav';
import { SkillItem} from '@/types/skills';
import { ProjectItem } from '@/types/works'; 

export const navItems: NavItem[] = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'projects', label: 'PROJECTS', href: '/#projects' },
  { id: 'contact', label: 'CONTACT', href: '/#contact' },
];

export const SkillsList: SkillItem[] = [ 
  {
  id: 1,
    imageUrl: '/images/css-3.png',
  },
  {
    id: 2, 
    imageUrl: '/images/figma.png',
  },
    {
    id: 3, 
    imageUrl: '/images/html.png',
  },
    {
    id: 4, 
    imageUrl: '/images/gitlogo.png',
  },
    {
    id: 5, 
    imageUrl: '/images/redux.svg',
  },  {
    id: 6, 
    imageUrl: '/images/mongo.png',
  },
    {
    id: 7, 
    imageUrl: '/images/typescript.png',
  },  {
    id: 8, 
    imageUrl: '/images/next.svg',
  },
    {
    id: 9, 
    imageUrl: '/images/visual-basic.png',
  }, 
]

export const projectsList: ProjectItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Developed a full-stack e-commerce platform with React, Next.js, and Node.js.",
    imageUrl: "/images/digix1.png",
    year: "2023",
    role: "Frontend Developer",
    projectType: "Featured Project", 
    detailsLink: "/projects/ecommerce", 
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Built a collaborative task management application with real-time updates.",
    imageUrl: "/images/mehr5.png",
    year: "2023",
    role: "Full Stack Developer",
    projectType: "Example Project", 
    detailsLink: "/projects/taskmanager", 
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
  },
    {
    id: 3,
    title: "Task Management App",
    description: "Built a collaborative task management application with real-time updates.",
    imageUrl: "/images/polstar.png",
    year: "2023",
    role: "Full Stack Developer",
    projectType: "Example Project", 
    detailsLink: "/projects/taskmanager", 
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
  },

];