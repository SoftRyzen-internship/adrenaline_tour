import { useState } from 'react';

import clsx from 'clsx';
import dynamic from 'next/dynamic';

import Button from '@/components/ui/Button';
const Modal = dynamic(() => import('@/components/ui/Modal'), {
  ssr: false,
});

import { IReadMoreButtonModalProps } from './ReadMoreButtonModal.types';

const ReadMoreButtonModal: React.FunctionComponent<
  IReadMoreButtonModalProps
> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant='readMore-secondary'
        type='button'
        onClick={() => setIsOpen(true)}
      >
        Читати далі
      </Button>
      <Modal
        variant='simple'
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        className='xl:max-h-[70%]'
      >
        <div className='h-[95%] overflow-hidden px-4 pb-[40px] pt-[56px] md:px-10 md:pb-[60px] md:pt-[88px] xl:px-[60px] xl:pt-[96px]'>
          <p className='mb-6  font-inter text-lg/[1.3] font-bold text-blueDefault  md:text-xl/[1.3]  xl:text-2xl/[1.1]'>
            {item.question}
          </p>

          <div
            className={clsx(
              'h-[95%] overflow-y-auto pr-4 scrollbar-thin scrollbar-track-grey01 scrollbar-thumb-accentDarkOrange',
            )}
          >
            {item.answers.map((answer, index) => (
              <div
                key={index}
                className='font-inter text-sm/[1.3] font-medium  text-dark md:text-base/[1.4] xl:text-lg/[1.5]'
              >
                {answer.title && (
                  <p className='mb-2 font-bold'>{answer.title}</p>
                )}

                <ul className='mb-2 '>
                  {answer.text.map((point, index) => (
                    <>
                      <li
                        key={index}
                        className={clsx('relative', item.icon && 'pl-5')}
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
      </Modal>
    </>
  );
};

export default ReadMoreButtonModal;
