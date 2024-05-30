export interface ISingleTourPageProps {
  params: { id: string };
}

const SingleTourPage: React.FC<ISingleTourPageProps> = ({ params }) => {
  return (
    <>
      <h1 className=' bg-green-400 text-6xl'>Single Tour Page - {params.id}</h1>
    </>
  );
};

export default SingleTourPage;
