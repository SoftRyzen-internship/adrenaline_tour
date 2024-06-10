'use client';

import { useState } from 'react';

import LinkButton from '@/components/ui/LinkButton';
import { faq } from '@/data';

const FaqNavMenu: React.FC = () => {
  const { disclosures } = faq;

  const [activeDisclosure, setActiveDisclosure] = useState(
    disclosures[0].sectionId,
  );

  const handleSetActive = (id: string) => {
    setActiveDisclosure(id);
  };

  return (
    <ul className='hidden xl:flex'>
      {disclosures.map(({ id, sectionId, label }) => (
        <li key={id}>
          <LinkButton
            to={sectionId}
            variant='disclosure'
            toScroll={true}
            onClick={() => handleSetActive(sectionId)}
            currentDisclosure={sectionId === activeDisclosure}
          >
            {label}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
};

export default FaqNavMenu;
