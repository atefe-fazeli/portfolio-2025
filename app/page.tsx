import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
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
    </div>
  );
}
