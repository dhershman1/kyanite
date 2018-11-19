// Type definitions for Kyanite v0.10.2
// Project: Kyanite
// Definitions by: Dustin Hershman <dustinh17@gmail.com>
declare let K: K.Static

declare namespace K {
  type Omit<T, K extends string> = Pick<T, Exclude<keyof T, K>>;

  type Ord = number | string | boolean | Date;

  interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
  }

  interface Schema {
    [key: string]: ((value: any) => any) | Schema;
  }

  type Arity1Fn = (a: any) => any;

  interface ObjFunc {
    [index: string]: (...a: any[]) => any;
  }

  type Pred = (...a: any[]) => boolean;

  interface Static {
    /**
     * Adds two provided items together
     */
    add(a: number, b: number): number;
    add(a: number): (b: number) => number;

    /**
     * Always returns the first param sent to it, and ignores the 2nd also known as the K combinator
     */
    always<T>(val: T): () => T;

    /**
     * Updates an object by merging a newer item into the old one
     */
    amend<T1, T2>(a: T1, b: T2): T1 & T2;
    amend<T1, T2>(a: T1): (b: T2) => T1 & T2;

    /**
     * Does an `and` comparison of the two values given to it
     */
    and<T extends { and?: ((...a: any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
    and<T extends { and?: ((...a: any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;

    /**
     * Takes in a schema object of functions to apply to a given object of data, validates that any of them pass
     */
    any<T, U>(schema: T, data: U): boolean;
    any<T>(schema: T): <U>(data: U) => boolean;

    /**
     * Takes an array of function to be applied to an array of data, concating the results together.
     * Also known as the S combinator
     */
    ap<T, U>(fns: Array<((a: T) => U)>, list: ReadonlyArray<T>): U[];
    ap<T, U>(fns: Array<((a: T) => U)>): (list: ReadonlyArray<T>) => U[];

    /**
     * Applies a function to a parameter/Argument. Useful for creating a fixed-arity function
     * Also known as the A Combinator
     */
    apply<T, U, TResult>(fn: (arg0: T, ...args: T[]) => TResult, args: ReadonlyArray<U>): TResult;
    apply<T, TResult>(fn: (arg0: T, ...args: T[]) => TResult): <U>(args: ReadonlyArray<U>) => TResult;

    /**
     * Determines which of the given values should be ascended, useful for sort methods
     */
    ascend<T>(a: T, b: T): number;
    ascend<T>(a: T): (b: T) => number;

    /**
     * Can be used with sort to ascend an array based on the function passed in
     */
    ascendBy<T>(fn: (obj: T) => any, a: T, b: T): number;
    ascendBy<T>(fn: (obj: T) => any): (a: T, b: T) => number;

    /**
     * See if a number is between two other provided numbers
     */
    between(min: number, max: number, n: number): boolean;
    between(min: number, max: number): (n: number) => boolean;
    between(min: number): (max: number) => (n: number) => boolean;

    /**
     * Validates the same value when passed into two seperate functions
     */
    both(pred1: Pred, pred2: Pred, data: any): boolean;
    both(pred1: Pred, pred2: Pred): (data: any) => boolean;
    both(pred1: Pred): (pred2: Pred) => (data: any) => boolean;

    /**
     * Takes 3 functions and a value, runs the functions in an if else setup, if the first function passes the second will run, otherwise the thrid will run
     */
    branch<T, R1, R2>(p: (obj: T) => boolean, f: (obj: T) => R1, g: (obj: T) => R2, data: T): R1 | R2;
    branch<T, R1, R2>(p: (obj: T) => boolean, f: (obj: T) => R1, g: (obj: T) => R2): (data: T) => R1 | R2;
    branch<T, R1, R2>(p: (obj: T) => boolean, f: (obj: T) => R1): (g: (obj: T) => R2) => (data: T) => R1 | R2;
    branch<T, R1, R2>(p: (obj: T) => boolean): (f: (obj: T) => R1) => (g: (obj: T) => R2) => (data: T) => R1 | R2;

    /**
     * Takes a string and capitalizes the first letter
     */
    capitalize(str: string): string;

    /**
     * Restricts a number between two other provided numbers
     */
    clamp(min: number, max: number, n: number): number;
    clamp(min: number, max: number): (n: number) => number;
    clamp(min: number): (max: number) => (n: number) => number;

    /**
     * Takes a function and returns the opposite boolean value of what the predicate returns
     */
    complement<T>(fn: (data: T) => boolean, a: T): boolean;
    complement<T>(fn: (data: T) => boolean): (a: T) => boolean;

    /**
     * Applies a value through two functions from right to left
     * Also known as the B combinator
     */
    compose<T, R1, R2>(fn: (data: R1) => R2, gn: (data: T) => R1, data: T): R2;
    compose<T, R1, R2>(fn: (data: R1) => R2, gn: (data: T) => R1): (data: T) => R2;
    compose<T, R1, R2>(fn: (data: R1) => R2): (gn: (data: T) => R1) => (data: T) => R2;

    /**
     * Applies async functions against a value from right to left and returns a Promise
     */
    composeP<T, R1, R2>(fn: (data: R1) => Promise<R2>, gn: (data: T) => Promise<R1>, data: T): Promise<R2>;
    composeP<T, R1, R2>(fn: (data: R1) => Promise<R2>, gn: (data: T) => Promise<R1>): (data: T) => Promise<R2>;
    composeP<T, R1, R2>(fn: (data: R1) => Promise<R2>): (gn: (data: T) => Promise<R1>) => (data: T) => Promise<R2>;

    /**
     * Takes a list and concats the values into a new List
     */
    concat<T>(val: T, list: ReadonlyArray<T>): T[];
    concat<T>(val: T): (list: ReadonlyArray<T>) => T[];
    concat(val: string, list: string): string;
    concat(val: string): (list: string) => string;

    /**
     * Takes an array and concats the values into a new array after applying a map function
     */
    concatMap<T, T1>(fn: (data: T) => T1, arr: T[]): T1[];
    concatMap<T, T1>(fn: (data: T) => T1): (arr: T[]) => T1[];

    /**
     * Counts the elements of a list according to how many match each value of a key generated by the supplied function
     */
    countBy<T>(fn: (a: T) => string | number, arr: ReadonlyArray<T>): { [index: string]: number };
    countBy<T>(fn: (a: T) => string | number): (arr: ReadonlyArray<T>) => { [index: string]: number };

    /**
     * Creates a curried (or partial) function
     */
    curry(fn: (...a: any[]) => any): (...a: any[]) => any;

    /**
     * Acts like curry but this expects you to tell it how many arguments to expect.
     */
    curryN(n: number, fn: (...args: any[]) => any): (...a: any[]) => any;

    /**
     * Takes and strictly compares two provided items, also able to handle cyclical data structures
     */
    deepEq<T>(a: T, b: T): boolean;
    deepEq<T>(a: T): (b: T) => boolean;

    /**
     * Returns the value if it isn't `null`, `NaN`, or `undefined`. Otherwise will give back the provided default
     */
    defaultTo<T, U>(a: T, b: U | null | undefined): T | U;
    defaultTo<T>(a: T): <U>(b: U | null | undefined) => T | U;

    /**
     * Determines which of the two passed in values should be descended, useful for sort methods
     */
    descend<T>(a: T, b: T): number;
    descend<T>(a: T): (b: T) => number;

    /**
     * Can be used with sort to descend an array bsed on the function given
     */
    descendBy<T>(fn: (obj: T) => any, a: T, b: T): number;
    descendBy<T>(fn: (obj: T) => any): (a: T, b: T) => number;

    /**
     * Returns a new array of values that are not contained within both given arrays
     * Note: Order of arrays does not matter here
     */
    difference<T>(arrs: ReadonlyArray<T>): T[];

    /**
     * Divides the provided numbers
     */
    divide(a: number, b: number): number;
    divide(a: number): (b: number) => number;

    /**
     * Runs a provided function against all tof the values that are within a provided object
     */
    draft<T, R1>(fn: (val: T) => R1, data: { [key: string]: T }): { [key: string]: R1 };
    draft<T, R1>(fn: (val: T) => R1): (data: { [key: string]: T }) => { [key: string]: R1 };

    /**
     * Starts at a desired index and pulls the values from that point until the end
     */
    drop<T>(n: number, list: ReadonlyArray<T>): T[];
    drop<T>(n: number): (list: ReadonlyArray<T>) => T[];

    /**
     * Runs through an array and drops values so long as the function used returns true once it returns false the iteration will stop
     */
    dropWhile<T>(fn: (a: T) => boolean, arr: ReadonlyArray<T>): T[];
    dropWhile<T>(fn: (a: T) => boolean): (arr: ReadonlyArray<T>) => T[];

    /**
     * Validates that the value passes either of the given functions
     */
    either(fn: Pred, gn: Pred, a: any): boolean;
    either(fn: Pred, gn: Pred): (a: any) => boolean;
    either(fn: Pred): (gn: Pred) => (a: any) => boolean;

    /**
     * Wrap the provided function in a try catch which if the function errors will give back an undefined
     */
    encase<T>(fn: (data: T) => any, a: T): any | undefined;
    encase<T>(fn: (data: T) => any): (a: T) => any | undefined;

    /**
     * Checks to see if the provided value is at the end of a given list
     */
    endsWith(a: string, list: string): boolean;
    endsWith(a: string): (list: string) => boolean;
    endsWith<T>(a: ReadonlyArray<T>, list: ReadonlyArray<T>): boolean;
    endsWith<T>(a: ReadonlyArray<T>): (list: ReadonlyArray<T>) => boolean;

    /**
     * Ensures that the value passied in is an array, if not it will make it an array or pass back an empty array for null/undefined
     */
    ensureArray(a: any): any[]

    /**
     * Performs a strict equality check on two values
     */
    eq<T>(a: T, b: T): boolean;
    eq<T>(a: T): (b: T) => boolean;

    /**
     * Performs a strict equality check on two values after applying a function to both
     */
    eqBy<T, U = T>(fn: (a: T) => U, a: T, b: T): boolean;
    eqBy<T, U = T>(fn: (a: T) => U, a: T): (b: T) => boolean;
    eqBy<T, U = T>(fn: (a: T) => U): (a: T) => (b: T) => boolean;

    /**
     * Iterates through a provided list verifying that every value evaluates to a truthy value when applying a provided function
     */
    every<T>(fn: (a: T) => boolean, x: T[]): boolean;
    every<T>(fn: (a: T) => boolean): (x: T[]) => boolean;

    /**
     * Takes a number and builds an array of factors for that number
     */
    factors(n: number): number[];

    /**
     * Filter through a filterable array of data using a provided function
     */
    filter<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T[];
    filter<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T[];

    /**
     * Find an item based on the applied function provided
     */
    find<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T | undefined;
    find<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T | undefined;

    /**
     * Iterates through an array of values until it finds the index of one that passes the provided function
     */
    findIndex<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): number;
    findIndex<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => number;

    /**
     * Grabs the first index of a list
     */
    first<T>(x: string | ReadonlyArray<T>): string | T;

    /**
     * Takes a function and two parameters and flips them when calling the provided function
     * Also known as the C combinator
     */
    flip<T, U, TResult>(fn: (arg1: U, arg0: T) => TResult, a: T, b: U): TResult;
    flip<T, U, TResult>(fn: (arg1: U, arg0: T) => TResult, a: T): (b: U) => TResult;
    flip<T, U, TResult>(fn: (arg1: U, arg0: T) => TResult): (a: T) => (b: U) => TResult;

    /**
     * Takes a needle and searches the haystack for the matching string
     */
    fuzzySearch(needle: string, haystack: string): boolean;
    fuzzySearch(needle: string): (haystack: string) => boolean;

    /**
     * Determines the greatest common denominator of the numbers passed in
     */
    gcd(a: number, b: number): number;
    gcd(a: number): (b: number) => number;

    /**
     * Groups values of an array based on the function provided
     */
    groupBy<T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [index: string]: T[] }
    groupBy<T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [index: string]: T[] }

    /**
     * Checks if a value is greater than the other
     */
    gt(a: number, b: number): boolean;
    gt(a: number): (b: number) => boolean;

    /**
     * Checks if a value is greater than or equal to the other
     */
    gte(a: number, b: number): boolean;
    gte(a: number): (b: number) => boolean;

    /**
     * Determines if the object provided has a property
     */
    has<T>(prop: string, obj: T): boolean;
    has(s: string): <T>(obj: T) => boolean;

    /**
     * Allows you to get the length or "height" of a provided object
     */
    height<T>(obj: T): number;

    /**
     * A function that returns the value passed to it
     * Also known as the I combinator
     */
    identity<T>(a: T): T;

    /**
     * Checks to see if the provided list contains at least 1 of the provided value within it
     */
    includes(value: string, list: string): boolean;
    includes(value: string): (list: string) => boolean;
    includes<T>(a: T, list: ReadonlyArray<T>): boolean;
    includes<T>(a: T): (list: ReadonlyArray<T>) => boolean;

    /**
     * Insert an item into a certain index of an array
     */
    insert<T>(i: number, d: T, arr: ReadonlyArray<T>): T[];
    insert<T>(i: number, d: T): (arr: ReadonlyArray<T>) => T[];
    insert<T>(i: number): (d: T) => (arr: ReadonlyArray<T>) => T[];
    insert(i: number): <T>(d: T, arr: ReadonlyArray<T>) => T[];

    /**
     * Returns an array containing elements present in both arrays
     */
    intersection<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
    intersection<T>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];

    /**
     * Determines if the entered value is empty or not
     */
    isEmpty(x: any): boolean;

    /**
     * Checks if the provided number is even or not
     */
    isEven(n: number): boolean;

    /**
     * Checks if the value provided is null or undefined
     */
    isNil(x: any): boolean;

    /**
     * Checks if the provided number is odd or not
     */
    isOdd(x: number): boolean;

    /**
     * Determines if the number passed in is a prime number or not
     */
    isPrime(x: number): boolean;

    /**
     * Joins together an array of strings with whatever string is passed in
     */
    join(str: string, list: ReadonlyArray<string>): string;
    join(str: string): (list: ReadonlyArray<string>) => string;

    /**
     * Applies the provided function and turns them into a single function you can use on a value
     */
    juxt<T, U>(fns: Array<(...args: T[]) => U>): (...args: T[]) => U[];

    /**
     * Grabs the last index of a list
     */
    last<T>(x: string | ReadonlyArray<T>): string | T;

    /**
     * Find the least common multiple of the provided numbers
     */
    lcm(a: number, b: number): number;

    /**
     * Obtains the length of the passed array
     */
    length(a: ReadonlyArray<any>): number;

    /**
     * Checks if a value is less than the other
     */
    lt(a: number, b: number): boolean;
    lt(a: number): (b: number) => boolean;

    /**
     * Checks if a value is less than or equal to another
     */
    lte(a: number, b: number): boolean;
    lte(a: number): (b: number) => boolean;

    /**
     * Takes a function and applies it to all of the values within the provided array
     */
    map<T, U>(fn: (x: T) => U, list: ReadonlyArray<T>): U[];
    map<T, U>(fn: (x: T) => U): (list: ReadonlyArray<T>) => U[];

    /**
     * Goes through an array of values and grabs the max value of the array
     */
    max<T extends Ord>(list: ReadonlyArray<T>): T;

    /**
     * Finds the maximum from an array of data by applying a function to each value
     */
    maxBy<T>(fn: (a: T) => Ord, a: ReadonlyArray<T>): T;
    maxBy<T>(fn: (a: T) => Ord): (a: ReadonlyArray<T>) => T;

    /**
     * Gets the average from a given array of numbers
     */
    mean(x: ReadonlyArray<number>): number;

    /**
     * Goes through an array of values and grabs the min value of the array
     */
    min<T extends Ord>(list: ReadonlyArray<T>): T;

    /**
     * Finds the minimum from an array of data by applying a function to each value
     */
    minBy<T>(fn: (a: T) => Ord, a: ReadonlyArray<T>): T;
    minBy<T>(fn: (a: T) => Ord): (a: ReadonlyArray<T>) => T;

    /**
     * Multiplies the provided numbers
     */
    multiply(a: number, b: number): number;
    multiply(a: number): (b: number) => number;

    /**
     * Negates the number passed in
     */
    negate(n: number): number;

    /**
     * Returns a boolean of not whatever the value given is
     */
    not(x: any): boolean;

    /**
     * Returns the nth element of a given array
     */
    nth<T>(o: number, list: ReadonlyArray<T>): T | undefined;
    nth(o: number): <T>(list: ReadonlyArray<T>) => T | undefined;

    /**
     * Create a new object with certain keys omitted
     */
    omit<T, E extends string>(keys: ReadonlyArray<E>, obj: T): Omit<T, E>;
    omit<E extends string>(keys: ReadonlyArray<E>): <T>(obj: T) => Omit<T, E>;

    /**
     * Applies the second function to the values passed in, and then runs the first function against those new values,
     * Also known as the P combinator
     */
    on<T, T1, TResult>(fn: (x: T1) => TResult, gn: (x: T) => T1, a: T, b: T): TResult;
    on<T, T1, TResult>(fn: (x: T1) => TResult, gn: (x: T) => T1, a: T): (b: T) => TResult;
    on<T, T1, TResult>(fn: (x: T1) => TResult, gn: (x: T) => T1): (a: T) => (b: T) => TResult;
    on<T, T1, TResult>(fn: (x: T1) => TResult): (gn: (x: T) => T1) => (a: T) => (b: T) => TResult;
    on<T, T1, TResult>(fn: (x: T1) => TResult, gn: (x: T) => T1): (a: T, b: T) => TResult;
    on<T, T1, TResult>(fn: (x: T1) => TResult): (gn: (x: T) => T1, a: T, b: T) => TResult;

    /**
     * Runs an "or" comparison against two values passed in
     */
    or<T, U>(a: T, b: U): T | U;
    or<T>(a: T): <U>(b: U) => T | U;

    /**
     * Applies a function to a value within an object
     */
    over<T>(key: string, fn: Arity1Fn, acc: T): T;
    over<T>(key: string, fn: Arity1Fn): (acc: T) => T;
    over<T>(key: string): (fn: Arity1Fn) => (acc: T) => T;
    over<T>(key: string): (fn: Arity1Fn, acc: T) => T;

    /**
     * Takes a predicate function and an array of data and returns the pair
     * One contains the data which passes the predicate function, the other is the values that did not
     */
    partition<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): [T[], T[]];
    partition<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => [T[], T[]];

    /**
     * Safely crawl through an object to get a value
     */
    path<T>(keys: ReadonlyArray<string>, obj: { [key: string]: T }): T;
    path<T>(keys: ReadonlyArray<string>): (obj: { [key: string]: T }) => T;

    /**
     * --Placeholder for pathOR function--
     */

    /**
     * Applies a sequence of transformations over a value
     */
    pipe<T, U>(fns: ReadonlyArray<(a: T) => U>, init: any): U;
    pipe<T, U>(fns: ReadonlyArray<(a: T) => U>): (init: any) => U;

    /**
     * Runs a pipe of promise based functions against a provided value
     */
    pipeP<T, U>(fns: ReadonlyArray<(a: T) => Promise<U>>, init: any): Promise<U>;
    pipeP<T, U>(fns: ReadonlyArray<(a: T) => Promise<U>>): (init: any) => Promise<U>;

    /**
     * Uses a schema of functions to apply against a provided object of data
     */
    plan(schema: Schema, obj: { [key: string]: any }): { [key: string]: any };
    plan(schema: Schema): (obj: { [key: string]: any }) => { [key: string]: any };

    /**
     * Take a base number and brings it to the value of base^exponent
     */
    pow(a: number, b: number): number;
    pow(a: number): (b: number) => number;

    /**
     * Returns a new list with the provided value at the front of the given list
     */
    prepend<T>(x: T, list: ReadonlyArray<T>): T[];
    prepend<T>(x: T): (list: ReadonlyArray<T>) => T[];

    /**
     * Brings back the indicated property of an object if it exists
     */
    prop<P extends keyof T, T>(p: P, obj: T): T[P];
    prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T;
    prop<P extends string, T>(p: P): (obj: Record<P, T>) => T;

    /**
     * Pulls a list of values from an object and returns them as an array
     */
    props<P extends string, T>(keys: ReadonlyArray<P>, obj: Record<P, T>): T[];
    props<P extends string>(keys: ReadonlyArray<P>): <T>(obj: Record<P, T>) => T[];
    props<P extends string, T>(keys: ReadonlyArray<P>): (obj: Record<P, T>) => T[];

    /**
     * Creates an array of numbers ranging from the starting number (inclusive) to the ending number (exclusive)
     */
    range(from: number, tp: number): number[];
    range(from: number): (to: number) => number[];

    /**
     * Accepts an array and runs a reduce with the passed in values.
     * The reducer function accepts the params flipped as compared
     * To the vanilla reduce counterpart.
     */
    reduce<T, TResult>(fn: (a: T, acc: TResult) => TResult, init: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T, TResult>(fn: (a: T, acc: TResult) => TResult, init: TResult): (list: ReadonlyArray<T>) => TResult;
    reduce<T, TResult>(fn: (a: T, acc: TResult) => TResult): (init: TResult) => (list: ReadonlyArray<T>) => TResult;

    /**
     * Accepts an array and runs a reduce from right to left with the passed in values.
     * The reducer function accepts the params flipped as compared
     * To the vanilla reduceRight counterpart.
     */
    reduceRight<T, TResult>(fn: (a: T, acc: TResult) => TResult, init: TResult, list: ReadonlyArray<T>): TResult;
    reduceRight<T, TResult>(fn: (a: T, acc: TResult) => TResult, init: TResult): (list: ReadonlyArray<T>) => TResult;
    reduceRight<T, TResult>(fn: (a: T, acc: TResult) => TResult): (init: TResult) => (list: ReadonlyArray<T>) => TResult;

    /**
     * Iterate through a list and reject any value that does not pass the provided function
     */
    reject<T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T[];
    reject<T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T[];

    /**
     * Takes two numbers and gets the remainder from the division
     */
    rem(a: number, b: number): number;
    rem(a: number): (b: number) => number;

    /**
     * Remove an item from a certin index of an array
     */
    remove<T>(i: number, x: ReadonlyArray<T>): T[];
    remove(i: number): <T>(x: ReadonlyArray<T>) => T[];

    /**
     * Replaces a substring or regex match in a string with a provided value
     */
    replace(a: RegExp | string, b: string, str: string): string;
    replace(a: RegExp | string, b: string): (str: string) => string;
    replace(a: RegExp | string): (b: string) => (str: string) => string;

    /**
     * Returns a new list with the same elements as the original list, just in the reverse order.
     */
    reverse<T>(list: ReadonlyArray<T>): T[];
    /**
     * Returns a new string with the characters in reverse order.
     */
    reverse(str: string): string;

    /**
     * Round a number using exponent rounding to a desired precision
     */
    round(precision: number, num: number): number;
    round(precision: number): (num: number) => number;

    /**
     * Works like an array filter but for objects
     * Accepts a function and an object, it then runs the function against each value in the object
     */
    sift<T>(fn: (a: T) => boolean, obj: { [key: string]: T }): { [key: string]: T };
    sift<T>(fn: (a: T) => boolean): (obj: { [key: string]: T }) => { [key: string]: T };

    /**
     * Slices out items from a list
     */
    slice<T>(a: number, b: number, list: ReadonlyArray<T>): T[];
    slice<T>(a: number, b: number): (list: ReadonlyArray<T>) => T[];
    slice<T>(a: number): (b: number) => (list: ReadonlyArray<T>) => T[];
    slice(a: number, b: number, list: string): string;
    slice(a: number, b: number): (list: string) => string;
    slice(a: number): (b: number) => (list: string) => string;

    /**
     * Iterates through a provided list verifying that at least one of the values passes the provided function
     */
    some<T>(fn: (a: T) => boolean, x: ReadonlyArray<T>): boolean;
    some<T>(fn: (a: T) => boolean): (x: ReadonlyArray<T>) => boolean;

    /**
     * Uses a comparison function to sort an array
     */
    sort<T>(fn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
    sort<T>(fn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];

    /**
     * Sorts through an array of values using the provided function on each value
     */
    sortBy<T>(fn: (a: T) => any, list: ReadonlyArray<T>): T[];
    sortBy<T>(fn: (a: T) => any): (list: ReadonlyArray<T>) => T[];

    /**
     * Sorts an array based on the functions passed to it. Uses excess functions as tie breakers
     */
    sortWith<T>(fns: ReadonlyArray<(a: T, b: T) => number>, arr: ReadonlyArray<T>): T[];
    sortWith<T>(fns: ReadonlyArray<(a: T, b: T) => number>): (arr: ReadonlyArray<T>) => T[];

    /**
     * Takes a string and splits it into an array based on the character passed in
     */
    split(char: string | RegExp, str: string): string[];
    split(char: string | RegExp): (str: string) => string[];

    /**
     * Subtracts the provided numbers
     */
    subtract(a: number, b: number): number;
    subtract(a: number): (b: number) => number;

    /**
     * Takes the values from an array up until the point specified
     */
    take<T>(i: number, list: ReadonlyArray<T>): T[];
    take<T>(i: number): (list: ReadonlyArray<T>) => T[];

    /**
     * Takes values from an array so long as the predicate function continues to return true
     */
    takeWhile<T>(fn: (x: T) => boolean, list: ReadonlyArray<T>): T[];
    takeWhile<T>(fn: (x: T) => boolean): (list: ReadonlyArray<T>) => T[];

    /**
     * Transform a provided string to lowercase letters
     */
    toLower(a: string): string;

    /**
     * Transform a provided string to uppercase letters
     */
    toUpper(a: string): string;

    /**
     * Accepts a string value and trims the white space on either side
     */
    trim(str: string): string;

    /**
     * Finds the type of the provided value
     */
    type(x: any): string;

    /**
     * Creates a union between two arrays, removing duplicates from each
     */
    union<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
    union<T>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];

    /**
     * Removes the duplicate values from a provided array
     */
    uniq<T>(list: ReadonlyArray<T>): T[];

    /**
     * Creates an array of unique values after applying a function to each value
     */
    uniqBy<T, U>(fn: (a: T) => U, list: ReadonlyArray<T>): T[];
    uniqBy<T, U>(fn: (a: T) => U): (list: ReadonlyArray<T>) => T[];

    /**
     * Takes a value and if it fails the function check then it will apply the provided function, otherwise it will return the value
     */
    unless<T, U>(fn: (a: T) => boolean, act: (a: T) => U, x: T): U;
    unless<T, U>(fn: (a: T) => boolean, act: (a: T) => U): (x: T) => U;
    unless<T, U>(fn: (a: T) => boolean): (act: (a: T) => U) => (x: T) => U;

    /**
     * Add an item to an array within a certain index of the array
     */
    update<T>(index: number, val: any, list: ReadonlyArray<T>): T[];
    update<T>(index: number, val: any): (list: ReadonlyArray<T>) => T[];
    update<T>(index: number): (val: any) => (list: ReadonlyArray<T>) => T[];

    /**
     * Takes a value and if it passes the given function check it will apply the action function, otherwise it will return the value
     */
    when<T, U>(fn: (a: T) => boolean, act: (a: T) => U, x: T): U;
    when<T, U>(fn: (a: T) => boolean, act: (a: T) => U): (x: T) => U;
    when<T, U>(fn: (a: T) => boolean): (act: (a: T) => U) => (x: T) => U;

    /**
     * Takes a schema of function to apply to an object, and makes sure all of them pass
     */
    whole<T, U>(schema: T, data: U): boolean;
    whole<T>(schema: T): <U>(data: U) => boolean;

    /**
     * Takes two arrays and combines them into a key value pair object
     */
    zip<T, V>(x: ReadonlyArray<T>, y: ReadonlyArray<V>): Array<KeyValuePair<T, V>>;
    zip<T>(x: ReadonlyArray<T>): <V>(y: ReadonlyArray<V>) => Array<KeyValuePair<T, V>>;
  }
}

export = K;
export as namespace K;
