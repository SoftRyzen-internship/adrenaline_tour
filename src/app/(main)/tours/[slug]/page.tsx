// import { Metadata } from 'next';

import Gallery from '@/sections/Gallery';
import Tour from '@/sections/Tour';

// import { Pages } from '@/@types';
// import { getTour } from '@/actions/query';
// import { configuration } from '@/utils';

export interface ISingleTourPageProps {
  params: { slug: string };
}

// export async function generateMetadata({
//   params,
// }: ISingleTourPageProps): Promise<Metadata> {
//   const slug = params.slug;
//   const query = getTour;
//   const variables = {
//     slug: slug,
//   };
//   const response = await fetch(`${configuration.BASE_DATA_URL}graphql`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: query,
//       variables: variables,
//     }),
//     cache: 'no-store',
//   });

//   if (!response.ok) {
//     throw new Error(`Failed to fetch tour data: ${response.statusText}`);
//   }
//   const result = await response.json();
//   const tour = result.data.tour;

//   return {
//     title: tour.title,
//     alternates: {
//       canonical: `${configuration.BASE_APP_URL}${Pages.TOURS}/${slug}`,
//     },
//   };
// }

const SingleTourPage: React.FC<ISingleTourPageProps> = ({ params }) => {
  return (
    <>
      <Tour slug={params.slug} />
      <Gallery />
    </>
  );
};

export default SingleTourPage;
