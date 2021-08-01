import { Request, Response } from "express";
import BadRequestException from "../errors/exceptions/BadRequest";
import BookService from "../services/BookService";

class BookController {
  async store(req: Request, res: Response) {
    const { title, pages, author } = req.query 

    if (title && author && pages) {
      const book = await BookService.createBook(String(title), String(author), Number(pages))
    
      return res.status(201).json({ book })
    }
      
    throw new BadRequestException("😢 Missing parameters to create a book!")
  }

  async index(req: Request, res: Response) {
    const books = await BookService.getBooksList()

    return res.status(200).json({ books })
  }
}

export default new BookController()