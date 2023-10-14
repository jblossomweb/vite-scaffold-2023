import { faker } from '@faker-js/faker'
import randomInteger from './randomInteger'

/**
 * generate a random person name for fuzzy testing
 *
 * @function
 * @name randomPerson
 * @param {"male" | "female"} sex - optional
 * @return {String} - generated random person name
 */
const randomPerson = (
  sex: 'male' | 'female' = randomInteger(0, 1) ? 'male' : 'female',
): string => faker.person.fullName({ sex })

export default randomPerson
