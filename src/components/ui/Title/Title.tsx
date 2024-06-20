import AnimationContainer from '@/components/common/AnimationContainer';

import { ITitleProps } from './Title.types';

const Title: React.FC<ITitleProps> = ({ className, children }) => {
  return (
    <AnimationContainer className='xl:[--x-hidden:-80px]'>
      <h2 className={className}>{children}</h2>
    </AnimationContainer>
  );
};

export default Title;
