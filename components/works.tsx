import { projectsList } from "@/data/listDtats";
import { Text } from "./ui/text";
import { Title } from "./ui/title";
import ProjectCard from "./customCard";

const WorkSection = () => {
  return (
    <div className="flex flex-col justify-center " id="projects">
      <Title align="center">
        <span className="bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
          Recent Work
        </span>
      </Title>
      <Text align="center">A collection of projects I&apos;ve worked on </Text>
      <div className="space-y-20 mt-20 md:mt-40">
        {projectsList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imagePosition={project.id % 2 === 0 ? "left" : "right"}
            projectType={project.projectType || "Personal Project"}
            detailsLink={project.detailsLink || "#"}
            year={project.year}
            role={project.role}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
