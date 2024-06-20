'use client';

import AnimationContainer from '@/components/common/AnimationContainer';

import { IAnimatedTextProps } from './AnimatedText.types';

const AnimatedText: React.FC<IAnimatedTextProps> = ({
  className,
  children,
}) => {
  return (
    <AnimationContainer className={className}>{children}</AnimationContainer>
  );
};

export default AnimatedText;
