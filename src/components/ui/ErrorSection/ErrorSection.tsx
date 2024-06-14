import { IErrorProps } from '@/@types';

import ErrorComponent from '../ErrorComponent';

const ErrorSection: React.FC<IErrorProps> = ({ isLoadingError }) => {
  return (
    <div className='section container mt-[90px] md:mt-[112px] xl:mt-[144px]'>
      <ErrorComponent isLoadingError={isLoadingError} />
    </div>
  );
};

export default ErrorSection;
