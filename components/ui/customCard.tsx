import Image from 'next/image';
import { ProjectCardProps } from '@/types/customCard';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectType,
  imagePosition,
  detailsLink,
  imageAlt = title,
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className={`
      flex flex-col lg:flex-row items-center my-10 relative
      ${isImageLeft ? 'lg:flex-row-reverse' : ''}
    `}>
      {/* Image Section */}
      <div className={`
        w-full lg:w-1/2 relative z-10
        ${isImageLeft 
          ? 'lg:border-t lg:border-r border-green-400' 
          : 'lg:border-t lg:border-l border-green-400'
        }
      `}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full h-64 lg:h-80 object-cover"
          priority={false}
        />
      </div>

      {/* Content Section */}
      <div className={`
        w-full lg:w-1/2 relative z-20 mt-6 lg:mt-0
        ${isImageLeft 
          ? 'lg:-ml-5 text-left' 
          : 'lg:-mr-5 text-right'
        }
      `}>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <span className="text-green-400 font-mono text-sm">
            {projectType}
          </span>
          <h3 className="text-slate-100 text-xl font-semibold mt-2 mb-4">
            {title}
          </h3>
          <div className="bg-slate-700/80 p-4 rounded mb-4">
            <p className="text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>
          <a
            href={detailsLink}
            className="inline-flex items-center px-4 py-2 border border-green-400 text-green-400 rounded font-mono text-sm hover:bg-green-400/10 transition-colors"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;