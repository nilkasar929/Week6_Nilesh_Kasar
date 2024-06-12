import Author from '../models/author';
import Book from '../models/book';

const getAuthors = async () => {
  return await Author.findAll({ include: [Book] });
};

const getAuthorById = async (id: string) => {
  return await Author.findByPk(id, { include: [Book] });
};

const createAuthor = async (authorData: any) => {
  return await Author.create(authorData);
};

const updateAuthor = async (id: string, authorData: any) => {
  const author = await Author.findByPk(id);
  if (!author) return null;
  await author.update(authorData);
  return author;
};

const deleteAuthor = async (id: string) => {
  const author = await Author.findByPk(id);
  if (!author) return null;
  await author.destroy();
  return author;
};

export default {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
};
