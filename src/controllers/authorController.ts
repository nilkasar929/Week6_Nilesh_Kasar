import { Request, Response } from 'express';
import authorService from '../services/authorService';

export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await authorService.getAuthors();
    res.json(authors);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const author = await authorService.getAuthorById(req.params.id);
    if (!author) return res.status(404).json({ error: 'Author not found' });
    res.json(author);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = await authorService.createAuthor(req.body);
    res.json(author);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const author = await authorService.updateAuthor(req.params.id, req.body);
    if (!author) return res.status(404).json({ error: 'Author not found' });
    res.json(author);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const result = await authorService.deleteAuthor(req.params.id);
    if (!result) return res.status(404).json({ error: 'Author not found' });
    res.json({ message: 'Author deleted' });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};
