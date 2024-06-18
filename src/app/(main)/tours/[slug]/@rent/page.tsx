import { ISingleTourPageProps } from '@/@types';
import { fetchTourRent } from '@/actions/requests';
import TourRent from '@/components/ui/TourRent';

const Page: React.FC<ISingleTourPageProps> = async ({ params }) => {
  const data = await fetchTourRent(params.slug);
  return <TourRent data={data} />;
};

export default Page;
