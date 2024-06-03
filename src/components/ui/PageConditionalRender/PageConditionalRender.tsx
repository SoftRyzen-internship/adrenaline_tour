'use client';

import { usePathname } from 'next/navigation';

import { IPageConditionalRenderProps } from './PageConditionalRender.types';

const PageConditionalRender: <T>(
  props: IPageConditionalRenderProps<T>,
) => React.ReactElement<IPageConditionalRenderProps<T>> | null = ({
  pages,
  trueProps,
  alternativeProps,
  component: Component,
  trueContent,
  alternativeContent,
  className,
}) => {
  const pathname = usePathname();
  const pagesWithSlash = pages.map(page => {
    if (page === '/') {
      return page;
    }
    return '/' + page;
  });
  const shouldRender = pagesWithSlash.includes(pathname);

  const props = shouldRender ? trueProps : alternativeProps;
  const content = shouldRender ? trueContent : alternativeContent;

  return (
    <Component {...props} className={className}>
      {content && content}
    </Component>
  );
};

export default PageConditionalRender;
