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

import { ICustomSelectProps } from './CustomSelect.types';

const CustomSelect: React.FC<ICustomSelectProps> = ({
  data,
  selectedItem,
  onChange,
  className,
}) => {
  const pickedValue = selectedItem.attributes.name;

  return (
    <div
      className={clsx(
        'relative inline-block min-w-[250px] font-unbounded text-xs/[1.3] font-bold text-darkBlue smOnly:w-full md:text-medium/[1.3]',
        className,
      )}
    >
      <Listbox defaultValue={selectedItem} onChange={onChange}>
        <ListboxButton
          className={clsx(
            'group inline-flex w-full items-center justify-between border-2 border-greyBorder px-4 py-3 text-left transition data-[open]:border-orangeBorder data-[open]:text-accentDarkOrange hover:border-orangeBorder hover:text-accentDarkOrange focus:border-orangeBorder focus:text-accentDarkOrange md:py-4',
          )}
        >
          {pickedValue}
          <ArrowIcon
            className='pointer-events-none size-[18px] fill-current transition group-data-[open]:rotate-180'
            aria-hidden='true'
          />
        </ListboxButton>
        <Transition
          enter='transition ease-in duration-500 origin-top'
          enterFrom='opacity-50 scale-y-0'
          enterTo='opacity-100 scale-y-100'
          leave='transition ease-in duration-500 origin-top'
          leaveFrom='opacity-100 scale-y-100'
          leaveTo='opacity-50 scale-y-0'
        >
          <ListboxOptions
            modal={false}
            static={true}
            as='ul'
            className='scroll-bar-custom absolute z-50 mt-3 max-h-[280px] w-[var(--button-width)] space-y-1 border-2 border-accentDefaultOrange bg-white focus:outline-none'
          >
            {data.map(item => (
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

export default CustomSelect;
