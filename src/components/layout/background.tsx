'use client';

import { AuroraBackground } from '../ui/aurora-background';
import { motion } from 'motion/react';

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='relative'
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
};
export default Background;
