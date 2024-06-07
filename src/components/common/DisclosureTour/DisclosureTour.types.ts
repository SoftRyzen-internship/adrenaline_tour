export interface IDisclosureTourProps {
  disclosure: {
    id: number;
    question: string;
    answers: {
      title: string;
      text: string[];
    }[];
  }[];
}
