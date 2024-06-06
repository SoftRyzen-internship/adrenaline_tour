'use client';

import { useState, useEffect, useRef } from 'react';

import clsx from 'clsx';

import ReadMoreButtonModal from '@/components/ui/ReadMoreButtonModal/ReadMoreButtonModal';

import MinusIcon from '/public/icons/minus.svg';
import PlusIcon from '/public/icons/plus.svg';

import { IDisclosureFaqListProps } from './DisclosureFaq.types';

const DisclosureFaqList: React.FC<IDisclosureFaqListProps> = ({
  disclosures,
}) => {
  const panelStartId = disclosures[0].items[0].id;

  const [panelOpenId, setPanelOpenId] = useState<number | null>(panelStartId);

  const [showReadMoreButton, setShowReadMoreExpandButton] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

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
                  <>
                    <button
                      type='button'
                      className='group flex w-full items-center justify-between  text-left'
                      onClick={() => onToggleCard(item.id)}
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
                    {panelOpenId === item.id && (
                      <div className='line-clamp-4 pl-4 pt-[42px]  font-inter text-sm/[1.3] font-medium text-dark  md:text-base/[1.4] xl:text-lg/[1.5]'>
                        <div
                          ref={textRef}
                          className='border-l-[1px] border-blue32'
                        >
                          {item.answers.map((answer, index) => (
                            <div key={index} className=' pl-4'>
                              {answer.title && (
                                <p className='mb-2 font-bold'>{answer.title}</p>
                              )}

                              <ul className='mb-2' key={index}>
                                {answer.text.map((point, index) => (
                                  <>
                                    <li
                                      key={index}
                                      className={clsx(
                                        'relative',
                                        item.icon && 'pl-5',
                                      )}
                                    >
                                      <span
                                        className={clsx(
                                          item.icon &&
                                            'before:absolute before:left-1 before:top-2  before:block before:size-[6px] before:rounded-full before:bg-dark',
                                        )}
                                      >
                                        {point}
                                      </span>
                                    </li>
                                    {item.margin && (
                                      <p className='block h-4 text-transparent'>
                                        Пустий рядок
                                      </p>
                                    )}
                                  </>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {showReadMoreButton && panelOpenId === item.id && (
                      <div className='pl-4'>
                        <div className='border-l-[1px] border-blue32 pl-4'>
                          <ReadMoreButtonModal item={item} />
                        </div>
                      </div>
                    )}
                  </>
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
