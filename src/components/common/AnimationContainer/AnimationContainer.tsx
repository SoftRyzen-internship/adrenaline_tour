import { useEffect, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

import { IAnimationContainerProps } from './AnimationContainer.types';

const AnimationContainer: React.FC<IAnimationContainerProps> = ({
  className,
  children,
}) => {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div
      className={`relative xl:[--opacity-hidden:0%] notXL:[--opacity-hidden:100%] notXL:[--x-hidden:0px] notXL:[--y-hidden:0px] ${className}`}
      initial='hidden'
      animate={controls}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: {
          opacity: 'var(--opacity-hidden)',
          x: 'var(--x-hidden, 0)',
          y: 'var(--y-hidden, 0)',
        },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
