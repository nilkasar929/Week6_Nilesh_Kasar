import  Book from '../models/book';
import Author from '../models/author';
import Review from '../models/review';
import Rating from '../models/rating';


const getBooks = async () => {
  return await Book.findAll({ include: [Author, Review, Rating] });
};

const getBookById = async (id: string) => {
  return await Book.findByPk(id, { include: [Author, Review, Rating] });
};

const createBook = async (bookData: any) => {
  return await Book.create(bookData);
};

const updateBook = async (id: string, bookData: any) => {
  const book = await Book.findByPk(id);
  if (!book) return null;
  await book.update(bookData);
  return book;
};

const deleteBook = async (id: string) => {
  const book = await Book.findByPk(id);
  if (!book) return null;
  await book.destroy();
  return book;
};

export default {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
