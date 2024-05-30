import React, { useState } from 'react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import ChevronDownIcon from '@/../public/icons/arrow-down.svg';

interface IDisclosureProps {}

const DisclosureMain: React.FC<IDisclosureProps> = () => {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(1);

  const handleToggle = newPanel => {
    if (activeDisclosurePanel) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close();
      }
    }

    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    });
  };

  const items = [
    {
      question: 'What is your refund policy?',
      answer: "If you're unhappy with your purchase, we'll refund you in full.",
    },
    { question: 'Do you offer technical support?', answer: 'No.' },
    {
      question: 'What is your refund policy?',
      answer: "If you're unhappy with your purchase, we'll refund you in full.",
    },
    { question: 'Do you offer technical support?', answer: 'No.' },
  ];

  return (
    <div>
      <div className='mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-black'>
        {items.map((item, index) => (
          <Disclosure
            as='div'
            className='p-6'
            key={index}
            defaultOpen={index === activeDisclosurePanel}
          >
            {({ open, close }) => (
              <>
                <DisclosureButton
                  className='group flex w-full items-center justify-between'
                  onClick={() => {
                    if (!open) {
                      close();
                    }
                    handleToggle({ key: index, open, close });
                  }}
                >
                  <span className='text-sm/6 font-medium text-white group-hover:text-white/80'>
                    {item.question}
                  </span>
                  <ChevronDownIcon
                    className={`size-5 fill-white/60 group-hover:fill-white/50 ${open ? 'rotate-180' : ''}`}
                  />
                </DisclosureButton>
                <DisclosurePanel className='mt-2 text-sm/5 text-white/50'>
                  {item.answer}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default DisclosureMain;
