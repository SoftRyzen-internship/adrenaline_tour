import { useState } from 'react';

import LinkButton from '@/components/ui/LinkButton';
import { faq } from '@/data';

interface IFaqNavMenuProps {}

const FaqNavMenu: React.FC<IFaqNavMenuProps> = () => {
  const { disclosures } = faq;

  const [activeDisclosure, setActiveDisclosure] = useState(
    disclosures[0].sectionId,
  );

  const handleSetActive = id => {
    setActiveDisclosure(id);
  };

  return (
    <ul className='flex'>
      {disclosures.map(disclosure => (
        <li key={disclosure.id}>
          <LinkButton
            toScrollId={disclosure.sectionId}
            variant='disclosure'
            toScroll={true}
            onClick={() => handleSetActive(disclosure.sectionId)}
            currentDisclosure={disclosure.sectionId === activeDisclosure}
          >
            {disclosure.label}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
};

export default FaqNavMenu;
