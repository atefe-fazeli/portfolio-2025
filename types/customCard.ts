export interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectType: string;
  imagePosition: 'left' | 'right';
  detailsLink: string;
  imageAlt?: string;
  year?: string;
  role?: string;
  technologies?: string[];
}