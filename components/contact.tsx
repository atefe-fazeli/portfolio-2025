"use client";

import { contactList } from "@/data/listDtats";
import { ContactItem } from "@/types/contact";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Title } from "./ui/title";
import { Text } from "./ui/text";
import { Variants } from 'framer-motion';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

const getItemVariants = (index: number): Variants => {
  return {
    hidden: { 
      opacity: 0, 
      y: 20, 
      rotateY: -15 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],  
        delay: index * 0.1 
      } 
    }
  };
};

  const handleContactClick = (contact: ContactItem) => {
    if (contact.title !== "Phone") {
      window.open(contact.url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = contact.url;
    }
  };

  return (
    <section ref={ref} id="contact" className="">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Title align="center">
              <span className="bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
                Get In Touch
              </span>
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Text align="center" className="max-w-2xl mx-auto">
              Ready to start your project? Let&apos;s connect and bring your
              ideas to life. Choose your preferred platform:
            </Text>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactList.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <motion.button
                key={contact.id}
                variants={getItemVariants(index)}
                onClick={() => handleContactClick(contact)}
                whileHover={{
                  scale: 1.08,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative
                  flex flex-col items-center justify-center 
                  p-4 rounded-lg 
                  bg-gradient-to-r from-brand-cyan to-brand-pink shadow-lg 
                  hover:shadow-2xl 
                  transition-all duration-300 
                  w-20 h-20
                  md:w-32 md:h-32
                  group
                  cursor-pointer
                  overflow-hidden
                `}
              >
                <motion.div
                  className={`
                    absolute inset-0 rounded-2xl 
                    -z-10
                    ${contact.color.split(" ")[1].replace("hover:", "")}
                  `}
                  initial={{ scale: 0, opacity: 0, rotate: 45 }}
                  whileHover={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <IconComponent
                    className={`
                      text-3xl mb-2 md:mb-3 
                      transition-colors duration-300
                      ${contact.color.split(" ")[0]}
                    `}
                  />
                </motion.div>

                <motion.span
                  className="text-sm md:text-lg md:font-medium text-purple-950 transition-colors duration-300"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {contact.title}
                </motion.span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Text className="text-gray-500 text-sm" align="center">
            I typically respond within 24 hours
          </Text>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
