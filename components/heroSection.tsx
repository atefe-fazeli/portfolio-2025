import Image from "next/image";
import { Title } from "./ui/title";
import { Subtitle } from "./ui/subTitle";
import { Text } from "./ui/text";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-[linear-gradient(90deg,#312640_0%,#312640_18%,#712281_52%,#712281_68%,#5a5788_100%)]  p-14 md:p-20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]"
    >
      <div className="flex flex-col  md:flex-row-reverse">
        <div className=" w-full md:w-1/2 flex justify-end">
          <Image
            alt=""
            src="/images/person.png"
            width={400}
            height={300}
            className="object-cover "
          ></Image>
        </div>
        <div className="w-full md:w-1/2 flex flex-col mt-4 md:mt-0 md:justify-center">
          <Title variant="h1">Hi, I&apos;m Atefe</Title>
          <Subtitle>
            <span className="bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
              Front-End Developer
            </span>
          </Subtitle>
          <Text className="mt-9 md:mt-12">
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
