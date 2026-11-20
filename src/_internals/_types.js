/**
 * Shared types used across Kyanite's public signatures, they're re-exported from the package
 * so they can be imported with `import type { Reduced } from 'kyanite'`
 * @module _types
 * @private
 */

/**
 * A value that can be ordered with `<` and `>`
 * @typedef {number | string | boolean | Date} Ord
 */

/**
 * A key value tuple
 * @template K, V
 * @typedef {[K, V]} KeyValuePair
 */

/**
 * A list of keys or indexes to walk through an object
 * @typedef {Array<number | string>} Path
 */

/**
 * An object of functions, applied against the matching keys of another object
 * @typedef {{ [key: string]: ((value: any) => any) | Schema }} Schema
 */

/**
 * A function that takes a single argument
 * @typedef {(a: any) => any} Arity1Fn
 */

/**
 * A value wrapped to signal that a reduce should stop early
 * @template T
 * @typedef {{ '@@transducer/value': T, '@@transducer/reduced': true }} Reduced
 */

/**
 * A predicate function
 * @typedef {(...a: any[]) => boolean} Pred
 */

export {}
