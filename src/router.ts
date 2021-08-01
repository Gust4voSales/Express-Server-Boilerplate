import express  from "express"
import BookController from "./controllers/BookController"

const router = express.Router()

router.post("/books", BookController.store)

router.get('/books', BookController.index)

export default router