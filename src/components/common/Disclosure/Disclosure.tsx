import React, { useState } from 'react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import MinusIcon from '@/../public/icons/minus.svg';
import PlusIcon from '@/../public/icons/plus.svg';
import { faq } from '@/data';

interface IDisclosureProps {}

const DisclosureMain: React.FC<IDisclosureProps> = () => {
  const { disclosures } = faq;

  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);

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
    <div className='mx-auto w-full max-w-lg'>
      <ul>
        {disclosures.map(disclosure => (
          <li key={disclosure.id} className='mb-8'>
            <p className='mb-6 inline-block rotate-3 border-2 border-accentDefaultOrange px-4 py-3 font-unbounded text-accentDefaultOrange'>
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
                        handleToggle({ key: item.id, open, close });
                      }}
                    >
                      <span className='max-w-[272px] font-inter text-lg/6 font-bold text-blueDefault'>
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
                    <DisclosurePanel className='line-clamp-4  pl-4 pt-[42px]  font-inter text-sm font-medium text-dark'>
                      {typeof item.answers === 'string' ? (
                        <p className='border-l-[1px] border-blue32 pl-4 before:absolute before:left-1 before:top-1 before:mr-0.5 before:block before:size-2 before:rounded-full before:bg-dark'>
                          {item.answers}
                        </p>
                      ) : (
                        item.answers.map((answer, index) => (
                          <div
                            key={index}
                            className=' border-l-[1px] border-blue32 pl-4'
                          >
                            <p className='font-bold'>{answer.title}</p>
                            <ul>
                              {answer.text.map((point, index) => (
                                <li key={index} className='relative pl-5'>
                                  <span className='before:absolute before:left-1 before:top-2  before:block before:size-[6px] before:rounded-full before:bg-dark'>
                                    {point}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      )}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisclosureMain;
