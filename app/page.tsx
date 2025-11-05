import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/customCard";
import { Subtitle } from "@/components/ui/subTitle";
import { Text } from "@/components/ui/text";
import { Title } from "@/components/ui/title";

export default function Home() {
  return (
    <div>
      <h1 className="text-rose-300 text-9xl">hello </h1>
      <ThemeToggle />
      <div className="flex gap-5 p-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Title variant="h1" align="center" className="mb-6">
          Full Stack Developer
        </Title>

        <Subtitle align="center" className="mb-8 max-w-2xl mx-auto">
          Crafting digital experiences with modern technologies and clean code
        </Subtitle>

        <Text align="center" size="lg" className="mb-12 max-w-3xl mx-auto">
          I specialize in building scalable web applications using React,
          Next.js, and TypeScript. Passionate about user experience and
          performance optimization.
        </Text>
      </div>
       <div className="container mx-auto px-4 py-8">
      <ProjectCard
        title="Example Project"
        description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track."
        imageUrl="/images/project1.jpg"
        projectType="Featured Project"
        imagePosition="right"
        detailsLink="/projects/example-1"
      />
      <ProjectCard
        title="Another Project"
        description="Another amazing project description with detailed information about the features and technologies used."
        imageUrl="/images/project2.jpg"
        projectType="Example Project"
        imagePosition="left"
        detailsLink="/projects/example-2"
      />
    </div>
    </div>
  );
}
