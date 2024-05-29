'use client';

import React, { useState } from 'react';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';

interface IModalProps {
  children: React.ReactNode;
  variant?: 'simple' | 'burger';
}

const Modal: React.FC<IModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Transition show={isOpen}>
        <Dialog onClose={() => setIsOpen(false)} className='relative z-50'>
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
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
              <DialogPanel className='max-w-lg space-y-4 bg-white p-12'>
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
