import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/customCard";
import { Subtitle } from "@/components/ui/subTitle";
import { Text } from "@/components/ui/text";
import { Title } from "@/components/ui/title";
import Navigation from "@/components/navbar";
import { navItems } from "@/data/menu";

export default function Home() {
  return (
    <div className="mt-14 p-9">
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

      <div className="bg-slate-950 text-white">
        <Navigation navItems={navItems} />

       
        <section
          id="home"
          className="min-h-screen pt-20 flex items-center justify-center"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center">بخش خانه</h1>
            <p className="text-center mt-4 text-slate-300">این بخش خانه است</p>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen pt-20 flex items-center justify-center bg-slate-900"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center">بخش درباره</h1>
            <p className="text-center mt-4 text-slate-300">
              این بخش درباره ما است
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen pt-20 flex items-center justify-center"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center">بخش پروژه‌ها</h1>
            <p className="text-center mt-4 text-slate-300">
              این بخش پروژه‌ها است
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen pt-20 flex items-center justify-center bg-slate-900"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-center">بخش ارتباط</h1>
            <p className="text-center mt-4 text-slate-300">
              این بخش ارتباط با ما است
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
