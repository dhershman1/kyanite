/** @private @type {() => boolean} */
const F = () => false

/**
 * @name F
 * @function
 * @since v1.2.0
 * @category Function
 * @sig () -> Boolean
 * @description
 * A Function that will always return false, any given parameters are ignored
 * @return {Boolean} A boolean of false
 * @example
 * import { F } from 'kyanite'
 *
 * F() // => false
 */
export default /** @type {{
  (): boolean
}} */ (F)
