'use client';

import { useState } from 'react';

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import clsx from 'clsx';

import ArrowIcon from '/public/icons/arrow-scndry.svg';
import CheckIcon from '/public/icons/check-mark.svg';

import { IDropdownListProps } from './DropdownList.types';
// import s from "./DropdownList.module.css"

const DropdownList: React.FC<IDropdownListProps> = ({ data, className }) => {
  const [selectedItems, setSelectedItems] = useState(data[0]);

  return (
    <div
      className={clsx(
        'inline-block min-w-[250px] font-unbounded text-xs/[1.3] font-bold text-darkBlue smOnly:w-full md:text-medium/[1.3]',
        className,
      )}
    >
      <Listbox value={selectedItems} onChange={setSelectedItems}>
        <ListboxButton
          className={clsx(
            'inline-flex w-full items-center justify-between border-2 border-greyBorder px-4 py-3 text-left md:py-4',
            // 'data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 focus:outline-none',
          )}
        >
          {selectedItems.attributes.name}
          <ArrowIcon
            className='group pointer-events-none size-[18px]'
            aria-hidden='true'
          />
        </ListboxButton>
        <Transition
          leave='transition ease-in duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <ListboxOptions
            anchor='bottom'
            className='w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none'
          >
            {data.map(item => (
              <ListboxOption
                key={item.id}
                value={item}
                className='group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10'
              >
                <CheckIcon className='invisible size-4 group-data-[selected]:visible' />
                <div className=''>{item.attributes.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
};

export default DropdownList;
// className='border-2 border-emerald-200 p-5 smOnly:space-y-3 md:space-x-4 xl:space-x-3'
