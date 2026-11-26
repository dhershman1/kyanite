// Type tests for every function curried over 3 or 4 arguments, checked with `npm run test:types`
// Each one is called every way it can be at runtime, mostly using the examples from its docs
import {
  add, adjust, ap, ascend, ascendBy, sortWith, between, both, branch, clamp, compose, composeP, converge, descendBy,
  either, eqBy, flip, inc, insert, length, on, over, pathOr, pathSatisfies, propEq, propOr,
  propSatisfies, reduce, reduceRight, reduced, replace, slice, sum, toUpper, unless, update,
  when, within, divide, transduce, into, map, filter, take,
  reject, takeWhile, drop, dropWhile, uniq, uniqBy, concatMap, pluck
} from '../../src/index.js'
import type { Transformer, Transducer } from '../../src/index.js'
import { expectType } from './helpers.js'

// adjust
expectType<number[]>()(adjust(1, inc, [0, 1, 2, 3]))
expectType<string[]>()(adjust(1, toUpper, ['a', 'b', 'c']))
expectType<string[]>()(adjust(1, toUpper)(['a', 'b', 'c']))
expectType<string[]>()(adjust(1)(toUpper, ['a', 'b', 'c']))
expectType<string[]>()(adjust(1)(toUpper)(['a', 'b', 'c']))
// @ts-expect-error the function has to take what the list holds
adjust(1, toUpper, [1, 2])

// insert
expectType<number[]>()(insert(2, 9, [1, 2, 3, 4]))
expectType<number[]>()(insert(2, 9)([1, 2, 3, 4]))
expectType<number[]>()(insert(2)(9, [1, 2, 3, 4]))
expectType<number[]>()(insert(2)(9)([1, 2, 3, 4]))

// update
expectType<number[]>()(update(1, 10, [1, 2, 3]))
expectType<number[]>()(update(2, 10)([1, 2, 3]))
expectType<number[]>()(update(2)(10, [1, 2, 3]))
expectType<number[]>()(update(2)(10)([1, 2, 3]))

// reduce
const addUp = (n: number, acc: number) => acc + n
expectType<number>()(reduce(addUp, 0, [1, 2, 3, 4, 5]))
expectType<number>()(reduce(addUp, 0)([1, 2, 3, 4, 5]))
expectType<number>()(reduce(addUp)(0, [1, 2, 3, 4, 5]))
expectType<number>()(reduce(addUp)(0)([1, 2, 3, 4, 5]))
expectType<number[]>()(reduce((val: number, acc: number[]) => acc.concat(val * 2), [], [1, 2, 3, 4]))
expectType<number>()(reduce((n: number, acc: number) => n > 2 ? reduced(acc) : acc + n, 0, [1, 2, 3]))

// reduceRight
const keepNumbers = (n: string | number, acc: number[]) => {
  if (typeof n === 'number') acc.push(n)
  return acc
}
const mixed = ['', 1, 2, '0', 3]
expectType<number[]>()(reduceRight(keepNumbers, [], mixed))
expectType<number[]>()(reduceRight(keepNumbers, [])(mixed))
expectType<number[]>()(reduceRight(keepNumbers)([], mixed))
expectType<number[]>()(reduceRight(keepNumbers)([])(mixed))

// ap
const state = { a: { b: 2 } }
expectType<{ a: { b: number } }>()(ap((s: typeof state) => (doubleB: number) => ({ ...s, a: { b: doubleB } }), (s: typeof state) => s.a.b * 2, state))
const plus = (x: number) => (y: number) => x + y
const dbl = (z: number) => z * 2
expectType<number>()(ap(plus, dbl, 2))
expectType<number>()(ap(plus, dbl)(2))
expectType<number>()(ap(plus)(dbl, 2))
expectType<number>()(ap(plus)(dbl)(2))

// ascendBy and descendBy
const byName = (x: { name: string }) => x.name
const people = [{ name: 'bob' }, { name: 'amanda' }]
expectType<number>()(ascendBy(byName, { name: 'bob' }, { name: 'amanda' }))
expectType<number>()(ascendBy(byName, { name: 'bob' })({ name: 'amanda' }))
expectType<number>()(ascendBy(byName)({ name: 'bob' }, { name: 'amanda' }))
expectType<number>()(ascendBy(byName)({ name: 'bob' })({ name: 'amanda' }))
people.sort(ascendBy(byName))
expectType<number>()(descendBy(byName, { name: 'bob' }, { name: 'amanda' }))
expectType<number>()(descendBy(byName, { name: 'bob' })({ name: 'amanda' }))
expectType<number>()(descendBy(byName)({ name: 'bob' }, { name: 'amanda' }))
expectType<number>()(descendBy(byName)({ name: 'bob' })({ name: 'amanda' }))
people.sort(descendBy(byName))

