// Type definitions for Kyanite v1.0.2
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

  interface Reduced<T> {
    '@@transducer/value': T;
    '@@transducer/reduced': true;
  }

  type Pred = (...a: any[]) => boolean;

  interface Static {
    /**
     * Adds two provided items together
     */
    add(a: number, b: number): number;
    add(a: number): (b: number) => number;

    /**
     * Creates a new list iteration function from an existing one by adding two new parameters to its callback function: the current index, and the entire list. This will only work for functions in which the iteration callback function is the first parameter, and where the list is the last parameter. (This latter might be unimportant if the list parameter is not used.)
     */
    addIndex(fn: Function): Function

    /**
     * Always returns the first param sent to it, and ignores the 2nd also known as the K combinator
     */
    always<T = any>(val: T): () => T;

    /**
     * Updates an object by merging a newer item into the old one
     */
    amend(a: object, b: object): object;
    amend(a: object): (b: object) => object;

    /**
     * Does an `and` comparison of the two values given to it
     */
    and<T extends { and?: ((...a: any[]) => any); } | number | boolean | string | null>(fn1: T, val2: any): boolean;
    and<T extends { and?: ((...a: any[]) => any); } | number | boolean | string | null>(fn1: T): (val2: any) => boolean;

    /**
     * Takes in a schema object of functions to apply to a given object of data, validates that any of them pass
     */
    any<T = any, U = any>(schema: T, data: U): boolean;
    any<T = any>(schema: T): <U = any>(data: U) => boolean;

    /**
     * Takes an array of function to be applied to an array of data, concating the results together.
     * Also known as the S combinator
     */
    ap<T = any, U = any>(fns: Array<((a: T) => U)>, list: ReadonlyArray<T>): U[];
    ap<T = any, U = any>(fns: Array<((a: T) => U)>): (list: ReadonlyArray<T>) => U[];

    /**
     * Applies a function to a parameter/Argument. Useful for creating a fixed-arity function
     * Also known as the A Combinator
     */
    applyN<T = any, U = any, TResult = any>(fn: (arg0: T, ...args: T[]) => TResult, args: ReadonlyArray<U>): TResult;
    applyN<T = any, TResult = any>(fn: (arg0: T, ...args: T[]) => TResult): <U = any>(args: ReadonlyArray<U>) => TResult;

    /**
     * Applies a function to a parameter/Argument. Useful for creating a fixed-arity function
     * Also known as the A Combinator
     */
    apply<T= any, TResult = any>(fn: (arg0: T) => TResult, args: T): TResult;
    apply<T= any, TResult = any>(fn: (arg0: T) => TResult): (args: T) => TResult;

    /**
     * Determines which of the given values should be ascended, useful for sort methods
     */
    ascend<T = any>(a: T, b: T): number;
    ascend<T = any>(a: T): (b: T) => number;

    /**
     * Can be used with sort to ascend an array based on the function passed in
     */
    ascendBy<T = any>(fn: (obj: T) => any, a: T, b: T): number;
    ascendBy<T = any>(fn: (obj: T) => any): (a: T, b: T) => number;

    /**
     * See if a number is between two other provided numbers (inclusive)
     */
    between(min: number | Date, max: number | Date, n: number | Date): boolean;
    between(min: number | Date, max: number | Date): (n: number | Date) => boolean;
    between(min: number | Date): (max: number | Date) => (n: number | Date) => boolean;

    /**
     * Validates the same value when passed into two seperate functions
     */
    both(pred1: Pred, pred2: Pred, data: any): boolean;
    both(pred1: Pred, pred2: Pred): (data: any) => boolean;
    both(pred1: Pred): (pred2: Pred) => (data: any) => boolean;

    /**
     * Takes 3 functions and a value, runs the functions in an if else setup, if the first function passes the second will run, otherwise the thrid will run
     */
    branch<T= any, R1 = any, R2 = any>(p: (obj: T) => boolean, f: (obj: T) => R1, g: (obj: T) => R2, data: T): R1 | R2;
    branch<T= any, R1 = any, R2 = any>(p: (obj: T) => boolean, f: (obj: T) => R1, g: (obj: T) => R2): (data: T) => R1 | R2;
    branch<T= any, R1 = any, R2 = any>(p: (obj: T) => boolean, f: (obj: T) => R1): (g: (obj: T) => R2) => (data: T) => R1 | R2;
    branch<T= any, R1 = any, R2 = any>(p: (obj: T) => boolean): (f: (obj: T) => R1) => (g: (obj: T) => R2) => (data: T) => R1 | R2;

    /**
     * Takes a string and capitalizes the first letter
     */
    capitalize(str: string): string;

    /**
     * Takes an array of data and chunks it into smaller arrays based on the size param passed in
     */
    chunk<T = any, U = any>(size: number, data: ReadonlyArray<T>): ReadonlyArray<ReadonlyArray<U>>;
    chunk(size: number): <T = any, U = any>(data: ReadonlyArray<T>) => ReadonlyArray<ReadonlyArray<U>>;

    /**
     * Restricts a number between two other provided numbers
     */
    clamp(min: number, max: number, n: number): number;
    clamp(min: number, max: number): (n: number) => number;
    clamp(min: number): (max: number) => (n: number) => number;

    /**
     * Takes a function and returns the opposite boolean value of what the predicate returns
     */
    complement<T = any>(fn: (data: T) => boolean, a: T): boolean;
    complement<T = any>(fn: (data: T) => boolean): (a: T) => boolean;

    /**
     * Applies a value through two functions from right to left
     * Also known as the B combinator
     */
    compose<T= any, R1 = any, R2 = any>(fn: (data: R1) => R2, gn: (data: T) => R1, data: T): R2;
    compose<T= any, R1 = any, R2 = any>(fn: (data: R1) => R2, gn: (data: T) => R1): (data: T) => R2;
    compose<T= any, R1 = any, R2 = any>(fn: (data: R1) => R2): (gn: (data: T) => R1) => (data: T) => R2;

    /**
     * Applies async functions against a value from right to left and returns a Promise
     */
    composeP<T= any, R1 = any, R2 = any>(fn: (data: R1) => Promise<R2>, gn: (data: T) => Promise<R1>, data: T): Promise<R2>;
    composeP<T= any, R1 = any, R2 = any>(fn: (data: R1) => Promise<R2>, gn: (data: T) => Promise<R1>): (data: T) => Promise<R2>;
    composeP<T= any, R1 = any, R2 = any>(fn: (data: R1) => Promise<R2>): (gn: (data: T) => Promise<R1>) => (data: T) => Promise<R2>;

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
     * Counts the number of values within a collection of data
     */
    count<T = any, K = any, V = any>(a: string | ReadonlyArray<T> | Set<T> | Map<K, V> | object): number

    /**
     * Counts the elements of a list according to how many match each value of a key generated by the supplied function
     */
    countBy<T = any>(fn: (a: T) => string | number, arr: ReadonlyArray<T>): { [index: string]: number };
    countBy<T = any>(fn: (a: T) => string | number): (arr: ReadonlyArray<T>) => { [index: string]: number };

    /**
     * Creates a curried (or partial) function
     */
    curry(fn: (...a: any[]) => any): (...a: any[]) => any;

    /**
     * Acts like curry but this expects you to tell it how many arguments to expect.
     */
    curryN(n: number, fn: (...args: any[]) => any): (...a: any[]) => any;

    /**
     * Takes in a number and returns it decremented by 1
     */
    dec(n: number): number

    /**
     * Takes and strictly compares two provided items, also able to handle cyclical data structures
     */
    deepEq<T = any>(a: T, b: T): boolean;
    deepEq<T = any>(a: T): (b: T) => boolean;

    /**
     * Returns the value if it isn't `null`, `NaN`, or `undefined`. Otherwise will give back the provided default
     */
    defaultTo<T, U>(a: T, b: U | null | undefined): T | U;
    defaultTo<T>(a: T): <U>(b: U | null | undefined) => T | U;

    /**
     * Determines which of the two passed in values should be descended, useful for sort methods
     */
    descend<T = any>(a: T, b: T): number;
    descend<T = any>(a: T): (b: T) => number;

    /**
     * Can be used with sort to descend an array bsed on the function given
     */
    descendBy<T = any>(fn: (obj: T) => any, a: T, b: T): number;
    descendBy<T = any>(fn: (obj: T) => any): (a: T, b: T) => number;

    /**
     * Returns a new array of values that are not contained within both given arrays
     * Note: Order of arrays does not matter here
     */
    difference<T = any>(arrs: ReadonlyArray<T>): T[];

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
    drop<T = any>(n: number, list: ReadonlyArray<T> | string): T[] | string;
    drop<T = any>(n: number): (list: ReadonlyArray<T> | string) => T[] | string;

    /**
     * Runs through an array and drops values so long as the function used returns true once it returns false the iteration will stop
     */
    dropWhile<T = any>(fn: (a: T) => boolean, arr: ReadonlyArray<T> | string): T[] | string;
    dropWhile<T = any>(fn: (a: T) => boolean): (arr: ReadonlyArray<T> | string) => T[] | string;

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
     * Takes a value and passes it through an array of functions until the end of the array or one of the functions returns false
     */
    everyPass<T>(fns: ReadonlyArray<(a: T) => boolean>, data: T): boolean;
    everyPass<T>(fns: ReadonlyArray<(a: T) => boolean>): (data: T) => boolean;

    /**
     * Takes a number and builds an array of factors for that number
     */
    factors(n: number): number[];

    /**
     * Filter through a filterable array of data using a provided function
     */
    filter<T = any>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T[];
    filter<T = any>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T[];

    /**
     * Find an item based on the applied function provided
     */
    find<T = any>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T | undefined;
    find<T = any>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T | undefined;

    /**
     * Iterates through an array of values until it finds the index of one that passes the provided function
     */
    findIndex<T = any>(fn: (a: T) => boolean, list: ReadonlyArray<T>): number;
    findIndex<T = any>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => number;

    /**
     * Grabs the first index of a list
     */
    first<T = any>(x: string | ReadonlyArray<T>): string | T;

    /**
     * Takes a function and two parameters and flips them when calling the provided function
     * Also known as the C combinator
     */
    flip<T, U, TResult>(fn: (arg1: U, arg0: T) => TResult, a: T, b: U): TResult;
    flip<T, U, TResult>(fn: (arg1: U, arg0: T) => TResult, a: T): (b: U) => TResult;
    flip<T, U, TResult>(fn: (arg1: U, arg0: T) => TResult): (a: T) => (b: U) => TResult;

    /**
     * Takes an array and folds it using a function, basically a reduce without the need to send an initial accumulator value
     */
    fold<T = any, U = any, TResult = any>(fn: (a: T, acc: TResult) => TResult, arr: ReadonlyArray<T>): U;
    fold<T = any, U = any, TResult = any>(fn: (a: T, acc: TResult) => TResult): (arr: ReadonlyArray<T>) => U;

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
     * Determines if the value provided has a property
     */
    has<T = any>(prop: string, obj: T): boolean;
    has(prop: string): <T = any>(obj: T) => boolean;

    /**
     * Allows you to get the length or "height" of a provided object
     */
    height<T = any>(obj: T): number;

    /**
     * A function that returns the value passed to it
     * Also known as the I combinator
     */
    identity(a: any): any;

    /**
     * Checks to see if the provided list contains at least 1 of the provided value within it
     */
    includes(value: string, list: string): boolean;
    includes(value: string): (list: string) => boolean;
    includes<T = any>(a: T, list: ReadonlyArray<T>): boolean;
    includes<T = any>(a: T): (list: ReadonlyArray<T>) => boolean;

    /**
     * Takes in a number and returns it incremented by 1
     */
    inc(n: number): number

    /**
     * Insert an item into a certain index of an array
     */
    insert<T = any>(i: number, d: T, arr: ReadonlyArray<T>): T[];
    insert<T = any>(i: number, d: T): (arr: ReadonlyArray<T>) => T[];
    insert<T = any>(i: number): (d: T) => (arr: ReadonlyArray<T>) => T[];
    insert(i: number): <T = any>(d: T, arr: ReadonlyArray<T>) => T[];

    /**
     * Returns an array containing elements present in both arrays
     */
    intersection<T = any>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
    intersection<T = any>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];

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
     * Checks if the provided number is equal to the number zero or not
     */
    isZero(n: number): boolean;

    /**
     * Joins together an array of strings with whatever string is passed in
     */
    join(str: string, list: ReadonlyArray<string>): string;
    join(str: string): (list: ReadonlyArray<string>) => string;

    /**
     * Applies the provided function and turns them into a single function you can use on a value
     */
    juxt<T = any, U = any>(fns: ReadonlyArray<(...args: T[]) => any>, args: any[]): U[];
    juxt<T = any>(fns: ReadonlyArray<(...args: T[]) => any>): <U = any>(args: any[]) => U[];

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
    length(a: string | ReadonlyArray<any>): number;

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
    map<T = any, U = any>(fn: (x: T) => U, list: ReadonlyArray<T>): U[];
    map<T = any, U = any>(fn: (x: T) => U): (list: ReadonlyArray<T>) => U[];

    /**
     * Matches a string against some regexp to build an array of matching strings
     */
    match(reg: RegExp, str: string): string[];
    match(reg: RegExp): (str: string) => string[];

    /**
     * Goes through an array of values and grabs the max value of the array
     */
    max<T extends Ord>(list: ReadonlyArray<T>): T;

    /**
     * Finds the maximum from an array of data by applying a function to each value
     */
    maxBy<T = any>(fn: (a: T) => Ord, a: ReadonlyArray<T>): T;
    maxBy<T = any>(fn: (a: T) => Ord): (a: ReadonlyArray<T>) => T;

    /**
     * Gets the average from a given array of numbers
     */
    mean(x: ReadonlyArray<number>): number;

    /**
     * Takes an array of numbers and calculates the median
     */
    median(list: ReadonlyArray<number>): number;

    /**
     * Goes through an array of values and grabs the min value of the array
     */
    min<T extends Ord>(list: ReadonlyArray<T>): T;

    /**
     * Finds the minimum from an array of data by applying a function to each value
     */
    minBy<T = any>(fn: (a: T) => Ord, a: ReadonlyArray<T>): T;
    minBy<T = any>(fn: (a: T) => Ord): (a: ReadonlyArray<T>) => T;

    /**
     * Behaves like the modulo operator should mathematically, unlike the `%` operator. The arguments are required to be integers and will return NaN when the modulus is zero or negative.
     */
    mod(a: number, b: number): number;
    mod(a: number): (b: number) => number;

    /**
     * Finds all of the multiples of a number up until the limit provided
     */
    multiples(limit: number, n: number): number;
    multiples(limit: number): (n: number) => number;

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
     * Takes in two values and checks to make sure they're not equal to each other
     */
    notEq(a: any, b: any): boolean;
    notEq(a: any): (b: any) => boolean;

    /**
     * Returns the nth element of a given array
     */
    nth<T = any>(o: number, list: ReadonlyArray<T>): T | undefined;
    nth(o: number): <T = any>(list: ReadonlyArray<T>) => T | undefined;

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
    or(a: any, b: any): any;
    or(a: any): (b: any) => any;

    /**
     * Applies a function to a value within an object
     */
    over<T = any>(key: string, fn: Arity1Fn, acc: T): T;
    over<T = any>(key: string, fn: Arity1Fn): (acc: T) => T;
    over<T = any>(key: string): (fn: Arity1Fn) => (acc: T) => T;
    over<T = any>(key: string): (fn: Arity1Fn, acc: T) => T;

    /**
     * Takes a predicate function and an array of data and returns the pair
     * One contains the data which passes the predicate function, the other is the values that did not
     */
    partition<T = any>(fn: (a: T) => boolean, list: ReadonlyArray<T>): [T[], T[]];
    partition<T = any>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => [T[], T[]];

    /**
     * Safely crawl through an object to get a value
     */
    path(keys: ReadonlyArray<string>, obj: object): any;
    path(keys: ReadonlyArray<string>): (obj: object) => any;

    /**
     * A safe way to find an item within an object, will return the provided default if it's not found or the value itself if it is found
     */
    pathOr<T = any>(a: any, keys: ReadonlyArray<string>, obj: object): T;
    pathOr(a: any, keys: ReadonlyArray<string>): <T = any>(obj: object) => T;
    pathOr(a: any): (keys: ReadonlyArray<string>) => <T = any>(obj: object) => T;

    /**
     * Applies a sequence of transformations over a value
     */
    pipe<T = any, U = any>(fns: ReadonlyArray<(a: T) => U>, init: any): U;
    pipe<T = any, U = any>(fns: ReadonlyArray<(a: T) => U>): (init: any) => U;

    /**
     * Runs a pipe of promise based functions against a provided value
     */
    pipeP<T = any, U = any>(fns: ReadonlyArray<(a: T) => Promise<U>>, init: any): Promise<U>;
    pipeP<T = any, U = any>(fns: ReadonlyArray<(a: T) => Promise<U>>): (init: any) => Promise<U>;

    /**
     * Uses a schema of functions to apply against a provided object of data
     */
    plan(schema: Schema, obj: { [key: string]: any }): { [key: string]: any };
    plan(schema: Schema): (obj: { [key: string]: any }) => { [key: string]: any };

    /**
     * Returns a new array by plucking the same named property off all objects in the array supplied
     */
    pluck<T = any>(p: string, list: ReadonlyArray<T>): T[];
    pluck(p: string): <T = any>(list: ReadonlyArray<T>) => T[];

    /**
     * Take a base number and brings it to the value of base^exponent
     */
    pow(a: number, b: number): number;
    pow(a: number): (b: number) => number;

    /**
     * Determines if the number passed in is a prime number or not
     */
    prime(x: number): boolean;

    /**
     * Returns a new list with the provided value at the front of the given list
     */
    prepend<T = any>(x: T, list: ReadonlyArray<T>): T[];
    prepend<T = any>(x: T): (list: ReadonlyArray<T>) => T[];

    /**
     * Takes an array of numbers and multiplies them together
     */
    product(arr: ReadonlyArray<number>): number

    /**
     * Brings back the indicated property of an object if it exists
     */
    prop<P extends keyof T, T>(p: P, obj: T): T[P];
    prop<P extends string>(p: P): <T>(obj: Record<P, T>) => T;
    prop<P extends string, T>(p: P): (obj: Record<P, T>) => T;

    /**
     * Takes a desired property from an object and compares the value against a provided value to make sure they're equal
     */
    propEq<P extends string, T>(key: P, val: T, obj: Record<P, T>): boolean;
    propEq<P extends string, T>(key: P, val: T): (obj: Record<P, T>) => boolean;
    propEq<P extends string>(key: P): <T>(val: T) => (obj: Record<P, T>) => boolean;

    /**
     * If the provided object contains it's own property with the specified name, that value is returned. Otherwise it will return the provided default value
     */
    propOr<P extends string, U, T>(def: T, key: P, obj: Record<P, U>): U | T
    propOr<P extends string, T>(def: T, key: P): <U>(obj: Record<P, U>) => U | T
    propOr<T>(def: T): <P extends string>(key: P) => <U>(obj: Record<P, U>) => U | T

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
    reduce<T = any, TResult = any>(fn: (a: T, acc: TResult) => TResult | Reduced<TResult>, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduce<T = any, TResult = any>(fn: (a: T, acc: TResult) => TResult | Reduced<TResult>, acc: TResult): (list: ReadonlyArray<T>) => TResult;
    reduce<T = any, TResult = any>(fn: (a: T, acc: TResult) => TResult | Reduced<TResult>): (acc: TResult) => (list: ReadonlyArray<T>) => TResult;

    /**
     * Used to optimize reduce iterations, can be used to short circuit a reduce without needing to iterate an entire array
     * The returned value should be considered as a black box
     * This optimization only works with `reduce`, and `reduceRight` currently
     */
    reduced<T = any>(x: T): Reduced<T>;

    /**
     * Accepts an array and runs a reduce from right to left with the passed in values.
     * The reducer function accepts the params flipped as compared
     * To the vanilla reduceRight counterpart.
     */
    reduceRight<T = any, TResult = any>(fn: (a: T, acc: TResult) => TResult | Reduced<TResult>, acc: TResult, list: ReadonlyArray<T>): TResult;
    reduceRight<T = any, TResult = any>(fn: (a: T, acc: TResult) => TResult | Reduced<TResult>, acc: TResult): (list: ReadonlyArray<T>) => TResult;
    reduceRight<T = any, TResult = any>(fn: (a: T, acc: TResult) => TResult | Reduced<TResult>): (acc: TResult) => (list: ReadonlyArray<T>) => TResult;

    /**
     * Iterate through a list and reject any value that does not pass the provided function
     */
    reject<T = any>(fn: (a: T) => boolean, list: ReadonlyArray<T>): T[];
    reject<T = any>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => T[];

    /**
     * Takes two numbers and gets the remainder from the division
     */
    rem(a: number, b: number): number;
    rem(a: number): (b: number) => number;

    /**
     * Remove an item from a certin index of an array
     */
    remove<T = any>(i: number, x: ReadonlyArray<T>): T[];
    remove(i: number): <T = any>(x: ReadonlyArray<T>) => T[];

    /**
     * Replaces a substring or regex match in a string with a provided value
     */
    replace(a: RegExp | string, b: string, str: string): string;
    replace(a: RegExp | string, b: string): (str: string) => string;
    replace(a: RegExp | string): (b: string) => (str: string) => string;

    /**
     * Returns a new list with the same elements as the original list, just in the reverse order.
     */
    reverse<T = any>(list: ReadonlyArray<T>): T[];
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
    sift<T = any>(fn: (a: T) => boolean, obj: { [key: string]: T }): { [key: string]: T };
    sift<T = any>(fn: (a: T) => boolean): (obj: { [key: string]: T }) => { [key: string]: T };

    /**
     * Gets the size of a given map or set data type
     */
    size<K = any, V = any, T = any>(x: Set<T> | Map<K, V>): number

    /**
     * Slices out items from a list
     */
    slice<T = any>(a: number, b: number, list: ReadonlyArray<T>): T[];
    slice<T = any>(a: number, b: number): (list: ReadonlyArray<T>) => T[];
    slice<T = any>(a: number): (b: number) => (list: ReadonlyArray<T>) => T[];
    slice(a: number, b: number, list: string): string;
    slice(a: number, b: number): (list: string) => string;
    slice(a: number): (b: number) => (list: string) => string;

    /**
     * Iterates through a provided list verifying that at least one of the values passes the provided function
     */
    some<T = any>(fn: (a: T) => boolean, x: ReadonlyArray<T>): boolean;
    some<T = any>(fn: (a: T) => boolean): (x: ReadonlyArray<T>) => boolean;

    /**
     * Takes a value and passes it through an array of functions until a function returns true, or the end of the array is met
     */
    somePass<T = any>(fns: ReadonlyArray<(a: T) => boolean>, data: T): boolean;
    somePass<T = any>(fns: ReadonlyArray<(a: T) => boolean>): (data: T) => boolean;

    /**
     * Uses a comparison function to sort an array
     */
    sort<T = any>(fn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
    sort<T = any>(fn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];

    /**
     * Sorts through an array of values using the provided function on each value
     */
    sortBy<T = any>(fn: (a: T) => any, list: ReadonlyArray<T>): T[];
    sortBy<T = any>(fn: (a: T) => any): (list: ReadonlyArray<T>) => T[];

    /**
     * Sorts an array based on the functions passed to it. Uses excess functions as tie breakers
     */
    sortWith<T = any>(fns: ReadonlyArray<(a: T, b: T) => number>, arr: ReadonlyArray<T>): T[];
    sortWith<T = any>(fns: ReadonlyArray<(a: T, b: T) => number>): (arr: ReadonlyArray<T>) => T[];

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
     * Takes an array of numbers and adds them together
     */
    sum(arr: ReadonlyArray<number>): number

    /**
     * Takes the values from an array up until the point specified
     */
    take<T = any>(i: number, list: ReadonlyArray<T> | string): T[] | string;
    take<T = any>(i: number): (list: ReadonlyArray<T> | string) => T[] | string;

    /**
     * Takes values from an array so long as the predicate function continues to return true
     */
    takeWhile<T = any>(fn: (x: T) => boolean, list: ReadonlyArray<T> | string): T[] | string;
    takeWhile<T = any>(fn: (x: T) => boolean): (list: ReadonlyArray<T> | string) => T[] | string;

    /**
     * Tests regexp against a string value returns true if matches were found, false if not
     */
    test(reg: RegExp, str: string): boolean;
    test(reg: RegExp): (str: string) => boolean;

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
    union<T = any>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): T[];
    union<T = any>(a: ReadonlyArray<T>): (b: ReadonlyArray<T>) => T[];

    /**
     * Removes the duplicate values from a provided array
     */
    uniq<T = any>(list: ReadonlyArray<T>): T[];

    /**
     * Creates an array of unique values after applying a function to each value
     */
    uniqBy<T = any, U = any>(fn: (a: T) => U, list: ReadonlyArray<T>): T[];
    uniqBy<T = any, U = any>(fn: (a: T) => U): (list: ReadonlyArray<T>) => T[];

    /**
     * Takes a value and if it fails the function check then it will apply the provided function, otherwise it will return the value
     */
    unless<T = any, U = any>(fn: (a: T) => boolean, act: (a: T) => U, x: T): U;
    unless<T = any, U = any>(fn: (a: T) => boolean, act: (a: T) => U): (x: T) => U;
    unless<T = any, U = any>(fn: (a: T) => boolean): (act: (a: T) => U) => (x: T) => U;

    /**
     * Add an item to an array within a certain index of the array
     */
    update<T = any>(index: number, val: any, list: ReadonlyArray<T>): T[];
    update<T = any>(index: number, val: any): (list: ReadonlyArray<T>) => T[];
    update<T = any>(index: number): (val: any) => (list: ReadonlyArray<T>) => T[];

    /**
     * Takes a value and if it passes the given function check it will apply the action function, otherwise it will return the value
     */
    when<T = any, U = any>(fn: (a: T) => boolean, act: (a: T) => U, x: T): U;
    when<T = any, U = any>(fn: (a: T) => boolean, act: (a: T) => U): (x: T) => U;
    when<T = any, U = any>(fn: (a: T) => boolean): (act: (a: T) => U) => (x: T) => U;

    /**
     * Takes a schema of function to apply to an object, and makes sure all of them pass
     */
    whole(schema: object, data: object): boolean;
    whole(schema: object): (data: object) => boolean;

    /**
     * Fills in non exsistent property values (null, undefined, and NaN) with the provided defaults.
     */
    withDefaults<V = any>(def: { [key: string]: V }, obj: any): any;
    withDefaults<V = any>(def: { [key: string]: V }): (obj: any) => any;

    /**
     * Checks to see if a number is between two other numbers (exclusive)
     */
    within(min: number, max: number, n: number): boolean;
    within(min: number, max: number): (n: number) => boolean;
    within(min: number): (max: number) => (n: number) => boolean;

    /**
     * Takes two arrays and combines them into a key value pair object
     */
    zip<T = any, V = any>(x: ReadonlyArray<T>, y: ReadonlyArray<V>): Array<{ [key: string]: V }>;
    zip<T = any>(x: ReadonlyArray<T>): <V = any>(y: ReadonlyArray<V>) => Array<{ [key: string]: V }>;
  }
}

export = K;
export as namespace K;
