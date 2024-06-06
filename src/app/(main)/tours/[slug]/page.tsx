import { Metadata } from 'next';

export interface ISingleTourPageProps {
  params: { slug: string };
}

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export async function generateMetadata({
  params,
}: ISingleTourPageProps): Promise<Metadata> {
  const slug = params.slug;
  const response = await fetch(
    `https://adrenaline-tour-admin.onrender.com/tours/${slug}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch tour data: ${response.statusText}`);
  }

  const tour = await response.json();

  return {
    title: tour.title,
    alternates: {
      canonical: `${BASE_APP_URL}tours/${slug}`,
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
