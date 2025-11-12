import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/customCard";
import { Subtitle } from "@/components/ui/subTitle";
import { Text } from "@/components/ui/text";
import { Title } from "@/components/ui/title";
import Navigation from "@/components/navbar";
import { navItems } from "@/data/listDtats";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import WorkSection from "@/components/works";

export default function Home() {
  return (
    <div className="mt-14 px-4">
      <Navigation navItems={navItems} />
      <HeroSection />
      <div className="flex flex-col gap-y-20 md:gap-y-40 mt-10 md:mt-20 p-10 md:p-20">
        <AboutSection />
        <WorkSection />
      </div>
    </div>
  );
}
