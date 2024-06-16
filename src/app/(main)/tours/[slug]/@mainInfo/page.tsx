import { ISingleTourPageProps } from '@/@types';
import TourMainInfo from '@/components/ui/TourMainInfo';

const Page: React.FC<ISingleTourPageProps> = ({ params }) => {
  return <TourMainInfo slug={params.slug} />;
};

export default Page;
