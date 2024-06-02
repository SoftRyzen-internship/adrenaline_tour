import React, { useState, useEffect, useRef } from 'react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import clsx from 'clsx';

import MinusIcon from '@/../public/icons/minus.svg';
import PlusIcon from '@/../public/icons/plus.svg';
import Button from '@/components/ui/Button';
import { faq } from '@/data';

interface IDisclosureProps {}

const DisclosureMain: React.FC<IDisclosureProps> = () => {
  const { disclosures } = faq;
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);
  console.log(activeDisclosurePanel);
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

  const handleToggle = newPanel => {
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
    <div className='mx-auto w-full'>
      <ul>
        {disclosures.map(disclosure => (
          <li key={disclosure.id} className='mb-8'>
            <p className='mb-6 inline-block rotate-3 border-2 border-accentDefaultOrange px-4 py-3 font-unbounded text-xs/[1.3] font-bold  text-accentDefaultOrange md:text-sm/[1.3]'>
              {disclosure.label}
            </p>
            {disclosure.items.map(item => (
              <Disclosure
                as='div'
                className='border-b-[1px] border-blue32 py-6'
                key={item.id}
                defaultOpen={item.id === 1.1}
              >
                {({ open, close }) => (
                  <>
                    <DisclosureButton
                      className='group flex w-full items-center justify-between  text-left'
                      onClick={() => {
                        if (!open) {
                          // On the first click, the panel is opened but the "open" prop's value is still false. Therefore the falsey verification
                          // This will make so the panel close itself when we click it while open
                          close();
                        }
                        handleToggle({ key: item.id, open, close });
                      }}
                    >
                      <span className='max-w-[272px] font-inter text-lg/[1.3] font-bold text-blueDefault md:text-xl/[1.3]'>
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
                    <DisclosurePanel
                      ref={textRef}
                      className='pl-4 pt-[42px]  font-inter text-sm/[1.3] font-medium text-dark  md:text-base/[1.4]'
                    >
                      {item.answers.map((answer, index) => (
                        <div
                          key={index}
                          className='border-l-[1px] border-blue32 pl-4'
                        >
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
                    </DisclosurePanel>
                    {showReadMoreButton && open && (
                      <div className='pl-4'>
                        <div className='border-l-[1px] border-blue32 pl-4'>
                          <Button variant='readMore-secondary' type='button'>
                            Читати далі
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </Disclosure>
            ))}
          </li>
        ))}
      </ul>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et. &nbsp;
        <p className='block h-4 text-transparent'></p> {/* Пустая строка */}
        Sed posuere consectetur est at lobortis.
      </div>
    </div>
  );
};

export default DisclosureMain;
