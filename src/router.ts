import express  from "express"
import BadRequestException from "./errors/exceptions/BadRequest"
import NotFoundException from "./errors/exceptions/NotFound"

const router = express.Router()

router.get("/", (request, response) => {
  return response.status(200).json({ message: "Default GET Request 🚀"})
})

router.get("/error-route-example", (request, response) => {
  const { foo } = request.query

  // foo query parameter not found passed. Throw BadRequest exception
  if (!foo) {
    throw new BadRequestException("Missing required field: foo")
    // throw new NotFoundException("foo not found")
  }

  return response.status(200).json({ message: "This is an error handling example route."})
})

export default router