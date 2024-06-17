import { ISingleTourPageProps } from '@/@types';
import { fetchTourImg } from '@/actions/requests';
import TourImg from '@/components/ui/TourImg';

const Page: React.FC<ISingleTourPageProps> = async ({ params }) => {
  const data = await fetchTourImg(params.slug);
  return <TourImg data={data} />;
};

export default Page;
