export interface ISingleTourPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

import { Metadata } from 'next';

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export async function generateMetadata({
  params,
}: ISingleTourPageProps): Promise<Metadata> {
  const id = params.id;
  const tour = await fetch(`${BASE_APP_URL}tours/${id}`).then(res =>
    res.json(),
  );

  return {
    title: tour.title,
    alternates: {
      canonical: params.id,
    },
  };
}

const SingleTourPage: React.FC<ISingleTourPageProps> = ({ params }) => {
  return (
    <>
      <h1 className=' bg-green-400 text-6xl'>Single Tour Page - {params.id}</h1>
    </>
  );
};

export default SingleTourPage;
