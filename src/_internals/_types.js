// Shared types used across Kyanite's public signatures, they're re-exported from the package
// so they can be imported with `import type { Reduced } from 'kyanite'`

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
 * An object of functions, each one is applied to the value at the same key of another object
 * @typedef {{ [key: string]: (value: any) => any }} Schema
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
 * An object that follows the transducer protocol, the standard shared by transducer libraries.
 * `step` adds one value to the accumulator, `result` finishes the accumulator once the input
 * runs out, and `init` makes a starting accumulator when none is given
 * @typedef {{ '@@transducer/init': () => any, '@@transducer/step': (acc: any, value: any) => any, '@@transducer/result': (acc: any) => any }} Transformer
 */

/**
 * A function that takes a transformer and returns a new one with an extra step built in,
 * like `map(inc)` or `take(3)` when they're used with `transduce`
 * @typedef {(xf: Transformer) => Transformer} Transducer
 */

/**
 * A predicate function
 * @typedef {(...a: any[]) => boolean} Pred
 */

export {}
