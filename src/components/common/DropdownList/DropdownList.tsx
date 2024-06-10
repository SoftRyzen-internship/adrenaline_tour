import clsx from 'clsx';

import { IDropdownListProps } from './DropdownList.types';

const DropdownList: React.FC<IDropdownListProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx('smOnly:space-y-3 md:space-x-4 xl:space-x-3', className)}
    >
      {children}
    </div>
  );
};

export default DropdownList;
