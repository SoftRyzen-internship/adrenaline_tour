import { Metadata } from 'next';

export interface ISingleTourPageProps {
  params: { slug: string };
}

const BASE_APP_URL = process.env.BASE_APP_URL as string;
const BASE_DATA_URL = process.env.BASE_DATA_URL as string;

export async function generateMetadata({
  params,
}: ISingleTourPageProps): Promise<Metadata> {
  const slug = params.slug;
  const query = `
    query getTourBySlug($slug: String!) {
      tour(where: { slug: $slug }) {
        title
        description
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  const response = await fetch(`${BASE_DATA_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch tour data: ${response.statusText}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(`Failed to fetch tour data: ${result.errors[0].message}`);
  }

  const tour = result.data.tour;

  return {
    title: tour.title,
    alternates: {
      canonical: `${BASE_APP_URL}/tours/${slug}`,
    },
  };
}

const SingleTourPage: React.FC<ISingleTourPageProps> = ({ params }) => {
  return (
    <>
      <h1 className='bg-green-400 text-6xl'>
        Single Tour Page - {params.slug}
      </h1>
    </>
  );
};

export default SingleTourPage;
