export interface IReview {
  id: string;
  title: string;
  text: string;
  author: string;
  date: string;
}

interface ReviewAttributes {
  reviews: IReview[];
}

interface ReviewData {
  attributes: ReviewAttributes;
}

export interface IReviewResponse {
  review: {
    data: ReviewData;
  };
}
