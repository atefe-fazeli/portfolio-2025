import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/customCard";
import { Subtitle } from "@/components/ui/subTitle";
import { Text } from "@/components/ui/text";
import { Title } from "@/components/ui/title";
import Navigation from "@/components/navbar";
import { navItems } from "@/data/menu";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div className="mt-14 px-4">
      <Navigation navItems={navItems} />
      <HeroSection />
    </div>
  );
}
