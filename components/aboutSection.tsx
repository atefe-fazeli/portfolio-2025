import { Text } from "./ui/text";
import { Title } from "./ui/title";

const AboutSection = () => {
  return (
    <section id="about" className="flex justify-center mt-20">
      <div className="flex flex-col justify-center items-center gap-6 w-3/4">
        <Title className="">
          <span className="bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
            about
          </span>
        </Title>
        <Text className="">
          A passionate frontend developer with over 3 years of hands-on
          experience in modern web technologies. My expertise centers around
          React and Next.js, complemented by strong skills in TypeScript and
          JavaScript. I've successfully delivered numerous freelance projects
          while also gaining valuable experience in an on-site company
          environment. My technical stack includes: • React & Next.js for robust
          frontend architecture • TypeScript for type-safe, scalable code •
          Tailwind CSS for efficient, responsive styling • RESTful API
          integration and collaboration with backend teams I specialize in
          transforming complex requirements into intuitive, performant user
          interfaces that deliver exceptional user experiences.
        </Text>
        <div className="flex flex-wrap w-1/4 bg-amber-300">
        
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
