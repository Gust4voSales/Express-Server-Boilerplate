import GeneralErrorException from "../GeneralError"

export default class BadRequestException extends GeneralErrorException {
  constructor(message: string) {
    super(message)
    this.code = 400
  }
}