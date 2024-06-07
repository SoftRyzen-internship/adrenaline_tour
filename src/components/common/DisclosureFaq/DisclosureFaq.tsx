'use client';

import { useState } from 'react';

import DisclosureFaqItem from '@/components/common/DisclosureFaqItem';

import { IDisclosureFaqListProps } from './DisclosureFaq.types';

const DisclosureFaqList: React.FC<IDisclosureFaqListProps> = ({
  disclosures,
}) => {
  const panelStartId = disclosures[0].items[0].id;

  const [panelOpenId, setPanelOpenId] = useState<number | null>(panelStartId);

  const onToggleCard = (id: number) => {
    setPanelOpenId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className='mx-auto w-full '>
      <ul>
        {disclosures.map(disclosure => (
          <li
            key={disclosure.id}
            id={disclosure.sectionId}
            className='mb-8  md:mb-14  xl:mb-12 xl:flex xl:justify-between xl:py-8'
          >
            <p className='mb-6 inline-block rotate-3 border-2 border-accentDefaultOrange px-4 py-3 font-unbounded text-xs/[1.3] font-bold text-accentDefaultOrange  md:text-base/[1.3] md:text-sm/[1.3] xl:self-baseline'>
              {disclosure.label}
            </p>
            <ul>
              {disclosure.items.map(item => (
                <li
                  className='border-b-[1px] border-blue32 py-6 xl:w-[801px]'
                  key={item.id}
                >
                  <DisclosureFaqItem
                    handleClick={() => onToggleCard(item.id)}
                    item={item}
                    panelOpenId={panelOpenId}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisclosureFaqList;
