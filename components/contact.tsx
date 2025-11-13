'use client';

import { contactList } from '@/data/listDtats';
import { ContactItem } from '@/types/contact';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const getItemVariants = (index: number) => ({
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: index % 2 === 0 ? -30 : 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  });

  const handleContactClick = (contact: ContactItem) => {
    if (contact.title !== 'Phone') {
      window.open(contact.url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = contact.url;
    }
  };

  return (
    <section ref={ref} id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with animation */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Ready to start your project? Let's connect and bring your ideas to life. 
            Choose your preferred platform:
          </motion.p>
        </motion.div>

        {/* Contact items with staggered animation */}
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
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative
                  flex flex-col items-center justify-center 
                  p-6 rounded-2xl 
                  bg-white shadow-lg 
                  border border-gray-200
                  hover:shadow-2xl 
                  transition-all duration-300 
                  w-32 h-32
                  group
                  cursor-pointer
                  overflow-hidden
                `}
              >
                {/* Animated background with different entrance */}
                <motion.div 
                  className={`
                    absolute inset-0 rounded-2xl 
                    -z-10
                    ${contact.color.split(' ')[1].replace('hover:', '')}
                  `}
                  initial={{ scale: 0, opacity: 0, rotate: 45 }}
                  whileHover={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Icon with bounce animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  <IconComponent 
                    className={`
                      text-3xl mb-3 
                      transition-colors duration-300
                      ${contact.color.split(' ')[0]}
                      group-hover:text-white
                    `} 
                  />
                </motion.div>
                
                {/* Text with slide up animation */}
                <motion.span 
                  className="font-medium text-gray-700 group-hover:text-white transition-colors duration-300"
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

        {/* Footer text with fade in */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            I typically respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;