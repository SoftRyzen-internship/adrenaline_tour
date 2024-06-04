import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import MinusIcon from '@/../public/icons/minus.svg';
import PlusIcon from '@/../public/icons/plus.svg';

import { IDisclosureTourProps } from './DisclosureTour.types';

const DisclosureTour: React.FC<IDisclosureTourProps> = ({ disclosure }) => {
  return (
    <div className='mx-auto w-full '>
      <ul>
        {disclosure.map(item => (
          <Disclosure
            as='div'
            className='border-b-[1px] border-blue32 py-6 xl:w-[801px]'
            key={item.id}
          >
            {({ open }) => (
              <>
                <DisclosureButton className='group flex w-full items-center justify-between  text-left'>
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

                <DisclosurePanel className='pl-4 pt-[42px]  font-inter text-sm/[1.3] font-medium text-dark  md:text-base/[1.4] xl:text-lg/[1.5]'>
                  <div className='border-l-[1px] border-blue32'>
                    {item.answers.map((answer, index) => (
                      <div key={index} className='pl-4'>
                        {answer.title && (
                          <p className='mb-2 font-bold'>{answer.title}</p>
                        )}

                        <ul className='mb-2'>
                          {answer.text.map((point, index) => (
                            <li key={index}>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </ul>
    </div>
  );
};

export default DisclosureTour;
