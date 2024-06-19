'use client';

import { CSSProperties } from 'react';

import BarLoader from 'react-spinners/BarLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

const Loading = () => {
  return (
    <div className='ml-8 p-8'>
      <BarLoader
        color='#FF4F1E'
        height={8}
        width={112}
        cssOverride={override}
        loading
      />
    </div>
  );
};

export default Loading;
