export default class GeneralErrorException extends Error {
  protected code: number

  constructor(message: string) {
    super()
    this.message = message
    // It will be overwritten by the exceptions code (e.g: BadRequest code is 404), 
    // otherwise it's a Internal Server Error.
    this.code = 500 
  }

  getCode() {
    return this.code;
  }
}


