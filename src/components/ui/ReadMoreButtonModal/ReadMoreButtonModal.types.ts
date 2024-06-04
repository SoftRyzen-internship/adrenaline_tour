export interface IReadMoreButtonModalProps {
  item: {
    id: number;
    icon: boolean;
    margin: boolean;
    question: string;
    answers: {
      title: string;
      text: string[];
    }[];
  };
}
