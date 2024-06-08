import { Children, isValidElement } from 'react';

import {
  PortableTextComponents,
  PortableTextBlockComponent,
  PortableTextMarkComponent,
} from '@portabletext/react';

const CustomLink: PortableTextMarkComponent = ({ value, children }) => {
  const target = value?.target;
  const href = value?.href;
  const rel = 'noopener noreferrer nofollow';

  const isWebLink = /^https?:\/\/[^/]+/.test(href ?? '');

  return isWebLink ? (
    <a
      href={href}
      target={target}
      rel={rel}
      className='text-green hover:underline focus:underline'
    >
      {children}
    </a>
  ) : (
    <a href={href} className='text-green hover:underline focus:underline'>
      {children}
    </a>
  );
};

const CustomParagraph: PortableTextBlockComponent = ({ children }) => {
  const hasContent = Children.toArray(children).some(
    child =>
      (typeof child === 'string' && child.trim().length > 0) ||
      (isValidElement(child) && child.type === 'br'),
  );

  if (!hasContent) {
    return null;
  }

  return (
    <p className='text-normal text-bodyDark lg:text-normal_desk m-0 mb-8 last:mb-0'>
      {children}
    </p>
  );
};

export const CustomComponent: PortableTextComponents = {
  marks: {
    link: CustomLink,
  },
  block: {
    normal: CustomParagraph,
    h2: ({ children }) => (
      <h2 className='font-tenor text-green lg:text-h2 mb-4 mt-10 text-base/[1.3] font-normal'>
        {children}
      </h2>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className='m-0 mb-8 list-none p-0'>{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className='before:bg-bodyDark relative my-0 pl-3 before:absolute before:left-[2px] before:top-1/2 before:h-[1px] before:w-1'>
        {children}
      </li>
    ),
  },
};
