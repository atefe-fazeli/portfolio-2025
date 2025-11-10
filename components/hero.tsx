import Image from "next/image";
import { Title } from "./ui/title";
import { Subtitle } from "./ui/subTitle";
import { Text } from "./ui/text";

const HeroSection = () => {
  return (
    <section id="home" className="">
      <div className="flex flex-col md:flex-row">
        <div className="bg-rose-400">
          <Image
            alt=""
            src="/public/images/css-3.png"
            width={300}
            height={200}
            className="object-cover"
          ></Image>
        </div>
        <div className="flex flex-col gap-4">
          <Title variant="h1">Hi, I`m Atefe</Title>
          <Subtitle>Front-End Developer</Subtitle>
          <Text>
            Frontend developer with 3+ years of experience specializing in
            modern web technologies. Passionate about creating responsive,
            user-friendly interfaces and seamless user experiences. Currently
            focused on React ecosystem and modern CSS frameworks.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
