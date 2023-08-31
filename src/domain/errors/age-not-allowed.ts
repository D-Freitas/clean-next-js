export class AgeNotAllowed extends Error {
  constructor() {
    super('You must be over 18 years old.')
  }
}
