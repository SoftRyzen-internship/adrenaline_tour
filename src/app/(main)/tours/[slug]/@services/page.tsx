import { ISingleTourPageProps } from '@/@types';
import TourServices from '@/components/ui/TourServices';

const Page: React.FC<ISingleTourPageProps> = ({ params }) => {
  return <TourServices slug={params.slug} />;
};

export default Page;
