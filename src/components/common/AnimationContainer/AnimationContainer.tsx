import { motion } from 'framer-motion';

import { IAnimationContainerProps } from './AnimationContainer.types';

const AnimationContainer: React.FC<IAnimationContainerProps> = ({
  className,
  children,
}) => {
  return (
    <motion.div
      className={`relative w-full xl:[--opacity-hidden:0%] notXL:[--opacity-hidden:100%] notXL:[--x-hidden:0px] ${className}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 'var(--opacity-hidden)', x: 'var(--x-hidden, 0)' },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
