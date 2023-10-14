import { faker } from '@faker-js/faker'

/**
 * generate a random email for fuzzy testing
 *
 * @function
 * @name randomEmail
 * @return {String} - generated random email
 */
const randomEmail = (): string => faker.internet.email()

export default randomEmail
