import { Request, Response } from 'express';
import bookService from '../services/bookService';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getBooks();
    res.json(books);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await bookService.createBook(req.body);
    res.json(book);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await bookService.updateBook(req.params.id, req.body);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const result = await bookService.deleteBook(req.params.id);
    if (!result) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
