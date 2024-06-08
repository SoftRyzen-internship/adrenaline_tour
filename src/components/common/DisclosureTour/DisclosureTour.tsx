'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react';

import { tourDisclosure } from '@/data';

import MinusIcon from '/public/icons/minus.svg';
import PlusIcon from '/public/icons/plus.svg';

const DisclosureTour = () => {
  return (
    <div className='mx-auto w-full'>
      <ul>
        {tourDisclosure.map(item => (
          <Disclosure
            as='li'
            className='border-b-[1px] border-blue32 py-5'
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
                      className='size-6 stroke-accentDefaultOrange md:size-12'
                    />
                  ) : (
                    <PlusIcon
                      width={24}
                      height={24}
                      className='size-6 stroke-accentDefaultOrange  md:size-12'
                    />
                  )}
                </DisclosureButton>
                <div className='overflow-hidden'>
                  <Transition
                    enter='duration-200 ease-out'
                    enterFrom='opacity-0 -translate-y-6'
                    enterTo='opacity-100 translate-y-0'
                    leave='duration-300 ease-out'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-6'
                  >
                    <DisclosurePanel className='pl-4 pt-[34px] font-inter  text-sm/[1.3] font-medium text-dark md:pt-[43px] md:text-base/[1.4]  xl:pt-[51px] xl:text-lg/[1.5]'>
                      <div className='border-l-[1px] border-blue32'>
                        {item.answers.map((answer, index) => (
                          <div key={index} className='mb-2 pl-4'>
                            {answer.title && (
                              <p className='mb-1 font-bold'>{answer.title}</p>
                            )}
                            <ul className='mb-2'>
                              {answer.text.map((point, index) => (
                                <li key={index}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Transition>
                </div>
              </>
            )}
          </Disclosure>
        ))}
      </ul>
    </div>
  );
};

export default DisclosureTour;
