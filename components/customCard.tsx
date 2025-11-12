import Image from "next/image";
import { ProjectCardProps } from "@/types/customCard";
import CustomLink from "./ui/link";

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
      flex flex-col  md:flex-row items-center  relative
      ${isImageLeft ? "md:flex-row-reverse" : ""}
    `}
    >
      {/* Content Section */}
      <div
        className={`
        w-full md:w-1/2 relative z-20 mt-6 md:mt-0
        ${isImageLeft ? "md:-ml-6 lg:-ml-12 text-left" : "md:-mr-6 lg:-mr-12 text-right"}
      `}
      >
        <div
          className={`h-54 md:h-80 flex flex-col justify-between mb-5 md:mb-0 ${
            isImageLeft ? "items-center md:items-end" : "items-center md:items-start"
          }`}
        >
          <div className="flex flex-col items-center">
            <span className="text-brand-cyan font-mono text-sm ">
              {projectType}
            </span>
            <p className="text-slate-100 text-xl font-semibold mt-1">{title}</p>
          </div>
          <div className="bg-[#111928bf] backdrop-blur-lg  p-4 rounded-lg flex w-full">
            <p className="text-slate-300 leading-relaxed text-start line-clamp-4">
              {description}
            </p>
          </div>
          <CustomLink href="#" variant="button" className="mt-3 md:mt-0">
            more detail
          </CustomLink>
        </div>
      </div>
      {/* Image Section */}
      <div
        className={`
       hidden md:block w-full md:w-1/2 h-54 md:h-80 relative z-10
        ${
          isImageLeft
            ? "md:border-t-12 md:border-r-12 border-[#2a0d3d] rounded-lg"
            : "md:border-t-12 md:border-l-12 border-[#2a0d3d] rounded-lg"
        }
      `}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={550}
          height={400}
          className="w-full h-full rounded-lg"
          priority={false}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
