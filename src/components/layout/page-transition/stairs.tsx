'use client';

import { motion } from 'motion/react';

const stairVariant = {
  initial: {
    top: '0%',
  },
  enter: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

const Stairs = ({ numberOfSteps = 6 }) => {
  return (
    <>
      {Array.from({ length: numberOfSteps }).map((_, index) => (
        <motion.div
          key={index}
          variants={stairVariant}
          initial='initial'
          animate='enter'
          exit='exit'
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: 0.1 * (numberOfSteps - index - 1),
          }}
          className='relative size-full bg-primary'
        />
      ))}
    </>
  );
};

export default Stairs;
