import { NavItem } from '@/types/nav';
import { SkillItem} from '@/types/skills';

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