export interface IPageConditionalRenderProps<T> {
  pages: string[];
  component: React.ElementType;
  trueProps?: Partial<T>;
  alternativeProps?: Partial<T>;
  trueContent?: React.ReactNode;
  alternativeContent?: React.ReactNode;
}
