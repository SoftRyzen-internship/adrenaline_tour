import { ISingleTourPageProps } from '@/@types';
import fetchTourDetails from '@/actions/requests/fetchTourDetails';
import FeaturesTable from '@/components/common/FeaturesTable';

const Page: React.FC<ISingleTourPageProps> = async ({ params }) => {
  const tourDetails = await fetchTourDetails(params.slug);
  return <FeaturesTable tourDetails={tourDetails} />;
};

export default Page;
