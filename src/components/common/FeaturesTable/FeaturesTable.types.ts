export interface IFeaturesTableProps {
  features: {
    id: number;
    caption: string;
    text: string | null;
    icon: string;
  }[];
}
