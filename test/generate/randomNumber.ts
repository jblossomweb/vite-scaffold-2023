/**
 * generate a random number for fuzzy testing
 *
 * @function
 * @name randomNumber
 * @param {Number} min - minimum value
 * @param {Number} max - maximum value
 * @return {Number} - generated random number
 */
const randomNumber = (min: number, max: number): number =>
  Math.random() * (max - min) + min

export default randomNumber
