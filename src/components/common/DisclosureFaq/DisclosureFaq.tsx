'use client';

import { useState } from 'react';

import clsx from 'clsx';

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
            className='mb-8 md:mb-14 xl:mb-12 xl:flex xl:justify-between xl:py-8 xl:pl-1'
          >
            <p
              className={clsx(
                'mb-6 inline-block border-2 border-accentDefaultOrange px-4 py-3 text-xs/[1.3] font-bold text-accentDefaultOrange  md:mb-8  md:text-light xl:self-baseline xl:px-8 xl:py-4 xl:text-medium',
                disclosure.id % 2 === 0
                  ? '-rotate-2 xl:rotate-2'
                  : 'rotate-2 xl:-rotate-2',
              )}
            >
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
