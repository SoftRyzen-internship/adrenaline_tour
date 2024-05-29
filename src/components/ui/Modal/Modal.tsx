import React from 'react';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import clsx from 'clsx';

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  variant: 'simple' | 'burger';
  className?: string;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  close,
  variant,
  className,
}) => {
  return (
    <>
      <Transition show={isOpen}>
        <Dialog onClose={close} className='relative z-50'>
          <TransitionChild
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-backdrop' />
          </TransitionChild>

          <TransitionChild
            enter='transition ease-in-out duration-300'
            enterFrom={
              variant === 'burger'
                ? 'translate-x-full'
                : 'translate-z-0 scale-150 opacity-100'
            }
            enterTo={
              variant === 'burger'
                ? 'translate-x-0'
                : 'translate-z-[1000px] scale-100 opacity-100'
            }
            leave='transition ease-in-out duration-300'
            leaveFrom={
              variant === 'burger'
                ? 'translate-x-0'
                : 'translate-z-0 scale-100 opacity-100'
            }
            leaveTo={
              variant === 'burger'
                ? 'translate-x-full'
                : 'translate-z-[1000px] scale-50 opacity-0 '
            }
          >
            <div
              className={clsx(
                'fixed inset-0 flex w-screen items-center justify-end',
                variant === 'simple' && 'justify-center p-4',
              )}
            >
              <DialogPanel
                className={clsx(
                  ' bg-white ',
                  variant === 'burger' && 'h-full w-full xl:max-w-[704px]',
                  variant === 'simple' &&
                    'max-h-[90%] min-w-[328px] sm:max-w-[480px] md:max-w-[700px] xl:max-w-[900px]',
                  className,
                )}
              >
                {children}
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