// both and either
const over10 = (x: number) => x > 10
const under20 = (x: number) => x < 20
expectType<boolean>()(both(over10, under20, 15))
expectType<boolean>()(both(over10, under20)(15))
expectType<boolean>()(both(over10)(under20, 15))
expectType<boolean>()(both(over10)(under20)(15))
expectType<boolean>()(either(over10, under20, 21))
expectType<boolean>()(either(over10, under20)(21))
expectType<boolean>()(either(over10)(under20, 21))
expectType<boolean>()(either(over10)(under20)(21))

// compose
const addOne = (x: number) => x + 1
expectType<number>()(compose(Math.sqrt, addOne, 99))
expectType<number>()(compose(Math.sqrt, addOne)(99))
expectType<number>()(compose(Math.sqrt)(addOne, 99))
expectType<number>()(compose(Math.sqrt)(addOne)(99))
expectType<string>()(compose((n: number) => String(n), (s: string) => s.length, 'abc'))

// composeP
const foo = (a: string) => Promise.resolve(a + '123')
const bar = (a: string) => Promise.resolve(a + '555')
expectType<Promise<string>>()(composeP(bar, foo, '100'))
expectType<Promise<string>>()(composeP(bar, foo)('100'))
expectType<Promise<string>>()(composeP(bar)(foo, '100'))
expectType<Promise<string>>()(composeP(bar)(foo)('100'))

// converge
const nums = [1, 2, 3, 4, 5, 6, 7]
expectType<number>()(converge(divide, [sum, length], nums))
expectType<number>()(converge(divide, [sum, length])(nums))
expectType<number>()(converge(divide)([sum, length], nums))
expectType<number>()(converge(divide)([sum, length])(nums))

// branch
const small = (x: number) => x < 10
const up = (x: number) => x + 1
const down = (x: number) => String(x - 1)
expectType<number | string>()(branch(small, up, down, 0))
expectType<number | string>()(branch(small, up, down)(0))
expectType<number | string>()(branch(small, up)(down, 0))
expectType<number | string>()(branch(small, up)(down)(0))
expectType<number | string>()(branch(small)(up, down, 0))
expectType<number | string>()(branch(small)(up, down)(0))
expectType<number | string>()(branch(small)(up)(down, 0))
expectType<number | string>()(branch(small)(up)(down)(0))

// eqBy
expectType<boolean>()(eqBy(Math.abs, 5, -5))
// Known limitation: a literal passed in a partial call becomes the type for the rest of the call
// @ts-expect-error T is inferred as the literal 5, so -5 doesn't fit
eqBy(Math.abs, 5)(-5)
expectType<boolean>()(eqBy(Math.abs, 5 as number)(-5))
expectType<boolean>()(eqBy(Math.abs)(5, -5))
expectType<boolean>()(eqBy(Math.abs)(5)(-5))
expectType<boolean>()(eqBy((x: string) => x.length, 'ab', 'abc'))

// flip
const gtFn = (a: number, b: number) => b > a
expectType<boolean>()(flip(gtFn, 2, 1))
expectType<boolean>()(flip(gtFn, 2)(1))
expectType<boolean>()(flip(gtFn)(2, 1))
expectType<boolean>()(flip(gtFn)(2)(1))

// on
const same = (x: number, y: number) => x === y
const len = (x: string) => x.length
expectType<boolean>()(on(same, len, 'you', 'are'))
// @ts-expect-error same literal limitation as eqBy, T is inferred as 'you'
on(same, len, 'you')('are')
expectType<boolean>()(on(same, len, 'you' as string)('are'))
expectType<boolean>()(on(same, len)('you', 'are'))
expectType<boolean>()(on(same, len)('you')('are'))
expectType<boolean>()(on(same)(len, 'you', 'are'))
// @ts-expect-error same literal limitation as eqBy, T is inferred as 'you'
on(same)(len, 'you')('are')
expectType<boolean>()(on(same)(len, 'you' as string)('are'))
expectType<boolean>()(on(same)(len)('you', 'are'))
expectType<boolean>()(on(same)(len)('you')('are'))

// unless and when
const over2 = (x: number) => x > 2
const double = (x: number) => x * 2
expectType<number>()(unless(over2, double, 5))
expectType<number>()(unless(over2, double)(5))
expectType<number>()(unless(over2)(double, 5))
expectType<number>()(unless(over2)(double)(5))
expectType<number>()(when(over2, double, 5))
expectType<number>()(when(over2, double)(5))
expectType<number>()(when(over2)(double, 5))
expectType<number>()(when(over2)(double)(5))

