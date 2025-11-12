export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  role: string;
  technologies?: string[];
  detailsLink?: string; 
  imageAlt?: string;
  projectType?: string;
}

export interface ProjectCardProps extends ProjectItem {
  imagePosition: 'left' | 'right';
  
}