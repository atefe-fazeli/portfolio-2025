'use client'
import { SkillsList } from "@/data/listDtats";
import { Text } from "./ui/text";
import { Title } from "./ui/title";
import Image from "next/image";
import { motion, useInView,Variants } from "framer-motion";
import { useRef } from "react";
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };



const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

  return (
    <section
      ref={ref}
      id="about"
      className="flex justify-center "
    >
      <motion.div
        className="flex flex-col justify-center items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* تایتل */}
        <motion.div variants={itemVariants}>
          <Title className="">
            <span className="bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
              about
            </span>
          </Title>
        </motion.div>

        {/* متن */}
        <motion.div variants={itemVariants}>
          <Text className="max-w-3xl text-center">
            A passionate frontend developer with over 3 years of hands-on
            experience in modern web technologies. My expertise centers around
            React and Next.js, complemented by strong skills in TypeScript and
            JavaScript. I&apos;ve successfully delivered numerous freelance
            projects while also gaining valuable experience in an on-site
            company environment. My technical stack includes: • React & Next.js
            for robust frontend architecture • TypeScript for type-safe,
            scalable code • Tailwind CSS for efficient, responsive styling •
            RESTful API integration and collaboration with backend teams I
            specialize in transforming complex requirements into intuitive,
            performant user interfaces that deliver exceptional user
            experiences.
          </Text>
        </motion.div>

        {/* اسکیل‌ها */}
        <motion.div
          className="flex flex-wrap w-full md:w-1/2 gap-5 justify-center items-center"
          variants={itemVariants}
        >
          {SkillsList.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center justify-center rounded-full 
                bg-gray-700/20          
                backdrop-blur-lg        
                border border-white/10   
                shadow-lg                
                hover:bg-gray-700/30   
                hover:backdrop-blur-xl   
                hover:border-white/20  
                transition-all duration-300
                w-12 h-12"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                alt={`skill`}
                src={item.imageUrl}
                width={40}
                height={40}
                className="object-cover w-8 h-8"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
