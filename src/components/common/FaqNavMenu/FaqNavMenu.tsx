'use client';

import { useEffect, useState } from 'react';

import { Events, scrollSpy } from 'react-scroll';

import LinkButton from '@/components/ui/LinkButton';
import { faq } from '@/data';

const FaqNavMenu = () => {
  const { disclosures } = faq;

  const [activeDisclosure, setActiveDisclosure] = useState<string>(
    disclosures[0].sectionId,
  );

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {});

    Events.scrollEvent.register('end', function () {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

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
            onSetActive={handleSetActive}
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
