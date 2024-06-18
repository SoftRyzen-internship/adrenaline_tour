import { ISingleTourPageProps } from '@/@types';
import { fetchTourGallery } from '@/actions/requests';
import TourGallery from '@/components/ui/TourGallery';

const Page: React.FC<ISingleTourPageProps> = async ({ params }) => {
  const data = (await fetchTourGallery(params.slug)) ?? [];
  return <TourGallery data={data} />;
};

export default Page;
