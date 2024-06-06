export interface DataList {
  id: number;
  attributes: {
    name: string;
  };
}

export interface IDropdownListProps {
  data: DataList[];
  className?: string;
}
