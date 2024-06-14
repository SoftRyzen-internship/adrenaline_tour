'use client';
import ErrorSection from '@/components/ui/ErrorSection';

export interface IErrorPageProps {
  error: Error;
}

const ErrorPage: React.FC<IErrorPageProps> = ({ error }) => {
  console.error('error -', error.message);
  return <ErrorSection isLoadingError />;
};

export default ErrorPage;
