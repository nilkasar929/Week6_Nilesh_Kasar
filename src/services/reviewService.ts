import Review from '../models/review';
import User from '../models/user';
import Book from '../models/book';


const getReviews = async (bookId: string) => {
  return await Review.findAll({ where: { bookId }, include: [User, Book] });
};

const addReview = async (userId: string, bookId: string, reviewData: any) => {
  return await Review.create({ ...reviewData, userId, bookId });
};

const deleteReview = async (user: any, reviewId: string) => {
  const review = await Review.findByPk(reviewId);
  if (!review || (user.id !== review.userId && !user.isAdmin)) return null;
  await review.destroy();
  return review;
};

export default {
  getReviews,
  addReview,
  deleteReview
};
