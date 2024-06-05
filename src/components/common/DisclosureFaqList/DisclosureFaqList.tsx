import { useState } from 'react';

import DisclosureFaqItem from '../DisclosureFaqItem';

import { IDisclosureFaqListProps, INewPanel } from './DisclosureFaqList.types';

const DisclosureFaqList: React.FC<IDisclosureFaqListProps> = ({
  disclosures,
}) => {
  const [activeDisclosurePanel, setActiveDisclosurePanel] =
    useState<INewPanel | null>(null);

  const handleToggle = (newPanel: INewPanel) => {
    if (activeDisclosurePanel) {
      if (activeDisclosurePanel.key !== newPanel.key) {
        activeDisclosurePanel.close();
      }
    }

    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    });
  };

  return (
    <div className='mx-auto w-full '>
      <ul>
        {disclosures.map(disclosure => (
          <DisclosureFaqItem
            disclosure={disclosure}
            key={disclosure.id}
            activeDisclosurePanel={activeDisclosurePanel}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default DisclosureFaqList;