// slice
expectType<number[]>()(slice(1, 3, [1, 2, 3, 4, 5]))
expectType<number[]>()(slice(1, 3)([1, 2, 3, 4, 5]))
expectType<number[]>()(slice(1)(3, [1, 2, 3, 4, 5]))
expectType<number[]>()(slice(1)(3)([1, 2, 3, 4, 5]))
expectType<string>()(slice(0, 4, 'kyanite'))
expectType<string>()(slice(1, 3)('kyanite'))

// between, clamp, within
expectType<boolean>()(between(1, 3, 2))
expectType<boolean>()(between(1, 10)(9))
expectType<boolean>()(between(1)(10, 9))
expectType<boolean>()(between(1)(10)(9))
expectType<number>()(clamp(1, 900, 23))
expectType<number>()(clamp(1, 900)(23))
expectType<number>()(clamp(1)(900, 23))
expectType<number>()(clamp(1)(900)(23))
expectType<boolean>()(within(1, 3, 2))
expectType<boolean>()(within(1, 10)(4))
expectType<boolean>()(within(1)(10, 4))
expectType<boolean>()(within(1)(10)(4))

// over
const counts = { a: 1, b: 1, c: 3 }
const bump = (x: number) => x + 1
expectType<{ a: number, b: number, c: number }>()(over('b', bump, counts))
expectType<{ a: number, b: number, c: number }>()(over('b', bump)(counts))
expectType<{ a: number, b: number, c: number }>()(over('b')(bump, counts))
expectType<{ a: number, b: number, c: number }>()(over('b')(bump)(counts))

// pathOr
const deep = { a: { b: 1 } }
pathOr('N/A', ['a', 'b'], deep)
pathOr('N/A', ['a', 'b'])(deep)
pathOr('N/A')(['a', 'b'], deep)
pathOr('N/A')(['a', 'b'])(deep)
expectType<number>()(pathOr<number>(0, ['a', 'b'], deep))

// pathSatisfies
const positive = (y: number) => y > 0
expectType<boolean>()(pathSatisfies(positive, ['x', 'y'], { x: { y: 2 } }))
expectType<boolean>()(pathSatisfies(positive, ['x', 'y'])({ x: { y: 2 } }))
expectType<boolean>()(pathSatisfies(positive)(['x', 'y'], { x: { y: 2 } }))
expectType<boolean>()(pathSatisfies(positive)(['x', 'y'])({ x: { y: 2 } }))

// propSatisfies
expectType<boolean>()(propSatisfies(positive, 'y', { x: 1, y: 4 }))
expectType<boolean>()(propSatisfies(positive, 'b', { a: 3 }))
expectType<boolean>()(propSatisfies(positive, 'y')({ x: 1, y: 4 }))
expectType<boolean>()(propSatisfies(positive)('y', { x: 1, y: 4 }))
expectType<boolean>()(propSatisfies(positive)('y')({ x: 1, y: 4 }))

// propEq
const abby = { name: 'Abby', age: 7, hair: 'blond' }
const george = { name: 'george', age: 9 }
expectType<boolean>()(propEq('hair', 'brown', abby))
expectType<boolean>()(propEq('hair', 'brown', george))
expectType<boolean>()(propEq('hair', 'brown')(abby))
expectType<boolean>()(propEq('hair')('brown', abby))
expectType<boolean>()(propEq('hair')('brown')(abby))
const kids = [abby, george]
kids.filter(propEq('hair', 'blond'))

// propOr
expectType<string | number>()(propOr('N/A', 'foo', { bar: 1, foo: 2 }))
propOr('N/A', 'foo', { bar: 1 })
propOr('N/A', 'foo')({ foo: 1 })
propOr('N/A')('bar', { bar: 1 })
propOr('N/A')('bar', { foo: 1 })
propOr('N/A')('foo')({ baz: 1 })

// replace
expectType<string>()(replace('foo', 'bar', 'foofoo'))
expectType<string>()(replace(/foo/g, 'bar', 'foofoo'))
expectType<string>()(replace('foo', 'bar')('foofoo'))
expectType<string>()(replace('foo')('baz', 'foofoo'))
expectType<string>()(replace('foo')('bar')('foofoo'))

// Curried functions passed as callbacks are inferred from their full form
expectType<number>()(reduce(add, 0, [1, 2, 3]))
expectType<number>()(on(ascend, len, 'aa', 'b'))
expectType<string[]>()(sortWith([ascendBy(len)], ['aa', 'b']))

// The helper itself catches `any` leaking through
declare const leaked: any
// @ts-expect-error any is not exactly number
expectType<number>()(leaked)

