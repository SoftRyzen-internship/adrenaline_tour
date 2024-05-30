import React, { useState } from 'react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import MinusIcon from '@/../public/icons/minus.svg';
import PlusIcon from '@/../public/icons/plus.svg';

interface IDisclosureProps {}

const DisclosureMain: React.FC<IDisclosureProps> = () => {
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

  const accordions = [
    {
      id: 1,
      label: 'Що брати?',
      items: [
        {
          id: 1.1,
          question: 'Що саме брати в похід?',
          answer: [
            {
              title: 'Взуття',
              text: [
                'Ботінки на високій шнурівці з фіксацією голіностопного суглоба.',
                'Запасне взуття (кросівки або кеди) як варіант для табору, а також для переходів через струмки та на великі відстані.',
              ],
            },
            { title: 'Одяг', text: ['Пункт 1', 'Пункт 2', 'Пункт 3'] },
            {
              title: 'Аксесуари',
              text: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
            },
          ],
        },
        {
          id: 1.2,
          question:
            'Чи можу я взяти з собою камеру або дрон для зйомки пригоди?',
          answer:
            'Так, ви можете взяти з собою камеру або дрон. Однак, для безпеки та з поваги до приватності інших, існують вказівки щодо їх використання.',
        },
        {
          id: 1.3,
          question: 'Що брати на сплав, каноїнг або рафтінг?',
          answer: 'Водостійка куртка, дощовик',
        },
      ],
    },
    {
      id: 2,
      label: 'Добре знати',
      items: [
        {
          id: 2.1,
          question:
            'Чи можуть учасники-початківці брати участь у цих активностях?',
          answer: 'Another answer.',
        },
        {
          id: 2.2,
          question: 'Наскільки фізично вимогливі ці активності?',
          answer: 'Yet another answer.',
        },
        {
          id: 2.3,
          question: 'Наскільки фізично вимогливі ці активності?',
          answer: 'Yet another answer.',
        },
        {
          id: 2.4,
          question: 'Наскільки фізично вимогливі ці активності?',
          answer: 'Yet another answer.',
        },
      ],
    },
  ];

  return (
    <div className='mx-auto w-full max-w-lg'>
      <ul>
        {accordions.map(accordion => (
          <li key={accordion.id} className=''>
            <p className='inline-block rotate-3 border-2 border-accentDefaultOrange px-4 py-3 font-unbounded text-accentDefaultOrange'>
              {accordion.label}
            </p>
            {accordion.items.map(item => (
              <Disclosure
                as='div'
                className='border-b-[1px] border-blue32 py-6'
                key={item.id}
                defaultOpen={item.id === 1.1}
              >
                {({ open, close }) => (
                  <>
                    <DisclosureButton
                      className='group flex w-full items-center justify-between text-left'
                      onClick={() => {
                        handleToggle({ key: item.id, open, close });
                      }}
                    >
                      <span className=' max-w-[272px] font-inter text-lg/6 font-bold text-blueDefault'>
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
                    <DisclosurePanel className='p-l-4 mt-2 line-clamp-4 pl-4 font-inter text-sm font-medium text-dark'>
                      {typeof item.answer === 'string' ? (
                        <p className='border-l-[1px] border-blue32 pl-4'>
                          {item.answer}
                        </p>
                      ) : (
                        item.answer.map((description, index) => (
                          <div
                            key={index}
                            className=' border-l-[1px] border-blue32 pl-4'
                          >
                            <p className='font-bold'>{description.title}</p>
                            <ul className=''>
                              {description.text.map((point, index) => (
                                <li key={index}>* {point}</li>
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
