'use client';

import { motion } from 'framer-motion';

import { IAnimationContainerProps } from './AnimationContainer.types';

const AnimationContainer: React.FC<IAnimationContainerProps> = ({
  className,
  children,
}) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: {
          opacity: 'var(--opacity-hidden)',
          x: 'var(--x-hidden, 0)',
          y: 'var(--y-hidden, 0)',
        },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      className={`relative xl:[--opacity-hidden:0%] notXL:[--opacity-hidden:100%] notXL:[--x-hidden:0px] notXL:[--y-hidden:0px] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
