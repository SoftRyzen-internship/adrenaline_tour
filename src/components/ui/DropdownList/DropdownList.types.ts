export interface DataList {
  id: number;
  attributes: {
    name: string;
  };
}

export interface IDropdownListProps {
  data: DataList[];
  defaultOptionLabel: string;
  className?: string;
}
