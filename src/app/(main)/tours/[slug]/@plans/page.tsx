import { ISingleTourPageProps } from '@/@types';
import { fetchTourPlans } from '@/actions/requests';
import TourPlans from '@/components/ui/TourPlans';

const Page: React.FC<ISingleTourPageProps> = async ({ params }) => {
  const data = await fetchTourPlans(params.slug);
  return <TourPlans data={data} />;
};

export default Page;
