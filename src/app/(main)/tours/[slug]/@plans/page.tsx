import { ISingleTourPageProps } from '@/@types';
import TourPlans from '@/components/ui/TourPlans';

const Page: React.FC<ISingleTourPageProps> = ({ params }) => {
  return <TourPlans slug={params.slug} />;
};

export default Page;
