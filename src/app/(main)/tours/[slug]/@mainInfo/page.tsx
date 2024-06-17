import { ISingleTourPageProps } from '@/@types';
import { fetchTourMainInfo } from '@/actions/requests';
import TourMainInfo from '@/components/ui/TourMainInfo';

const Page: React.FC<ISingleTourPageProps> = async ({ params }) => {
  const data = await fetchTourMainInfo(params.slug);
  return <TourMainInfo data={data} />;
};

export default Page;
