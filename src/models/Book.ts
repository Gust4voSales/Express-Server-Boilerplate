import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("books")
export default class Book {
  @PrimaryGeneratedColumn("increment")
  id: number

  @Column()
  title: string

  @Column()
  author: string

  @Column()
  pages: number
}

