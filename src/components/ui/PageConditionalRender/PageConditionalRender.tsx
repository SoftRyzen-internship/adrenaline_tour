'use client';

import { usePathname } from 'next/navigation';

import { IPageConditionalRenderProps } from './PageConditionalRender.types';

const PageConditionalRender: <T>(
  props: IPageConditionalRenderProps<T>,
) => React.ReactElement<IPageConditionalRenderProps<T>> = ({
  pages,
  trueProps,
  alternativeProps,
  component: Component,
  trueContent,
  alternativeContent,
}) => {
  const pathname = usePathname();
  const shouldRender = pages.includes(pathname);

  const props = shouldRender ? trueProps : alternativeProps;
  const content = shouldRender ? trueContent : alternativeContent;

  return <Component {...props}>{content && content}</Component>;
};

export default PageConditionalRender;
