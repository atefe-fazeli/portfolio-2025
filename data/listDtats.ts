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
    description: "Developed a full-stack e-commerce platform with React, Next.js, and Node.js. Implemented user authentication, product management, shopping cart, and payment integration.",
    imageUrl: "/images/projects/ecommerce.jpg",
    year: "2023",
    role: "Frontend Developer",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Built a collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    imageUrl: "/images/projects/taskmanager.jpg",
    year: "2023",
    role: "Full Stack Developer",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Created a responsive weather application with interactive charts, location-based forecasts, and progressive web app capabilities.",
    imageUrl: "/images/projects/weather-app.jpg",
    year: "2022",
    role: "Frontend Developer",
    technologies: ["React", "Chart.js", "PWA", "OpenWeather API"]
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Developed a social media platform with user profiles, posts, comments, likes, and real-time messaging functionality.",
    imageUrl: "/images/projects/social-media.jpg",
    year: "2022",
    role: "Frontend Developer",
    technologies: ["React", "Firebase", "Tailwind CSS", "Context API"]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Designed and developed a modern portfolio website with smooth animations, dark mode, and optimized performance.",
    imageUrl: "/images/projects/portfolio.jpg",
    year: "2021",
    role: "Frontend Developer",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"]
  },
  {
    id: 6,
    title: "Finance Tracker",
    description: "Built a personal finance management tool with expense tracking, budget planning, and financial analytics dashboard.",
    imageUrl: "/images/projects/finance-tracker.jpg",
    year: "2021",
    role: "Full Stack Developer",
    technologies: ["React", "Express.js", "MySQL", "Chart.js"]
  }
];