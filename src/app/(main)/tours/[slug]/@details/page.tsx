import { ISingleTourPageProps } from '@/@types';
import FeaturesTable from '@/components/common/FeaturesTable';

const Page: React.FC<ISingleTourPageProps> = ({ params }) => {
  return <FeaturesTable slug={params.slug} />;
};

export default Page;
