import clsx from 'clsx';

import { IDisclosureFaqItemTextProps } from './DisclosureFaqItemText.types';

const DisclosureFaqItemText: React.FunctionComponent<
  IDisclosureFaqItemTextProps
> = ({ point, item }) => {
  return (
    <>
      <p className={clsx('relative', item.icon && 'pl-5')}>
        <span
          className={clsx(
            item.icon &&
              'before:absolute before:left-1 before:top-2  before:block before:size-[6px] before:rounded-full before:bg-dark',
          )}
        >
          {point}
        </span>
      </p>
      {item.margin && (
        <p className='block h-4 text-transparent'>Пустий рядок</p>
      )}
    </>
  );
};

export default DisclosureFaqItemText;
