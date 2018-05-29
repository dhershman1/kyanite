import curry from './curry'

/**
 * @name round
 * @since v2.2.0
 * @category Number
 * @sig Number -> Number -> Number
 * @description Round a number using exponent rounding
 * @param {Number} precision The precision we want the number to be rounded to
 * @param {Number} num The number we are going to round
 * @return {Number} The rounded number to the desired precision
 *
 * @example
 * round(2, 112.336); // => 112.34
 * round(3, 112.3354); // => 112.335
 *
 * // It is curried
 * const rounder = round(3);
 *
 * rounder(122.4456); // => 112.446
 * rounder(122.332); // => 122.332
 */
const round = (precision, num) => Number(`${Math.round(`${num}e${precision}`)}e-${precision}`)

export default curry(round)
