import Image from "next/image";
import { ProjectCardProps } from "@/types/customCard";
import CustomLink from "./link";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectType,
  imagePosition,
  detailsLink,
  imageAlt = title,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`
      flex flex-col  lg:flex-row items-center  relative
      ${isImageLeft ? "lg:flex-row-reverse" : ""}
    `}
    >
      {/* Content Section */}
      <div
        className={`
        w-full lg:w-1/2 relative z-20 mt-6 lg:mt-0
        ${isImageLeft ? "lg:-ml-5 text-left" : "lg:-mr-5 text-right"}
      `}
      >
        <div
          className={`h-64 lg:h-80 flex flex-col justify-between ${
            isImageLeft ? "items-end" : "items-start"
          }`}
        >
          <div className="flex flex-col items-start">
            <span className="text-brand-cyan font-mono text-sm ">
              {projectType}
            </span>
            <p className="text-slate-100 text-xl font-semibold mt-1">{title}</p>
          </div>
          <div className="bg-[#111928bf]  backdrop-blur-lg backdrop-saturate-150 p-4 rounded-md flex ">
            <p className="text-slate-300 leading-relaxed text-start">
              {description}
            </p>
          </div>
          <CustomLink href="#" variant="button">
            more detail
          </CustomLink>
        </div>
      </div>
      {/* Image Section */}
      <div
        className={`
        w-full lg:w-1/2 relative z-10
        ${
          isImageLeft
            ? "lg:border-t-8 lg:border-r-8 border-[#2a0d3d]"
            : "lg:border-t-8 lg:border-l-8 border-[#2a0d3d]"
        }
      `}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={300}
          className="w-full h-64 lg:h-80 object-cover"
          priority={false}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
