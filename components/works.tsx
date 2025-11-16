'use client'
import { projectsList } from "@/data/listDtats";
import { Text } from "./ui/text";
import { Title } from "./ui/title";
import ProjectCard from "./customCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from 'framer-motion';

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const
    } 
  }
};

const projectVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const
    } 
  }
};

  return (
    <section ref={ref} className="flex flex-col justify-center" id="projects">
      <motion.div
        className="flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* عنوان */}
        <motion.div variants={itemVariants}>
          <Title align="center">
            <span className="bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
              Recent Work
            </span>
          </Title>
        </motion.div>

        {/* متن توضیحی */}
        <motion.div variants={itemVariants}>
          <Text align="center">A collection of projects I&apos;ve worked on</Text>
        </motion.div>

        {/* لیست پروژه‌ها */}
        <motion.div 
          className="space-y-20 md:space-y-40 mt-10 md:mt-20"
          variants={containerVariants}
        >
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard
              id={project.id}
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkSection;