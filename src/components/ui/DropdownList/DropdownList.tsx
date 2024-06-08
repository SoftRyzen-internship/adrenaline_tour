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

import { DataList, IDropdownListProps } from './DropdownList.types';
// import s from "./DropdownList.module.css"

const DropdownList: React.FC<IDropdownListProps> = ({
  data,
  defaultOptionLabel,
  className,
}) => {
  const allSelectOption: DataList = {
    id: -1,
    attributes: { name: defaultOptionLabel },
  };
  const options = [...data, allSelectOption];
  const [selectedItems, setSelectedItems] = useState<DataList>(allSelectOption);

  return (
    <div
      className={clsx(
        'relative inline-block min-w-[250px] font-unbounded text-xs/[1.3] font-bold text-darkBlue smOnly:w-full md:text-medium/[1.3]',
        className,
      )}
    >
      <Listbox value={selectedItems} onChange={setSelectedItems}>
        <ListboxButton
          className={clsx(
            'group inline-flex w-full items-center justify-between border-2 border-greyBorder px-4 py-3 text-left transition data-[open]:border-orangeBorder data-[open]:text-accentDarkOrange hover:border-orangeBorder hover:text-accentDarkOrange focus:border-orangeBorder focus:text-accentDarkOrange md:py-4',
          )}
        >
          {selectedItems.attributes.name}
          <ArrowIcon
            className='pointer-events-none size-[18px] fill-current transition group-data-[open]:rotate-180'
            aria-hidden='true'
          />
        </ListboxButton>
        <Transition
          enter='transition ease-in duration-200 origin-top'
          enterFrom='opacity-50 scale-y-0'
          enterTo='opacity-100 scale-y-100'
          leave='transition ease-in duration-500 origin-top'
          leaveFrom='opacity-100 scale-y-100'
          leaveTo='opacity-50 scale-y-0'
        >
          <ListboxOptions
            anchor={{ to: 'bottom end', gap: 12 }}
            modal={false}
            as='ul'
            className='w-[var(--button-width)] space-y-1 overflow-y-auto border-2 border-accentDefaultOrange bg-white [--anchor-max-height:280px] focus:outline-none'
          >
            {options.map(item => (
              <ListboxOption
                as='li'
                key={item.id}
                value={item}
                className='group flex cursor-pointer select-none items-center justify-between overflow-y-auto px-3 py-1.5 text-blueDefault transition data-[focus]:text-accentDefaultOrange data-[selected]:text-accentDarkOrange hover:text-accentDefaultOrange'
              >
                <p className='font-unbounded text-xs/[1.3] font-bold transition md:text-medium/[1.3]'>
                  {item.attributes.name}
                </p>
                <CheckIcon className='invisible size-4 stroke-current transition group-data-[selected]:visible' />
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  );
};

export default DropdownList;
