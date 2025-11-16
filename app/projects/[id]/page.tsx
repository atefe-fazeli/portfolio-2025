import { projectsList } from '@/data/listDtats';
import ProjectDetails from '@/components/detail/index';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projectsList.map((project) => ({
    id: project.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {

  const { id } = await params;
  
  console.log('Project ID:', id);
  
  const projectId = parseInt(id);
  const project = projectsList.find(p => p.id === projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}