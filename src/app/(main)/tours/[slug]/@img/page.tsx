import { ISingleTourPageProps } from '@/@types';
import TourImg from '@/components/ui/TourImg';

const Page: React.FC<ISingleTourPageProps> = ({ params }) => {
  return <TourImg slug={params.slug} />;
};

export default Page;
