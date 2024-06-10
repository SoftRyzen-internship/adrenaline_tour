'use client';
import ErrorComponent from '@/components/ui/ErrorComponent';

export interface IErrorPageProps {
  error: Error;
}

const ErrorPage: React.FC<IErrorPageProps> = ({ error }) => {
  console.error('error -', error.message);
  return <ErrorComponent />;
};

export default ErrorPage;
