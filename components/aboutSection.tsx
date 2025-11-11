import { SkillsList } from "@/data/listDtats";
import { Text } from "./ui/text";
import { Title } from "./ui/title";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="flex justify-center mt-20 p-14 md:p-20">
      <div className="flex flex-col justify-center items-center gap-6  ">
        <Title className="">
          <span className="bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
            about
          </span>
        </Title>
        <Text className="">
          A passionate frontend developer with over 3 years of hands-on
          experience in modern web technologies. My expertise centers around
          React and Next.js, complemented by strong skills in TypeScript and
          JavaScript. I&apos;ve successfully delivered numerous freelance projects
          while also gaining valuable experience in an on-site company
          environment. My technical stack includes: • React & Next.js for robust
          frontend architecture • TypeScript for type-safe, scalable code •
          Tailwind CSS for efficient, responsive styling • RESTful API
          integration and collaboration with backend teams I specialize in
          transforming complex requirements into intuitive, performant user
          interfaces that deliver exceptional user experiences.
        </Text>
        <div className="flex flex-wrap w-1/2 gap-5 justify-center items-center">
          {SkillsList.map((item) => (
            <div
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
            >
              <Image
                alt=""
                src={item.imageUrl}
                width={40}
                height={10}
                className="object-cover w-8 h-8 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
