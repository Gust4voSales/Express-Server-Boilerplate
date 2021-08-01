import { EntityRepository, Repository } from "typeorm"
import Book from '../models/Book'

@EntityRepository(Book) 
export class BookRepository extends Repository<Book> {
  findByTitle(title: string) {
    return this.find({ title })
  }
}