export interface IReview {
  _id: string;
  userId: {
    name: string;
  };
  bookId: string;
  review: string;
}
