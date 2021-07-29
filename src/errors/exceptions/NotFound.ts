import GeneralErrorException from "../GeneralError"

export default class NotFoundException extends GeneralErrorException {
  constructor(message: string) {
    super(message)
    this.code = 404
  }
}