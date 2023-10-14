/**
 * generate a random string for fuzzy testing
 *
 * @function
 * @name randomString
 * @param {Number} length - length of string
 * @return {String} - generated random string
 */
const randomString = (length: number): string =>
  Array(length)
    .fill(0)
    .map(() => Math.random().toString(36).charAt(2))
    .join('')

export default randomString
