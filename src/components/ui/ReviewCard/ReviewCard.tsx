'use client';

import { useState, useRef, useEffect } from 'react';

import clsx from 'clsx';

import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import ReviewModalContent from '@/components/ui/ReviewModalContent';
import { reviews } from '@/data';
import { formatDate } from '@/utils';

import { IReviewCardProps } from './ReviewCard.types';

const ReviewCard: React.FC<IReviewCardProps> = ({
  title,
  description,
  name,
  date,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      if (element.scrollHeight > element.clientHeight) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
    }
  }, []);

  const rotationClass = index % 2 === 0 ? 'md:rotate-[-3deg]' : 'md:rotate-3';

  return (
    <>
      <div className='md:h-[497px] md:pt-[45px] xl:h-[504px]'>
        <div
          className={clsx(
            'mx-auto flex h-[396px] w-[298px] flex-col justify-between bg-white px-4 pb-6 pt-12 transition md:h-[441px] md:w-[431px] md:px-8 md:pt-16 xl:ml-auto xl:mr-[97px] xl:h-[446px] xl:w-[500px] xl:px-10 xl:pb-8',
            rotationClass,
          )}
        >
          <div>
            <h3 className='mb-4 text-center font-inter text-light font-bold text-dark md:text-large'>
              {title}
            </h3>
            <p
              ref={descriptionRef}
              className='line-clamp-[6] text-center font-inter text-light text-dark md:text-medium xl:leading-[1.50]'
            >
              {description}
            </p>
          </div>
          <div>
            {isOverflowing && (
              <div className='mb-7 flex justify-center'>
                <Button
                  type='button'
                  onClick={() => setIsModalOpen(true)}
                  variant='readMore-main'
                >
                  {reviews.btn}
                </Button>
              </div>
            )}
            <h4 className='mb-[6px] text-center font-inter text-[12px] font-bold leading-[1.30] text-dark md:mb-2 md:text-[14px]'>
              {name}
            </h4>
            <p className='text-center font-inter text-[12px] font-medium leading-[1.30] text-darkGreen'>
              {formatDate(date)}
            </p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        variant='simple'
        close={() => setIsModalOpen(false)}
      >
        <ReviewModalContent
          title={title}
          description={description}
          name={name}
          date={date}
        />
      </Modal>
    </>
  );
};

export default ReviewCard;
