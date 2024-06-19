'use client';

import BarLoader from 'react-spinners/BarLoader';

const LoadingComponent = () => {
  return (
    <div className='p-8'>
      <BarLoader color='#FF4F1E' height={8} width='100%' loading />
    </div>
  );
};

export default LoadingComponent;