// transduce
const isEven = (n: number) => n % 2 === 0
const total = (n: number, acc: number) => acc + n
const xfs = [map((n: number) => n + 1), filter(isEven), take(3)]
expectType<number>()(transduce(xfs, total, 0, [1, 2, 3, 4]))
expectType<number>()(transduce(xfs, total, 0)([1, 2, 3, 4]))
expectType<number>()(transduce(xfs, total)(0, [1, 2, 3, 4]))
expectType<number>()(transduce(xfs, total)(0)([1, 2, 3, 4]))
expectType<number>()(transduce(xfs)(total, 0, [1, 2, 3, 4]))
expectType<number>()(transduce(xfs)(total, 0)([1, 2, 3, 4]))
expectType<number>()(transduce(xfs)(total)(0, [1, 2, 3, 4]))
expectType<number>()(transduce(xfs)(total)(0)([1, 2, 3, 4]))
expectType<number[]>()(transduce(map((n: number) => n * 2), (n: number, acc: number[]) => acc.concat(n), [], new Set([1, 2])))
expectType<number>()(transduce([take(2)], (n: number, acc: number) => acc > 1 ? reduced(acc) : acc + n, 0, [1, 2, 3]))
const collect: Transformer = {
  '@@transducer/init': () => [],
  '@@transducer/step': (acc: number[], x: number) => [...acc, x],
  '@@transducer/result': (acc: number[]) => acc.join('-')
}
transduce([take(2)], collect, [], [1, 2, 3])
const protocolDouble: Transducer = xf => ({ ...xf, '@@transducer/step': (acc, x) => xf['@@transducer/step'](acc, x * 2) })
expectType<number>()(transduce([protocolDouble, take(1)], total, 0, [1, 2]))
// @ts-expect-error the accumulator has to match what the reducer returns
transduce(xfs, total, '', [1, 2, 3])

// into
expectType<any[]>()(into([], xfs, [1, 2, 3, 4]))
expectType<number[]>()(into<number>([], xfs, [1, 2, 3, 4]))
expectType<number[]>()(into<number>([], xfs)([1, 2, 3, 4]))
expectType<number[]>()(into<number>([])(xfs, [1, 2, 3, 4]))
expectType<number[]>()(into<number>([])(xfs)([1, 2, 3, 4]))
expectType<string>()(into('', [map((c: string) => c.toUpperCase())], 'abc'))
expectType<string>()(into('', [take(2)])('abc'))
expectType<string>()(into('')([take(2)], 'abc'))
expectType<string>()(into('')([take(2)])('abc'))
expectType<{ [key: string]: string }>()(into<string>({}, [map((n: number) => [n, String(n)])], [1, 2]))
expectType<{ [key: string]: any }>()(into({}, [map((n: number) => [n, n])])([1, 2]))
// @ts-expect-error into only collects into arrays, strings, and objects
into(5, xfs, [1, 2, 3])

// map, filter, and take still work on lists the same way
expectType<number[]>()(map((n: number) => n + 1)([1, 2]))
expectType<number[]>()(filter(isEven)([1, 2]))
expectType<number[] | string>()(take<number>(1)([1, 2]))
expectType<number[]>()(compose(map((n: number) => n + 1), filter(isEven))([1, 2]))
// and as transducers
expectType<Transformer>()(map((n: number) => n + 1)(collect))

// The rest of the list functions that work as transducers
expectType<Transformer>()(reject(isEven)(collect))
expectType<Transformer>()(takeWhile((n: number) => n < 3)(collect))
expectType<Transformer>()(drop(1)(collect))
expectType<Transformer>()(dropWhile((n: number) => n < 3)(collect))
expectType<Transformer>()(uniq(collect))
expectType<Transformer>()(uniqBy((s: string) => s.length)(collect))
expectType<Transformer>()(concatMap((n: number) => [n, n])(collect))
expectType<Transformer>()(pluck('age')(collect))
expectType<number>()(transduce([
  reject(isEven), takeWhile((n: number) => n < 9), drop(1), dropWhile((n: number) => n < 2),
  uniq, uniqBy((n: number) => n), concatMap((n: number) => [n, n]), pluck('length')
], total, 0, [1, 2, 3]))

// and their list forms type the same as before
expectType<number[]>()(reject(isEven)([1, 2]))
expectType<number[]>()(uniq([1, 2, 1]))
expectType<string[]>()(uniqBy((s: string) => s.length)(['a', 'bb']))
expectType<number[]>()(concatMap((n: number) => [n, n])([1, 2]))
expectType<number[]>()(pluck('age')([{ age: 19 }, { age: 26 }]))
expectType<number[] | string>()(drop<number>(1)([1, 2]))
