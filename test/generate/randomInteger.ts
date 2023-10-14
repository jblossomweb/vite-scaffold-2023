import randomNumber from './randomNumber'

/**
 * generate a random integer for fuzzy testing
 *
 * @function
 * @name randomInteger
 * @param {Number} min - minimum value
 * @param {Number} max - maximum value
 * @return {Number} - generated random integer
 */
const randomInteger = (min: number, max: number): number =>
  Math.floor(randomNumber(min, max))

export default randomInteger
