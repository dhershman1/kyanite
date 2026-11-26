// Type tests for public types that were corrected to match what the functions return at runtime
import {
  adjust, any, applyN, chunk, difference, findIndex, fold, has, isNil, keys, match, multiples,
  omitBy, path, pickBy, pluck, plan, prop, unless, when, whole, zip
} from '../../src/index.js'
import { expectType } from './helpers.js'

// multiples returns the list of multiples, not a number
expectType<number[]>()(multiples(100, 5))
expectType<number[]>()(multiples(100)(5))

// zip builds one object from a list of keys and a list of values
expectType<{ [key: string]: number }>()(zip(['a', 'b'], [1, 2]))
expectType<{ [key: string]: number }>()(zip(['a', 'b'])([1, 2]))

// match can come back empty handed, and takes strings as well as regexes
expectType<RegExpMatchArray | null>()(match(/a/, 'abc'))
expectType<RegExpMatchArray | null>()(match('a', 'abc'))

// when and unless hand back the original value when they don't act
const toStr = (x: number) => String(x)
const big = (x: number) => x > 10
expectType<number | string>()(when(big, toStr, 5))
expectType<number | string>()(unless(big, toStr, 5))
expectType<number | string>()(when(big)(toStr)(5))

// keys gives back strings, like Object.keys, and accepts anything
expectType<string[]>()(keys({ a: 1, b: 2 }))
expectType<string[]>()(keys(null))

// fold reduces a list into a value of the same type
expectType<number>()(fold((a: number, acc: number) => a + acc, [1, 2, 3]))

// chunk splits a list into lists of its own values
expectType<number[][]>()(chunk(2, [1, 2, 3, 4]))
expectType<string[][]>()(chunk(2)(['a', 'b', 'c']))

// adjust (and so update) accept readonly lists
const frozen: readonly number[] = [1, 2, 3]
expectType<number[]>()(adjust(1, (x: number) => x + 1, frozen))

// findIndex works on anything array like, strings included
expectType<number>()(findIndex((c: string) => c === 'b', 'abc'))

// isNil narrows
const maybe = 'a' as string | null | undefined
if (!isNil(maybe)) expectType<string>()(maybe)

// path takes any object, it already handles null and undefined
path(['a', 'b'], null)
path(['a', 'b'], { a: { b: 1 } })

// difference takes a list of lists
expectType<number[]>()(difference([[1, 2, 3], [3, 4]]))

// pluck gives back the plucked values, not the objects
expectType<number[]>()(pluck('age', [{ age: 1 }, { age: 2 }]))
expectType<string[]>()(pluck('name')([{ name: 'a' }]))

// prop accepts numeric keys, missing keys, and nullish objects
const user = { name: 'Abby', age: 7 }
expectType<string>()(prop('name', user))
expectType<number>()(prop('age')(user))
expectType<undefined>()(prop('hair', user))
expectType<string | undefined>()(prop('name', user as typeof user | null))
expectType<number>()(prop(0, [1, 2, 3]))

// omitBy and pickBy can drop any entry, so any key may be missing
expectType<Partial<{ a: number, b: number }>>()(omitBy((v: number) => v > 1, { a: 1, b: 2 }))
expectType<Partial<{ a: number, b: number }>>()(pickBy((v: number) => v > 1)({ a: 1, b: 2 }))

// any, whole, and plan take a flat object of functions
const schema = { a: (x: number) => x > 1, b: (x: number) => x < 1 }
expectType<boolean>()(any(schema, { a: 2, b: 2 }))
expectType<boolean>()(whole(schema)({ a: 2, b: 0 }))
plan({ a: (x: number) => x * 2 }, { a: 1, b: 2 })

// applyN passes the list as the function's arguments
expectType<number>()(applyN((a: number, b: number) => a + b, [1, 2]))
// @ts-expect-error the list has to match the function's arguments
applyN((a: number, b: number) => a + b, ['a', 'b'])

// has checks array values and Map/Set entries, not only string keys
expectType<boolean>()(has(2, [1, 2, 3]))
expectType<boolean>()(has('a', new Map([['a', 1]])))
expectType<boolean>()(has('a')({ a: 1 }))
