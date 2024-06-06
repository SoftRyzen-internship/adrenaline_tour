// 'use client';

import { Description, Field, Label, Select } from '@headlessui/react';
import clsx from 'clsx';

import ArrowIcon from '/public/icons/arrow-scndry.svg';

import { IDropdownListProps } from './DropdownList.types';
// import s from "./DropdownList.module.css"

const DropdownList: React.FC<IDropdownListProps> = ({ data, className }) => {
  return (
    <div className='w-full max-w-md px-4'>
      <Field>
        <Label className='text-sm/6 font-medium text-zinc-900'>
          Project status
        </Label>
        <Description className='text-sm/6 text-zinc-900'>
          This will be visible to clients on the project.
        </Description>

        <div className={clsx('relative', className)}>
          <Select
            className={clsx(
              'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-zinc-900',
              'data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 focus:outline-none',
              '*:text-black',
            )}
            aria-label='Project status'
          >
            {data.map(({ id, attributes }) => (
              <option key={id}>{attributes.name}</option>
            ))}
            <option value='active'>Active</option>
          </Select>
          <ArrowIcon
            className='group pointer-events-none absolute right-2.5 top-2.5 size-4 fill-white/60'
            aria-hidden='true'
          />
        </div>
      </Field>
    </div>
  );
};

export default DropdownList;
