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
    title: "Digix24 Platform",
    description: "Digix24 Cryptocurrency Exchange - Contributed as a Frontend Developer on a comprehensive cryptocurrency trading platform with 5+ years of market presence. Developed the main website and admin panel during a 3-month remote contract, implementing secure trading interfaces for Bitcoin, Tether, and various digital assets with real-time rate displays and transaction functionalities.",
    imageUrl: "/images/digix1.png",
    year: "2023",
    role: "Frontend Developer",
    projectType: "Featured Project", 
    detailsLink: "/projects/ecommerce", 
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Mehr Soheila Charity Health Management Platform",
    description: "Mehr Soheila Charity Platform - As Frontend Developer, built an internal healthcare management system using React and TypeScript to track beneficiary medical histories and screening processes. Implemented user interfaces for recording all patient interactions - from registration and intake to health controls, tests, and examinations. Worked collaboratively with backend team to integrate API endpoints and ensure proper data synchronization across the charity's operational workflow.",
    imageUrl: "/images/mehr5.png",
    year: "2023",
    role: "Full Stack Developer",
    projectType: "Example Project", 
    detailsLink: "/projects/taskmanager", 
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
  },
    {
    id: 3,
    title: "Pol Star Admin Panel",
    description: "Engineered the frontend architecture using Next.js and TypeScript for a comprehensive educational management system. Developed features for course creation and management, virtual class video uploads, and complete educational content administration. Built responsive interfaces for organizing training programs, managing multimedia resources, and handling all institutional educational operations through an intuitive admin dashboard.",
    imageUrl: "/images/polstar.png",
    year: "2023",
    role: "Full Stack Developer",
    projectType: "Example Project", 
    detailsLink: "/projects/taskmanager", 
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
  },

];