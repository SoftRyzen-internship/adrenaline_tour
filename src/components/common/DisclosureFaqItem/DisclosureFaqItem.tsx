'use client';

import { useEffect, useState, useRef } from 'react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import clsx from 'clsx';

import MinusIcon from '@/../public/icons/minus.svg';
import PlusIcon from '@/../public/icons/plus.svg';
import ReadMoreButtonModal from '@/components/ui/ReadMoreButtonModal/ReadMoreButtonModal';

import { IDisclosureFaqItemProps } from './DisclosureFaqItem.types';

const DisclosureFaqItem: React.FunctionComponent<IDisclosureFaqItemProps> = ({
  disclosure,
  activeDisclosurePanel,
  handleToggle,
}) => {
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
  }, [activeDisclosurePanel]);

  return (
    <li
      key={disclosure.id}
      id={disclosure.sectionId}
      className='mb-8  md:mb-14  xl:mb-12 xl:flex xl:justify-between xl:py-8'
    >
      <p className='mb-6 inline-block rotate-3 border-2 border-accentDefaultOrange px-4 py-3 font-unbounded text-xs/[1.3] font-bold text-accentDefaultOrange  md:text-base/[1.3] md:text-sm/[1.3] xl:self-baseline'>
        {disclosure.label}
      </p>
      <div>
        {disclosure.items.map(item => (
          <Disclosure
            as='div'
            className='border-b-[1px] border-blue32 py-6 xl:w-[801px]'
            key={item.id}
            defaultOpen={item.id === 1.1}
          >
            {({ open, close }) => (
              <>
                <DisclosureButton
                  className='group flex w-full items-center justify-between  text-left'
                  onClick={() => {
                    handleToggle({ key: item.id, open, close });
                    if (!open) {
                      // On the first click, the panel is opened but the "open" prop's value is still false. Therefore the falsey verification
                      // This will make so the panel close itself when we click it while open
                      close();
                    }
                  }}
                >
                  <span className='max-w-[272px] font-inter text-lg/[1.3] font-bold text-blueDefault md:max-w-[644px] md:text-xl/[1.3] xl:max-w-[745px] xl:text-2xl/[1.1]'>
                    {item.question}
                  </span>
                  {open ? (
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
                </DisclosureButton>

                <DisclosurePanel className='line-clamp-4 pl-4 pt-[42px]  font-inter text-sm/[1.3] font-medium text-dark  md:text-base/[1.4] xl:text-lg/[1.5]'>
                  <div ref={textRef} className='border-l-[1px] border-blue32'>
                    {item.answers.map((answer, index) => (
                      <div key={index} className=' pl-4'>
                        {answer.title && (
                          <p className='mb-2 font-bold'>{answer.title}</p>
                        )}

                        <ul className='mb-2'>
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
                </DisclosurePanel>

                {showReadMoreButton && open && (
                  <div className='pl-4'>
                    <div className='border-l-[1px] border-blue32 pl-4'>
                      <ReadMoreButtonModal item={item} />
                    </div>
                  </div>
                )}
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </li>
  );
};

export default DisclosureFaqItem;
