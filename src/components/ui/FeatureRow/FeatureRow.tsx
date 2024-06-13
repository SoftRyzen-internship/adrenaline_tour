import clsx from 'clsx';

import s from './FeatureRow.module.css';
import { IFeatureRowProps } from './FeatureRow.types';

const FeatureRow: React.FC<IFeatureRowProps> = ({ feature }) => {
  const { icon, details } = feature;

  return (
    <>
      <p
        className={clsx(
          'mb-3 flex items-center font-unbounded text-xs/[1.3] font-bold text-darkBlue md:text-sm',
          s.feature,
        )}
        style={
          {
            '--icon-url': `url(${`/icons/${icon}.svg`})`,
          } as React.CSSProperties
        }
      >
        {details.title}
      </p>
      {'description' in details ? (
        <p className='font-inter text-sm/[1.3] font-medium text-dark md:text-base xl:leading-[1.4]'>
          {details.description ? details.description : '-'}
        </p>
      ) : (
        <ul className='font-inter text-sm/[1.3] font-medium text-dark md:text-base xl:leading-[1.4]'>
          {details.location.map((loc, index) => (
            <li key={index}>{loc.place ? loc.place : '-'}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FeatureRow;
