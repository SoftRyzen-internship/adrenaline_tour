export interface IDisclosure {
  id: number;
  label: string;
  sectionId: string;
  items: {
    id: number;
    icon: boolean;
    margin: boolean;
    question: string;
    answers: {
      title: string;
      text: string[];
    }[];
  }[];
}

export interface IDisclosureFaqListProps {
  disclosures: IDisclosure[];
}
