import { ISingleTourPageProps } from '@/@types';
import TourRent from '@/components/ui/TourRent';

const Page: React.FC<ISingleTourPageProps> = ({ params }) => {
  return <TourRent slug={params.slug} />;
};

export default Page;
