import { ISingleTourPageProps } from '@/@types';
import { fetchTourServices } from '@/actions/requests';
import TourServices from '@/components/ui/TourServices';

const Page: React.FC<ISingleTourPageProps> = async ({ params }) => {
  const data = await fetchTourServices(params.slug);
  return <TourServices data={data} />;
};

export default Page;
