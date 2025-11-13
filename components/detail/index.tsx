"use client";

import { ProjectItem } from "@/types/works";
import { Title } from "../ui/title";
import { Text } from "../ui/text";
import Badge from "../ui/badge";
import ImageGallery from "./imageGallery";

interface ProjectDetailsProps {
  project: ProjectItem;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="flex flex-col  gap-5 md:gap-8  p-8 md:p-20">
      <section className=" w-2/3 mx-auto">
        <ImageGallery images={project.images || [project.imageUrl]} />
      </section>

      <section className="w-full  flex flex-col gap-y-4">
        <Title className="">{project.title}</Title>

        <Text className="">{project.description}</Text>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Text className="">Year :</Text>
            <Badge variant="primary">{project.year}</Badge>
          </div>

          <div className="flex items-center gap-2">
            <Text >Role :</Text>
            <Badge variant="primary">{project.role}</Badge>
          </div>

          <div className="flex items-center gap-2">
            <Text >Type :</Text>
            <Badge variant="primary">{project.projectType}</Badge>
          </div>
        </div>

        <div className="space-y-3">
          <Text className="">Technologies Used :</Text>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="warning"
                className="transition-all hover:scale-105"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
