import { getCustomRepository } from "typeorm"
import { BookRepository } from "../repositories/BookRepository"

class BookService {
  async createBook(title: string, author: string, pages: number) {
    const repository = getCustomRepository(BookRepository)

    const book = repository.create({ title, author, pages })
    
    return await repository.save(book)
  }

  async getBooksList() {
    const repository = getCustomRepository(BookRepository)

    return await repository.find()
  }
}

export default new BookService()