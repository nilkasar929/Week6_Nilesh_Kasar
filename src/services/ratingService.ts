import Rating from '../models/rating';
import User from '../models/user'
import Book from '../models/book';

const getRatings = async (bookId: string) => {
  return await Rating.findAll({ where: { bookId }, include: [User, Book] });
};

const addRating = async (userId: string, bookId: string, ratingData: any) => {
  return await Rating.create({ ...ratingData, userId, bookId });
};

export default {
  getRatings,
  addRating
};
