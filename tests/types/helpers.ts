/**
 * True only when A and B are exactly the same type, `any` doesn't sneak through
 */
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false

/**
 * Fails to compile unless the value's type is exactly `Expected`
 * @example
 * expectType<number>()(add(1, 2))
 */
export const expectType = <Expected>() =>
  <Actual>(_value: Actual & (Equal<Actual, Expected> extends true ? unknown : never)): void => {}
