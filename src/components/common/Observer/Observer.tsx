'use client';
import { useState } from 'react';

import { ISelectState } from '@/@types';

import ArrowRight from '/public/icons/arrow-right.svg';
import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';
import CalendarIcon from '/public/icons/date.svg';
import FacebookIcon from '/public/icons/facebook.svg';

import DisclosureFaq from '@/components/common/DisclosureFaq';
import DropdownList from '@/components/common/DropdownList';
import FaqNavMenu from '@/components/common/FaqNavMenu';
import Button from '@/components/ui/Button';
import CustomSelect from '@/components/ui/CustomSelect';
import FeatureRow from '@/components/ui/FeaturesRow';
import IconButton from '@/components/ui/IconButton';
import LinkButton from '@/components/ui/LinkButton';
import { faq, activitiesDataTemporary, countriesDataTemporary } from '@/data';
import { createDataSelectOptions } from '@/utils';

const activitiesData = createDataSelectOptions(
  activitiesDataTemporary.data,
  'Всі активності',
);
const countriesData = createDataSelectOptions(
  countriesDataTemporary.data,
  'Всі країни',
);

const feature = {
  id: 1,
  caption: 'Маршрут',
  text: 'Прага (Чехія) - гора Траунштайн (Австрія) - озеро Траунзее (Австрія) - Прага (Чехія)',
  icon: 'trip',
};

const Observer = () => {
  const { disclosures } = faq;

  const [selectedActivitiesItem, setSelectedActivitiesItem] =
    useState<ISelectState>(activitiesData.at(-1) as ISelectState);

  const [selectedCountryItem, setSelectedCountryItem] = useState<ISelectState>(
    countriesData.at(-1) as ISelectState,
  );

  return (
    <div>
      <h1 className='mt-10'>
        The temporary component is used for the observation of newly created
        components.
      </h1>
      <p className='text-center text-[24px] font-bold'>Дропдаун фільтрів</p>
      <div className='container py-5'>
        <DropdownList>
          <CustomSelect
            data={activitiesData}
            selectedItem={selectedActivitiesItem}
            onChange={setSelectedActivitiesItem}
          />
          <CustomSelect
            data={countriesData}
            selectedItem={selectedCountryItem}
            onChange={setSelectedCountryItem}
          />
        </DropdownList>
      </div>

      <p className='container text-center text-[24px] font-bold'>
        Component LinkButton
      </p>
      <div className='container flex flex-wrap gap-2 py-4'>
        <div>
          <p className='p-1 text-xs'>
            variant-main, iconPosition-after, icon-(Your Icon)
          </p>
          <LinkButton
            href='pageName'
            variant='main'
            iconPosition='after'
            icon={
              <ArrowRightDownIcon width={24} height={24} className='h-6 w-6' />
            }
          >
            Зв’яжіться з нами{' '}
          </LinkButton>
        </div>
        <div>
          <p className='p-1 text-xs'>
            variant - main, iconPosition - before, icon-(Your Icon)
          </p>
          <LinkButton
            href='/'
            variant='main'
            iconPosition='before'
            icon={<CalendarIcon width={24} height={24} className='h-6 w-6' />}
          >
            Зв’яжіться з нами{' '}
          </LinkButton>
        </div>
        <div>
          <p className='p-1 text-xs'>
            variant - secondary, iconPosition - after, icon-(Your Icon)
          </p>
          <LinkButton
            href='/'
            variant='secondary'
            iconPosition='after'
            icon={<ArrowRight width={24} height={24} className='h-6 w-6' />}
          >
            Детальніше{' '}
          </LinkButton>
        </div>
      </div>
      <p className='container text-center text-[24px] font-bold'>
        Component Button
      </p>
      <div className='container flex flex-wrap gap-2 py-4'>
        <div>
          <p className='p-1 text-xs'>
            variant-main, iconPosition-after, icon-(Your Icon)
          </p>
          <Button
            variant='main'
            type='submit'
            iconPosition='after'
            icon={
              <ArrowRightDownIcon width={24} height={24} className='h-6 w-6' />
            }
          >
            Кнопка для форми
          </Button>
        </div>
        <div>
          <p className='p-1 text-xs'>
            variant - secondary, iconPosition - after, icon-(Your Icon)
          </p>
          <Button
            variant='secondary'
            iconPosition='after'
            icon={<ArrowRight width={16} height={16} className='h-4 w-4' />}
          >
            Детальніше{' '}
          </Button>
        </div>
        <div>
          <p className='p-1 text-xs'>variant-readMore-main</p>
          <Button type='button' variant='readMore-main'>
            Читати більше
          </Button>
        </div>
        <div>
          <p className='p-1 text-xs'>variant-readMore-secondary</p>
          <Button variant='readMore-secondary'>Читати далі</Button>
        </div>
      </div>
      <p className='container text-center text-[24px] font-bold'>
        Component IconButton
      </p>
      <div className='container flex flex-wrap gap-2 py-4'>
        <div className='bg-accentGreen px-4 py-4'>
          <p className='p-1 text-xs'>icon as children with own style</p>
          <IconButton ariaLabel='Відкрити Модалку'>
            <FacebookIcon
              width={32}
              height={32}
              className='h-8 w-8 fill-white transition hover:fill-accentDefaultOrange'
            />
          </IconButton>
        </div>
      </div>

      <div className='container'>
        <div className='mb-8 hidden justify-end xl:flex'>
          <FaqNavMenu />
        </div>
        <DisclosureFaq disclosures={disclosures} />
        <div className='container'>
          <p className='mb-2 text-center text-[24px] font-bold'>
            Component FeatureRow
          </p>
          <FeatureRow feature={feature} />
        </div>
      </div>
    </div>
  );
};

export default Observer;
