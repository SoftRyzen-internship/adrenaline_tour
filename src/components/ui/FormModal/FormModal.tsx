import clsx from 'clsx';

import ArrowRightDownIcon from '@/../public/icons/arrow-right_up.svg';

import LinkButton from '../LinkButton';
import Modal from '../Modal';

import { FormModalProps } from './FormModal.types';

function FormModal({
  open,
  handleClose,
  title,
  text,
  buttonText,
  error,
}: FormModalProps) {
  return (
    <Modal
      isOpen={open}
      close={handleClose}
      variant='simple'
      className='px-4 pb-8 md:w-[526px] md:px-10 md:pb-10 xl:w-[677px] xl:px-[102px]'
    >
      <h3
        className={clsx(
          'mb-4 pt-[72px] text-center font-inter text-[18px] font-bold uppercase leading-[1.15] text-[#3B433E] md:pt-[88px] md:text-lightLarge md:leading-[1.15] xl:text-3xl xl:leading-[1.15]',
          error && 'text-accentDefaultOrange',
        )}
      >
        {title}
      </h3>
      <p className='mb-8 text-center font-inter text-light font-light tracking-[-0.02em] text-[#3B433E] xl:text-medium'>
        {text}
      </p>
      <LinkButton
        variant='main'
        iconPosition='after'
        href='/'
        onClick={handleClose}
        className='mx-auto w-full md:flex md:max-w-[218px]'
        icon={<ArrowRightDownIcon width={24} height={24} className='h-6 w-6' />}
      >
        {buttonText}
      </LinkButton>
    </Modal>
  );
}

export default FormModal;
