/**
 * Receives an array on errors and saves a message with all errors separated
 * by a new line character '\n'. Use css "white-space: pre-wrap;" To show The
 * newlines on the html container, or use the errors property if you need
 * the array.
 *
 * @param errors - The list of error messages.
 */
export class ValidationErrors extends Error {
  public errors: string[];

  constructor(errors: string[]) {
    const message = errors.join('\n');
    super(message);
    this.name = 'ValidationErrors';
    this.errors = errors;
  }
}
