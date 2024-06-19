import { IdForScroll } from '@/@types';
import FeatureRow from '@/components/ui/FeatureRow';
import LinkButton from '@/components/ui/LinkButton';
import Social from '@/components/ui/Social';

import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import { featuresData } from '@/data';

import { IFeaturesTableProps } from './FeaturesTable.types';

const FeaturesTable: React.FunctionComponent<IFeaturesTableProps> = ({
  tourDetails,
}) => {
  const { buttonLabel } = featuresData;
  if (!tourDetails) {
    return;
  }

  return (
    <div className='h-full'>
      <div className='notXL:container xl:sticky xl:top-0 xl:-mt-6 xl:pt-6'>
        <div className='border-grey03 border-2 p-6 md:py-8 xl:max-w-[500px]'>
          <ul className='mb-8 flex flex-col gap-6 xl:mb-12'>
            {tourDetails &&
              Object.entries(tourDetails.details).map(([key, value]) => (
                <li key={key}>
                  <FeatureRow feature={{ icon: key, details: value }} />
                </li>
              ))}
          </ul>
          <div className='items-center md:flex md:gap-8'>
            <LinkButton
              toScroll={true}
              to={IdForScroll.CONTACTS}
              variant='main'
              iconPosition='after'
              icon={
                <ArrowRightDownIcon
                  width={24}
                  height={24}
                  className='h-6 w-6 md:h-8 md:w-8'
                />
              }
              className={'mb-6 w-full md:mb-0 md:w-[294px]'}
            >
              {buttonLabel}
            </LinkButton>
            <Social variant='header' className='justify-center' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTable;
