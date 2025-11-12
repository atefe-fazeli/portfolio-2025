import { Text } from "./ui/text";
import { Title } from "./ui/title";

const WorkSection = () => {
  return (
    <div className="flex flex-col justify-center p-14 md:p-20" id="projects">
      <Title align="center">
        <span className="bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
          Recent Work
        </span>
      </Title>
      <Text align="center" >A collection of projects I&apos;ve worked on </Text>
    </div>
  );
};

export default WorkSection;
