'use client';

import { useState, useEffect, useRef } from 'react';

import clsx from 'clsx';

import DisclosureFaqItemText from '@/components/common/DisclosureFaqItemText';
import ReadMoreOpenDisclosureModal from '@/components/ui/ReadMoreOpenDisclosureModal';

import MinusIcon from '/public/icons/minus.svg';
import PlusIcon from '/public/icons/plus.svg';

import { IDisclosureItemProps } from './DisclosureFaqItem.types';

const DisclosureItem: React.FunctionComponent<IDisclosureItemProps> = ({
  handleClick,
  item,
  panelOpenId,
}) => {
  const [showReadMoreButton, setShowReadMoreExpandButton] = useState(false);
  const textRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (textRef.current) {
      if (
        textRef.current.scrollHeight > textRef.current.clientHeight ||
        textRef.current.scrollWidth > textRef.current.clientWidth
      ) {
        setShowReadMoreExpandButton(true);
      } else {
        setShowReadMoreExpandButton(false);
      }
    }
  }, [panelOpenId]);

  return (
    <>
      <button
        type='button'
        className='group flex w-full items-center justify-between text-left'
        onClick={handleClick}
      >
        <span className='max-w-[272px] font-inter text-lg/[1.3] font-bold text-blueDefault md:max-w-[644px] md:text-xl/[1.3] xl:max-w-[745px] xl:text-2xl/[1.1]'>
          {item.question}
        </span>
        {panelOpenId === item.id ? (
          <MinusIcon
            width={24}
            height={24}
            className='size-6 stroke-accentDefaultOrange'
          />
        ) : (
          <PlusIcon
            width={24}
            height={24}
            className='size-6 stroke-accentDefaultOrange'
          />
        )}
      </button>

      <div
        className={clsx(
          'overflow-hidden transition-all duration-500',
          panelOpenId === item.id
            ? 'max-h-60 opacity-100'
            : 'max-h-0 opacity-0',
        )}
      >
        <div className='line-clamp-4 pl-4 pt-[42px]  font-inter text-sm/[1.3] font-medium text-dark  md:text-base/[1.4] xl:text-lg/[1.5]'>
          <ul ref={textRef} className='border-l-[1px] border-blue32'>
            {item.answers.map(answer => (
              <li className='pl-4' key={answer.id}>
                {answer.title && (
                  <p className='mb-2 font-bold'>{answer.title}</p>
                )}

                <ul className='mb-2'>
                  {answer.text.map((point, index) => (
                    <li key={index}>
                      <DisclosureFaqItemText point={point} item={item} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={clsx(
            'pl-4 transition-all duration-500',
            showReadMoreButton && panelOpenId === item.id
              ? 'max-h-60 opacity-100'
              : 'max-h-0 opacity-0',
          )}
        >
          <div className='border-l-[1px] border-blue32 pl-4'>
            <ReadMoreOpenDisclosureModal item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisclosureItem;
