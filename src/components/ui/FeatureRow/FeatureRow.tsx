import clsx from 'clsx';

import s from './FeatureRow.module.css';

interface IFeatureRowProps {
  feature: {
    id: number;
    caption: string;
    text: string | null;
    icon: string;
  };
}

const FeatureRow: React.FC<IFeatureRowProps> = ({ feature }) => {
  return (
    <>
      <p
        className={clsx(
          'mb-3 flex items-center font-unbounded text-xs/[1.3] font-bold text-darkBlue  md:text-sm',
          s.feature,
        )}
        style={
          {
            '--icon-url': `url(${`/icons/${feature.icon}.svg`})`,
          } as React.CSSProperties
        }
      >
        {feature.caption}
      </p>
      <p className='font-inter text-sm/[1.3] font-medium text-dark md:text-base xl:leading-[1.4]'>
        {feature.text ? feature.text : '-'}
      </p>
    </>
  );
};

export default FeatureRow;
