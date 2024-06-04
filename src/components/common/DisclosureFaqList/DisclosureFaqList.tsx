import DisclosureFaqItem from '../DisclosureFaqItem';

import { IDisclosureFaqListProps } from './DisclosureFaqList.types';

const DisclosureFaqList: React.FC<IDisclosureFaqListProps> = ({
  disclosures,
}) => {
  return (
    <div className='mx-auto w-full '>
      <ul>
        {disclosures.map(disclosure => (
          <DisclosureFaqItem disclosure={disclosure} key={disclosure.id} />
        ))}
      </ul>
    </div>
  );
};

export default DisclosureFaqList;
