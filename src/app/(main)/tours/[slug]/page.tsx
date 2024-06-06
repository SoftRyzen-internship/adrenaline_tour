import { Metadata } from 'next';

export interface ISingleTourPageProps {
  params: { id: string };
}

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export async function generateMetadata({
  params,
}: ISingleTourPageProps): Promise<Metadata> {
  const id = params.id;
  const response = await fetch(`${BASE_APP_URL}tours/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch tour data: ${response.statusText}`);
  }

  const tour = await response.json();

  return {
    title: tour.title,
    alternates: {
      canonical: `${BASE_APP_URL}tours/${id}`,
    },
  };
}

const SingleTourPage: React.FC<ISingleTourPageProps> = ({ params }) => {
  return (
    <>
      <h1 className='bg-green-400 text-6xl'>Single Tour Page - {params.id}</h1>
    </>
  );
};

export default SingleTourPage;
